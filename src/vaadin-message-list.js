/**
 * @license
 * Copyright (c) 2021 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import { ThemableMixin } from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';
import { ElementMixin } from '@vaadin/vaadin-element-mixin/vaadin-element-mixin.js';
import './vaadin-message.js';
/**
 * `<vaadin-message-list>` is a Web Component for showing an ordered list of messages. The messages are rendered as <vaadin-message>
 *
 * ```html
 * <vaadin-message-list
 *   items='[{"text":"Hello list","time":"yesterday","userName":"Matt Mambo","userAbbr":"MM","userColorIndex":1},
 *           {"text":"Another message","time":"right now", "userName":"Linsey Listy","userAbbr":"LL","userColorIndex":2, "userImg":"/test/visual/avatars/avatar.jpg"}]'>
 * </vaadin-message-list>
 * ```
 * It is recommended to set it programmatically by calling messageList.items = [...];
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ----------|----------------
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @extends HTMLElement
 * @mixes ThemableMixin
 * @mixes ElementMixin
 */
class MessageListElement extends ElementMixin(ThemableMixin(PolymerElement)) {
  static get properties() {
    return {
      /**
       * A user object that can be used to render avatar and name.
       * The user object can consist of the folowing properties:
       * ```js
       * Array<{
       *   text: string,
       *   time: string,
       *   userName: string,
       *   userAbbr: string,
       *   userImg: string,
       *   userColorIndex: number
       * }>
       * ```
       */
      items: {
        type: Array,
        value: function () {
          return [];
        }
      }
    };
  }

  static get template() {
    return html`
      <style>
        :host {
          display: block;
          overflow: auto;
        }

        :host([hidden]) {
          display: none !important;
        }
      </style>
      <template is="dom-repeat" items="[[items]]">
        <vaadin-message
          time="[[item.time]]"
          user-name="[[item.userName]]"
          user-abbr="[[item.userAbbr]]"
          user-img="[[item.userImg]]"
          user-color-index="[[item.userColorIndex]]"
          >[[item.text]]</vaadin-message
        >
      </template>
    `;
  }

  ready() {
    super.ready();
    this.setAttribute('role', 'list');
  }

  static get is() {
    return 'vaadin-message-list';
  }

  static get version() {
    return '0.1.0';
  }
}

customElements.define(MessageListElement.is, MessageListElement);

export { MessageListElement };
