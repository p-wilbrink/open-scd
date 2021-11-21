import { get, translate } from 'lit-translate';

import {
  Button,
  Create,
  EditorAction,
  getReference,
  getValue,
  html,
  identity,
  List,
  ListItem,
  newActionEvent,
  newWizardEvent,
  patterns,
  SCLTag,
  Select,
  selector,
  Wizard,
  WizardActor,
  WizardInput,
} from '../../foundation.js';
import {
  addReferencedDataTypes,
  allDataTypeSelector,
  unifyCreateActionArray,
  updateIDNamingAction,
} from './foundation.js';

import { SingleSelectedEvent } from '@material/mwc-list/mwc-list-foundation';
import { createBDAWizard, editBDAWizard } from '../../wizards/bda.js';
import { WizardTextField } from '../../wizard-textfield.js';

export function editDaTypeWizard(
  dATypeIdentity: string,
  doc: XMLDocument
): Wizard | undefined {
  const datype = doc.querySelector(selector('DAType', dATypeIdentity));
  if (!datype) return undefined;

  const id = datype.getAttribute('id');
  const desc = datype.getAttribute('desc');

  return [
    {
      title: get('datype.wizard.title.edit'),
      element: datype ?? undefined,
      primary: {
        icon: '',
        label: get('save'),
        action: updateIDNamingAction(datype),
      },
      content: [
        html`<${Button}
          icon="delete"
          trailingIcon
          label="${translate('remove')}"
          @click=${(e: MouseEvent) => {
            e.target!.dispatchEvent(newWizardEvent());
            e.target!.dispatchEvent(
              newActionEvent({
                old: {
                  parent: datype.parentElement!,
                  element: datype,
                  reference: datype.nextSibling,
                },
              })
            );
          }}
          fullwidth
        ></${Button}> `,
        html`<${WizardTextField}
          label="id"
          helper="${translate('scl.id')}"
          .maybeValue=${id}
          required
          maxlength="127"
          minlength="1"
          pattern="${patterns.nmToken}"
          dialogInitialFocus
        ></${WizardTextField}>`,
        html`<${WizardTextField}
          label="desc"
          helper="${translate('scl.desc')}"
          .maybeValue=${desc}
          nullable
          pattern="${patterns.normalizedString}"
        ></${WizardTextField}>`,
        html`<${Button}
            slot="graphic"
            icon="playlist_add"
            trailingIcon
            label="${translate('scl.DA')}"
            @click=${(e: Event) => {
              if (datype)
                e.target!.dispatchEvent(
                  newWizardEvent(createBDAWizard(datype))
                );
              e.target!.dispatchEvent(newWizardEvent());
            }}
          ></${Button}>
          <${List}
            style="margin-top: 0px;"
            @selected=${(e: SingleSelectedEvent) => {
              const bdaIdentity = (<ListItem>(<List>e.target).selected).value;
              const bda = doc.querySelector(selector('BDA', bdaIdentity));

              if (bda)
                e.target!.dispatchEvent(newWizardEvent(editBDAWizard(bda)));
              e.target!.dispatchEvent(newWizardEvent());
            }}
          >
            ${Array.from(datype.querySelectorAll('BDA')).map(
              bda =>
                html`<${ListItem}
                  twoline
                  tabindex="0"
                  value="${identity(bda)}"
                  ><span>${bda.getAttribute('name')}</span
                  ><span slot="secondary"
                    >${bda.getAttribute('bType') === 'Enum' ||
                    bda.getAttribute('bType') === 'Struct'
                      ? '#' + bda.getAttribute('type')
                      : bda.getAttribute('bType')}</span
                  ></${ListItem}
                >`
            )}
          </${List}> `,
      ],
    },
  ];
}

function addPredefinedDAType(
  parent: Element,
  templates: XMLDocument
): WizardActor {
  return (inputs: WizardInput[]): EditorAction[] => {
    const id = getValue(inputs.find(i => i.label === 'id')!);

    if (!id) return [];

    const existId = Array.from(
      templates.querySelectorAll(allDataTypeSelector)
    ).some(type => type.getAttribute('id') === id);

    if (existId) return [];

    const desc = getValue(inputs.find(i => i.label === 'desc')!);
    const values = <Select>inputs.find(i => i.label === 'values');
    const selectedElement = values.selected
      ? templates.querySelector(`DAType[id="${values.selected.value}"]`)
      : null;
    const element = values.selected
      ? <Element>selectedElement!.cloneNode(true)
      : parent.ownerDocument.createElement('DAType');

    element.setAttribute('id', id);
    if (desc) element.setAttribute('desc', desc);

    const actions: Create[] = [];

    if (selectedElement)
      addReferencedDataTypes(selectedElement, parent).forEach(action =>
        actions.push(action)
      );

    actions.push({
      new: {
        parent,
        element,
        reference: getReference(parent, <SCLTag>element.tagName),
      },
    });

    return unifyCreateActionArray(actions);
  };
}

export function createDATypeWizard(
  parent: Element,
  templates: Document
): Wizard {
  return [
    {
      title: get('datype.wizard.title.add'),
      primary: {
        icon: 'add',
        label: get('add'),
        action: addPredefinedDAType(parent, templates),
      },
      content: [
        html`<${Select}
          fixedMenuPosition
          outlined
          icon="playlist_add_check"
          label="values"
          helper="Default enumerations"
        >
          ${Array.from(templates.querySelectorAll('DAType')).map(
            datype =>
              html`<${ListItem}
                graphic="icon"
                hasMeta
                value="${datype.getAttribute('id') ?? ''}"
                ><span
                  >${datype.getAttribute('id')?.replace('OpenSCD_', '')}</span
                >
                <span slot="meta"
                  >${datype.querySelectorAll('BDA').length}</span
                >
              </${ListItem}>`
          )}
        </${Select}>`,
        html`<${WizardTextField}
          label="id"
          helper="${translate('scl.id')}"
          .maybeValue=${''}
          required
          maxlength="255"
          minlength="1"
          pattern="${patterns.nmToken}"
          dialogInitialFocus
        ></${WizardTextField}>`,
        html`<${WizardTextField}
          label="desc"
          helper="${translate('scl.desc')}"
          .maybeValue=${null}
          nullable
          pattern="${patterns.normalizedString}"
        ></${WizardTextField}>`,
      ],
    },
  ];
}
