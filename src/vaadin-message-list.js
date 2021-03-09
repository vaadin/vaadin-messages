/**
 * @license
 * Copyright (c) 2021 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { microTask } from '@polymer/polymer/lib/utils/async.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';
import { ThemableMixin } from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';
import { ElementMixin } from '@vaadin/vaadin-element-mixin/vaadin-element-mixin.js';
import './vaadin-message.js';
/**
 * `<vaadin-message-list>` is a Web Component for showing an ordered list of messages. The messages are rendered as <vaadin-message>
 *
 * ### Example
 * To create a new message list, add the component to the page:
 * ```html
 * <vaadin-message-list></vaadin-message-list>
 * ```
 *
 * Provide the messages to the message list with the `items` property.
 * ```js
 * document.querySelector('vaadin-message-list').items = [
 *   { text: 'Hello list', time: 'yesterday', userName: 'Matt Mambo', userAbbr: 'MM', userColorIndex: 1 },
 *   { text: 'Another message', time: 'right now', userName: 'Linsey Listy', userAbbr: 'LL', userColorIndex: 2, userImg: '/static/img/avatar.jpg' }
 * ];
 * ```
 *
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
        },
        observer: '_itemsChanged'
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
      <div part="list" role="list">
        <template is="dom-repeat" items="[[items]]">
          <vaadin-message
            time="[[item.time]]"
            user-name="[[item.userName]]"
            user-abbr="[[item.userAbbr]]"
            user-img="[[item.userImg]]"
            user-color-index="[[item.userColorIndex]]"
            role="listitem"
            on-messagefocus="_handleFocusEvent"
            >[[item.text]]</vaadin-message
          >
        </template>
      </div>
    `;
  }

  ready() {
    super.ready();

    // Make screen readers announce new messages
    this.setAttribute('aria-relevant', 'additions');
    this.setAttribute('role', 'log');

    // Keyboard navi
    this.addEventListener('keydown', (e) => this._onKeydown(e));
  }

  /** @protected */
  get _messages() {
    return Array.from(this.shadowRoot.querySelectorAll('vaadin-message'));
  }

  _itemsChanged(newVal, oldVal) {
    const focusedElement = this._getIndexOfFocusableElement();
    if (
      newVal &&
      newVal.length &&
      (!oldVal || newVal.length > oldVal.length) && // there are new items
      this.scrollHeight < this.clientHeight + this.scrollTop + 50 // bottom of list
    ) {
      microTask.run(() => {
        this._setTabIndexesByIndex(focusedElement);
        this._scrollToLastMessage();
      });
    }
  }

  _scrollToLastMessage() {
    if (this.items.length > 0) {
      this.scrollTop = this.scrollHeight - this.clientHeight;
    }
  }

  /**
   * @param {!KeyboardEvent} event
   * @protected
   */
  _onKeydown(event) {
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    // only check keyboard events on messages
    const target = event.composedPath()[0];
    const currentIdx = this._messages.indexOf(target);
    if (currentIdx === -1) {
      return;
    }

    let idx, increment;

    switch (event.key) {
      case 'ArrowUp':
        increment = -1;
        idx = currentIdx - 1;
        break;
      case 'ArrowDown':
        increment = 1;
        idx = currentIdx + 1;
        break;
      case 'Home':
        increment = 1;
        idx = 0;
        break;
      case 'End':
        increment = -1;
        idx = this._messages.length - 1;
        break;
      default:
      // nothing to do
    }

    idx = this._getAvailableIndex(idx, increment);
    if (idx >= 0) {
      this._focus(idx);
      event.preventDefault();
    }
  }

  /**
   * @param {number} idx
   * @param {number} increment
   * @return {number}
   * @protected
   */
  _getAvailableIndex(idx, increment) {
    const totalItems = this.items.length;
    for (let i = 0; typeof idx == 'number' && i < totalItems; i++, idx += increment || 1) {
      if (idx < 0) {
        idx = totalItems - 1;
      } else if (idx >= totalItems) {
        idx = 0;
      }

      return idx;
    }
    return -1;
  }

  /**
   * @param {number} idx
   * @protected
   */
  _focus(idx) {
    const target = this._messages[idx];
    target.focus();
  }

  _handleFocusEvent(e) {
    this._setTabIndexesByMessage(e.detail.message);
  }
  /**
   * @param {number} idx
   * @protected
   */
  _setTabIndexesByIndex(idx) {
    idx = this._getAvailableIndex(idx, 1);
    const message = this._messages[idx] || this._messages[0];
    this._setTabIndexesByMessage(message);
  }

  _setTabIndexesByMessage(message) {
    this._messages.forEach((e) => (e.tabIndex = e === message ? 0 : -1));
  }

  _getIndexOfFocusableElement() {
    const index = this._messages.findIndex((e) => e.tabIndex == 0);
    return index != -1 ? index : 0;
  }

  static get is() {
    return 'vaadin-message-list';
  }

  static get version() {
    return '2.0.0-alpha1';
  }
}

customElements.define(MessageListElement.is, MessageListElement);

export { MessageListElement };
