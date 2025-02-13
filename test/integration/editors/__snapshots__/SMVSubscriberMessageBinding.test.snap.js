/* @web/test-runner snapshot v1 */
export const snapshots = {};

snapshots["Sampled Values Plugin in Publisher view initially the plugin looks like the latest snapshot"] = 
`<div>
  <mwc-formfield label="[subscription.smv.view.publisherView]">
    <mwc-radio
      checked=""
      id="smvPublisherView"
      name="view"
      value="smv"
    >
    </mwc-radio>
  </mwc-formfield>
  <mwc-formfield label="[subscription.smv.view.subscriberView]">
    <mwc-radio
      id="smvSubscriberView"
      name="view"
      value="ied"
    >
    </mwc-radio>
  </mwc-formfield>
  <div class="container">
    <smv-list class="row">
    </smv-list>
    <subscriber-list-smv class="row">
    </subscriber-list-smv>
  </div>
</div>
<wizard-dialog>
</wizard-dialog>
`;
/* end snapshot Sampled Values Plugin in Publisher view initially the plugin looks like the latest snapshot */

snapshots["Sampled Values Plugin in Publisher view initially the Sampled Values list looks like the latest snapshot"] = 
`<section tabindex="0">
  <h1>
    [subscription.smv.publisher.title]
  </h1>
  <filtered-list activatable="">
    <mwc-list-item
      aria-disabled="false"
      graphic="icon"
      noninteractive=""
      tabindex="-1"
      value=""
    >
      <span>
        IED1
      </span>
      <mwc-icon slot="graphic">
        developer_board
      </mwc-icon>
    </mwc-list-item>
    <li
      divider=""
      role="separator"
    >
    </li>
    <mwc-list-item
      aria-disabled="false"
      graphic="icon"
      noninteractive=""
      tabindex="-1"
      value=""
    >
      <span>
        IED2
      </span>
      <mwc-icon slot="graphic">
        developer_board
      </mwc-icon>
    </mwc-list-item>
    <li
      divider=""
      role="separator"
    >
    </li>
    <mwc-list-item
      aria-disabled="false"
      graphic="icon"
      noninteractive=""
      tabindex="-1"
      value="IED3>>MU01>MSVCB01"
    >
      <span>
        IED3
      </span>
      <mwc-icon slot="graphic">
        developer_board
      </mwc-icon>
    </mwc-list-item>
    <li
      divider=""
      role="separator"
    >
    </li>
    <mwc-list-item
      aria-disabled="false"
      graphic="large"
      hasmeta=""
      mwc-list-item=""
      tabindex="0"
      value="IED3>>MU01>MSVCB01"
    >
      <mwc-icon slot="graphic">
      </mwc-icon>
      <span>
        MSVCB01
      </span>
      <mwc-icon-button
        class="hidden"
        icon="edit"
        slot="meta"
      >
      </mwc-icon-button>
    </mwc-list-item>
    <mwc-list-item
      aria-disabled="false"
      graphic="icon"
      noninteractive=""
      tabindex="-1"
      value="IED4>>CircuitBreaker_CB1>MSVCB02"
    >
      <span>
        IED4
      </span>
      <mwc-icon slot="graphic">
        developer_board
      </mwc-icon>
    </mwc-list-item>
    <li
      divider=""
      role="separator"
    >
    </li>
    <mwc-list-item
      aria-disabled="false"
      graphic="large"
      hasmeta=""
      mwc-list-item=""
      tabindex="-1"
      value="IED4>>CircuitBreaker_CB1>MSVCB02"
    >
      <mwc-icon slot="graphic">
      </mwc-icon>
      <span>
        MSVCB02
      </span>
      <mwc-icon-button
        class="hidden"
        icon="edit"
        slot="meta"
      >
      </mwc-icon-button>
    </mwc-list-item>
  </filtered-list>
</section>
`;
/* end snapshot Sampled Values Plugin in Publisher view initially the Sampled Values list looks like the latest snapshot */

snapshots["Sampled Values Plugin in Publisher view initially the subscriber list looks like the latest snapshot"] = 
`<section tabindex="0">
  <h1>
    [subscription.smv.publisher.subscriberTitle]
  </h1>
  <mwc-list>
    <mwc-list-item
      aria-disabled="false"
      noninteractive=""
      tabindex="-1"
    >
      <span>
        [subscription.subscriber.noControlBlockSelected]
      </span>
    </mwc-list-item>
  </mwc-list>
</section>
`;
/* end snapshot Sampled Values Plugin in Publisher view initially the subscriber list looks like the latest snapshot */

snapshots["Sampled Values Plugin in Publisher view when selecting a Sampled Values message the list on the right will initially show the subscribed / partially subscribed / not subscribed IEDs"] = 
`<section tabindex="0">
  <h1>
    [subscription.smv.publisher.subscriberTitle]
  </h1>
  <div class="wrapper">
    <filtered-list>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value="IED1"
      >
        <span>
          [subscription.subscriber.subscribed]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        hasmeta=""
        mwc-list-item=""
        tabindex="0"
      >
        <span>
          IED1
        </span>
        <mwc-icon slot="graphic">
          clear
        </mwc-icon>
        <mwc-icon
          slot="meta"
          title="IED1>>Disconnectors> LSVS 1"
        >
          monitor_heart
        </mwc-icon>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value="IED4"
      >
        <span>
          [subscription.subscriber.partiallySubscribed]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        hasmeta=""
        mwc-list-item=""
        tabindex="-1"
      >
        <span>
          IED4
        </span>
        <mwc-icon slot="graphic">
          add
        </mwc-icon>
        <mwc-icon
          slot="meta"
          title="IED4>>CircuitBreaker_CB1> LSVS 1"
        >
          monitor_heart
        </mwc-icon>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value="IED2"
      >
        <span>
          [subscription.subscriber.availableToSubscribe]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        mwc-list-item=""
        tabindex="-1"
      >
        <span>
          IED2
        </span>
        <mwc-icon slot="graphic">
          add
        </mwc-icon>
      </mwc-list-item>
    </filtered-list>
  </div>
</section>
`;
/* end snapshot Sampled Values Plugin in Publisher view when selecting a Sampled Values message the list on the right will initially show the subscribed / partially subscribed / not subscribed IEDs */

snapshots["Sampled Values Plugin in Publisher view when selecting a Sampled Values message and subscribing an unsubscribed IED it looks like the latest snapshot"] = 
`<section tabindex="0">
  <h1>
    [subscription.smv.publisher.subscriberTitle]
  </h1>
  <div class="wrapper">
    <filtered-list>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value="IED1 IED2"
      >
        <span>
          [subscription.subscriber.subscribed]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        hasmeta=""
        mwc-list-item=""
        tabindex="-1"
      >
        <span>
          IED1
        </span>
        <mwc-icon slot="graphic">
          clear
        </mwc-icon>
        <mwc-icon
          slot="meta"
          title="IED1>>Disconnectors> LSVS 1"
        >
          monitor_heart
        </mwc-icon>
      </mwc-list-item>
      <mwc-list-item
        graphic="avatar"
        mwc-list-item=""
      >
        <span>
          IED2
        </span>
        <mwc-icon slot="graphic">
          clear
        </mwc-icon>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value="IED4"
      >
        <span>
          [subscription.subscriber.partiallySubscribed]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        hasmeta=""
        mwc-list-item=""
        tabindex="-1"
      >
        <span>
          IED4
        </span>
        <mwc-icon slot="graphic">
          add
        </mwc-icon>
        <mwc-icon
          slot="meta"
          title="IED4>>CircuitBreaker_CB1> LSVS 1"
        >
          monitor_heart
        </mwc-icon>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value=""
      >
        <span>
          [subscription.subscriber.availableToSubscribe]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        graphic="avatar"
        noninteractive=""
      >
        <span>
          [subscription.none]
        </span>
      </mwc-list-item>
    </filtered-list>
  </div>
</section>
`;
/* end snapshot Sampled Values Plugin in Publisher view when selecting a Sampled Values message and subscribing an unsubscribed IED it looks like the latest snapshot */

snapshots["Sampled Values Plugin in Publisher view when selecting a Sampled Values message and you unsubscribe a subscribed IED it looks like the latest snapshot"] = 
`<section tabindex="0">
  <h1>
    [subscription.smv.publisher.subscriberTitle]
  </h1>
  <div class="wrapper">
    <filtered-list>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value=""
      >
        <span>
          [subscription.subscriber.subscribed]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        graphic="avatar"
        noninteractive=""
      >
        <span>
          [subscription.none]
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value="IED4"
      >
        <span>
          [subscription.subscriber.partiallySubscribed]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        hasmeta=""
        mwc-list-item=""
        tabindex="-1"
      >
        <span>
          IED4
        </span>
        <mwc-icon slot="graphic">
          add
        </mwc-icon>
        <mwc-icon
          slot="meta"
          title="IED4>>CircuitBreaker_CB1> LSVS 1"
        >
          monitor_heart
        </mwc-icon>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value="IED1 IED2"
      >
        <span>
          [subscription.subscriber.availableToSubscribe]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        mwc-list-item=""
        tabindex="-1"
      >
        <span>
          IED1
        </span>
        <mwc-icon slot="graphic">
          add
        </mwc-icon>
      </mwc-list-item>
      <mwc-list-item
        graphic="avatar"
        mwc-list-item=""
      >
        <span>
          IED2
        </span>
        <mwc-icon slot="graphic">
          add
        </mwc-icon>
      </mwc-list-item>
    </filtered-list>
  </div>
</section>
`;
/* end snapshot Sampled Values Plugin in Publisher view when selecting a Sampled Values message and you unsubscribe a subscribed IED it looks like the latest snapshot */

snapshots["Sampled Values Plugin in Publisher view when selecting a Sampled Values message and you subscribe a partially subscribed IED it looks like the latest snapshot"] = 
`<section tabindex="0">
  <h1>
    [subscription.smv.publisher.subscriberTitle]
  </h1>
  <div class="wrapper">
    <filtered-list>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value="IED1 IED4"
      >
        <span>
          [subscription.subscriber.subscribed]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        hasmeta=""
        mwc-list-item=""
        tabindex="-1"
      >
        <span>
          IED1
        </span>
        <mwc-icon slot="graphic">
          clear
        </mwc-icon>
        <mwc-icon
          slot="meta"
          title="IED1>>Disconnectors> LSVS 1"
        >
          monitor_heart
        </mwc-icon>
      </mwc-list-item>
      <mwc-list-item
        graphic="avatar"
        hasmeta=""
        mwc-list-item=""
      >
        <span>
          IED4
        </span>
        <mwc-icon slot="graphic">
          clear
        </mwc-icon>
        <mwc-icon
          slot="meta"
          title="IED4>>CircuitBreaker_CB1> LSVS 1"
        >
          monitor_heart
        </mwc-icon>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value=""
      >
        <span>
          [subscription.subscriber.partiallySubscribed]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        graphic="avatar"
        noninteractive=""
      >
        <span>
          [subscription.none]
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value="IED2"
      >
        <span>
          [subscription.subscriber.availableToSubscribe]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        mwc-list-item=""
        tabindex="-1"
      >
        <span>
          IED2
        </span>
        <mwc-icon slot="graphic">
          add
        </mwc-icon>
      </mwc-list-item>
    </filtered-list>
  </div>
</section>
`;
/* end snapshot Sampled Values Plugin in Publisher view when selecting a Sampled Values message and you subscribe a partially subscribed IED it looks like the latest snapshot */

snapshots["Sampled Values Plugin in Subscriber view initially the plugin looks like the latest snapshot"] = 
`<div>
  <mwc-formfield label="[subscription.smv.view.publisherView]">
    <mwc-radio
      checked=""
      id="smvPublisherView"
      name="view"
      value="smv"
    >
    </mwc-radio>
  </mwc-formfield>
  <mwc-formfield label="[subscription.smv.view.subscriberView]">
    <mwc-radio
      id="smvSubscriberView"
      name="view"
      value="ied"
    >
    </mwc-radio>
  </mwc-formfield>
  <div class="container">
    <ied-list
      class="row"
      servicetype="smv"
    >
    </ied-list>
    <subscriber-list-smv class="row">
    </subscriber-list-smv>
  </div>
</div>
<wizard-dialog>
</wizard-dialog>
`;
/* end snapshot Sampled Values Plugin in Subscriber view initially the plugin looks like the latest snapshot */

snapshots["Sampled Values Plugin in Subscriber view initially the IED list looks like the latest snapshot"] = 
`<section tabindex="0">
  <h1>
    [subscription.smv.subscriber.iedListTitle]
  </h1>
  <filtered-list activatable="">
    <mwc-list-item
      aria-disabled="false"
      graphic="icon"
      mwc-list-item=""
      tabindex="0"
    >
      <span>
        IED1
      </span>
      <mwc-icon slot="graphic">
        developer_board
      </mwc-icon>
    </mwc-list-item>
    <mwc-list-item
      aria-disabled="false"
      graphic="icon"
      mwc-list-item=""
      tabindex="-1"
    >
      <span>
        IED2
      </span>
      <mwc-icon slot="graphic">
        developer_board
      </mwc-icon>
    </mwc-list-item>
    <mwc-list-item
      aria-disabled="false"
      graphic="icon"
      mwc-list-item=""
      tabindex="-1"
    >
      <span>
        IED3
      </span>
      <mwc-icon slot="graphic">
        developer_board
      </mwc-icon>
    </mwc-list-item>
    <mwc-list-item
      aria-disabled="false"
      graphic="icon"
      mwc-list-item=""
      tabindex="-1"
    >
      <span>
        IED4
      </span>
      <mwc-icon slot="graphic">
        developer_board
      </mwc-icon>
    </mwc-list-item>
  </filtered-list>
</section>
`;
/* end snapshot Sampled Values Plugin in Subscriber view initially the IED list looks like the latest snapshot */

snapshots["Sampled Values Plugin in Subscriber view initially the subscriber list looks like the latest snapshot"] = 
`<section tabindex="0">
  <h1>
    [subscription.smv.subscriber.publisherTitle]
  </h1>
  <mwc-list>
    <mwc-list-item
      aria-disabled="false"
      noninteractive=""
      tabindex="-1"
    >
      <span>
        [subscription.subscriber.noIedSelected]
      </span>
    </mwc-list-item>
  </mwc-list>
</section>
`;
/* end snapshot Sampled Values Plugin in Subscriber view initially the subscriber list looks like the latest snapshot */

snapshots["Sampled Values Plugin in Subscriber view when selecting an IED the subscriber list will initially show the subscribed / partially subscribed / not subscribed IEDs"] = 
`<section tabindex="0">
  <h1>
    [subscription.smv.subscriber.publisherTitle]
  </h1>
  <div class="wrapper">
    <filtered-list>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value=""
      >
        <span>
          [subscription.subscriber.subscribed]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        noninteractive=""
        tabindex="-1"
      >
        <span>
          [subscription.none]
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value="IED4>>CircuitBreaker_CB1>MSVCB02"
      >
        <span>
          [subscription.subscriber.partiallySubscribed]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        mwc-list-item=""
        tabindex="0"
      >
        <span>
          MSVCB02 (IED4)
        </span>
        <mwc-icon slot="graphic">
          add
        </mwc-icon>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value="IED3>>MU01>MSVCB01"
      >
        <span>
          [subscription.subscriber.availableToSubscribe]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        mwc-list-item=""
        tabindex="-1"
      >
        <span>
          MSVCB01 (IED3)
        </span>
        <mwc-icon slot="graphic">
          add
        </mwc-icon>
      </mwc-list-item>
    </filtered-list>
  </div>
</section>
`;
/* end snapshot Sampled Values Plugin in Subscriber view when selecting an IED the subscriber list will initially show the subscribed / partially subscribed / not subscribed IEDs */

snapshots["Sampled Values Plugin in Subscriber view when selecting an IED and subscribing a unsubscribed Sampled Value message clicking on a SampledValueControl list item it looks like the latest snapshot"] = 
`<section tabindex="0">
  <h1>
    [subscription.smv.subscriber.publisherTitle]
  </h1>
  <div class="wrapper">
    <filtered-list>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value="IED3>>MU01>MSVCB01"
      >
        <span>
          [subscription.subscriber.subscribed]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        mwc-list-item=""
        tabindex="-1"
      >
        <span>
          MSVCB01 (IED3)
        </span>
        <mwc-icon slot="graphic">
          clear
        </mwc-icon>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value=""
      >
        <span>
          [subscription.subscriber.partiallySubscribed]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        noninteractive=""
        tabindex="-1"
      >
        <span>
          [subscription.none]
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value="IED4>>CircuitBreaker_CB1>MSVCB02"
      >
        <span>
          [subscription.subscriber.availableToSubscribe]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        aria-selected="true"
        graphic="avatar"
        mwc-list-item=""
        selected=""
        tabindex="0"
      >
        <span>
          MSVCB02 (IED4)
        </span>
        <mwc-icon slot="graphic">
          add
        </mwc-icon>
      </mwc-list-item>
    </filtered-list>
  </div>
</section>
`;
/* end snapshot Sampled Values Plugin in Subscriber view when selecting an IED and subscribing a unsubscribed Sampled Value message clicking on a SampledValueControl list item it looks like the latest snapshot */

snapshots["Sampled Values Plugin in Subscriber view when selecting an IED and unsubscribing a subscribed Sampled Value message it looks like the latest snapshot"] = 
`<section tabindex="0">
  <h1>
    [subscription.smv.subscriber.publisherTitle]
  </h1>
  <div class="wrapper">
    <filtered-list>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value=""
      >
        <span>
          [subscription.subscriber.subscribed]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        graphic="avatar"
        noninteractive=""
      >
        <span>
          [subscription.none]
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value=""
      >
        <span>
          [subscription.subscriber.partiallySubscribed]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        noninteractive=""
        tabindex="-1"
      >
        <span>
          [subscription.none]
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value="IED3>>MU01>MSVCB01 IED4>>CircuitBreaker_CB1>MSVCB02"
      >
        <span>
          [subscription.subscriber.availableToSubscribe]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        aria-selected="false"
        graphic="avatar"
        mwc-list-item=""
        tabindex="-1"
      >
        <span>
          MSVCB01 (IED3)
        </span>
        <mwc-icon slot="graphic">
          add
        </mwc-icon>
      </mwc-list-item>
      <mwc-list-item
        graphic="avatar"
        mwc-list-item=""
      >
        <span>
          MSVCB02 (IED4)
        </span>
        <mwc-icon slot="graphic">
          add
        </mwc-icon>
      </mwc-list-item>
    </filtered-list>
  </div>
</section>
`;
/* end snapshot Sampled Values Plugin in Subscriber view when selecting an IED and unsubscribing a subscribed Sampled Value message it looks like the latest snapshot */

snapshots["Sampled Values Plugin in Subscriber view when selecting an IED and subscribing a partially subscribed Sampled Value message it looks like the latest snapshot"] = 
`<section tabindex="0">
  <h1>
    [subscription.smv.subscriber.publisherTitle]
  </h1>
  <div class="wrapper">
    <filtered-list>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value="IED4>>CircuitBreaker_CB1>MSVCB02"
      >
        <span>
          [subscription.subscriber.subscribed]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        graphic="avatar"
        mwc-list-item=""
      >
        <span>
          MSVCB02 (IED4)
        </span>
        <mwc-icon slot="graphic">
          clear
        </mwc-icon>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value=""
      >
        <span>
          [subscription.subscriber.partiallySubscribed]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        graphic="avatar"
        noninteractive=""
      >
        <span>
          [subscription.none]
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        noninteractive=""
        tabindex="-1"
        value="IED3>>MU01>MSVCB01"
      >
        <span>
          [subscription.subscriber.availableToSubscribe]
        </span>
      </mwc-list-item>
      <li
        divider=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        graphic="avatar"
        mwc-list-item=""
        tabindex="-1"
      >
        <span>
          MSVCB01 (IED3)
        </span>
        <mwc-icon slot="graphic">
          add
        </mwc-icon>
      </mwc-list-item>
    </filtered-list>
  </div>
</section>
`;
/* end snapshot Sampled Values Plugin in Subscriber view when selecting an IED and subscribing a partially subscribed Sampled Value message it looks like the latest snapshot */

