/**
 * @license
 * Copyright (c) 2021 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { ThemableMixin } from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';
import { ElementMixin } from '@vaadin/vaadin-element-mixin/vaadin-element-mixin.js';
import '@vaadin/vaadin-avatar/src/vaadin-avatar.js';
import './vaadin-message-menu-button.js';
import './vaadin-message-menu-item.js';
import './vaadin-message-menu-list-box.js';
import './vaadin-message-menu.js';

/**
 * `<vaadin-message>` is a Web Component for showing a single message with an author, message and time.
 *
 * ```html
 * <vaadin-message time="2021-01-28 10:43"
 *     user-name = "Bob Ross"
 *     user-abbr = "BR"
 *     user-img = "/static/img/avatar.jpg">There is no real ending. It's just the place where you stop the story.</vaadin-message>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ----------|----------------
 * `avatar`  | The author's avatar
 * `name`    | Author's name
 * `time`    | When the message was posted
 * `content` | The message itself as a slotted content
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @extends HTMLElement
 * @mixes ThemableMixin
 * @mixes ElementMixin
 */
class MessageElement extends ElementMixin(ThemableMixin(PolymerElement)) {
  static get properties() {
    return {
      /**
       * Time of sending the message. It is rendered as-is to the part='time' slot,
       * so the formatting is up to you.
       */
      time: {
        type: String
      },

      /**
       * The name of the user posting the message.
       * It will be placed in the name part to indicate who has sent the message.
       * It is also used as a tooltip for the avatar.
       * Example: `message.userName = "Jessica Jacobs";`
       */
      userName: {
        type: String
      },

      /**
       * The abbreviation of the user.
       * The abbreviation will be passed on to avatar of the message.
       * If the user does not have an avatar picture set with `userImg`, `userAbbr` will be shown in the avatar.
       * Example: `message.userAbbr = "JJ";`
       */
      userAbbr: {
        type: String
      },

      /**
       * An URL for a user image.
       * The image will be used in the avatar component to show who has sent the message.
       * Example: `message.userImg = "/static/img/avatar.jpg";`
       */
      userImg: {
        type: String
      },

      /**
       * A color index to be used to render the color of the avatar.
       * With no `userColorIndex` set, the basic avatar color will be used.
       * By setting a userColorIndex, the component will check if there exists a CSS variable defining the color, and uses it if there is one.
       * If now CSS variable is found for the color index, the property for the color will not be set.
       *
       * Example:
       * CSS:
       * ```css
       * html {
       *   --vaadin-user-color-1: red;
       * }
       * ```
       *
       * JavaScript:
       * ```js
       * message.userColorIndex = 1;
       * ```
       */
      userColorIndex: {
        type: Number
      }
    };
  }

  static get template() {
    return html`
      <style>
        :host {
          display: flex;
          flex-direction: row;
          position: relative;
        }

        :host([hidden]) {
          display: none !important;
        }

        vaadin-avatar {
          border: none;
          flex-shrink: 0;
          margin: 0;
        }

        [part='content'] {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        [part='header'] {
          display: flex;
        }

        [part='sender'] {
          align-items: center;
          display: flex;
          flex-grow: 1;
          flex-wrap: wrap;
        }

        .dots::before {
          content: '\\00B7\\00B7\\00B7';
        }
      </style>
      <vaadin-avatar
        part="avatar"
        name="[[userName]]"
        abbr="[[userAbbr]]"
        img="[[userImg]]"
        color-index="[[userColorIndex]]"
        tabindex="-1"
        aria-hidden="true"
      ></vaadin-avatar>
      <div part="content">
        <div part="header">
          <div part="sender">
            <span part="name">[[userName]]</span>
            <span part="time">[[time]]</span>
          </div>
          <vaadin-message-menu>
            <vaadin-message-menu-button
              aria-controls="menu-list-box"
              aria-expanded="false"
              aria-haspopup="true"
              aria-label="Menu"
              id="menu-button"
              on-click="_onMenuButtonClick"
              on-keydown="_onMenuButtonKeyDown"
              part="menu-button"
            >
              <span class="dots"></span>
            </vaadin-message-menu-button>
          </vaadin-message-menu>
        </div>
        <div part="message">
          <slot></slot>
        </div>
      </div>
    `;
  }

  static get is() {
    return 'vaadin-message';
  }

  static get version() {
    return '1.0.0-alpha1';
  }

  ready() {
    super.ready();

    const button = this._button;
    const menu = this._menu;
    menu.listenOn = button;

    menu.renderer = function (root) {
      let listBox = root.firstElementChild;
      if (listBox) {
        listBox.innerHTML = '';
      } else {
        listBox = window.document.createElement('vaadin-message-menu-list-box');
        root.appendChild(listBox);
      }

      const editItem = window.document.createElement('vaadin-message-menu-item');
      editItem.textContent = 'Edit message';
      listBox.appendChild(editItem);

      const deleteItem = window.document.createElement('vaadin-message-menu-item');
      deleteItem.textContent = 'Delete message';
      deleteItem.setAttribute('theme', 'error');
      listBox.appendChild(deleteItem);
    };
  }

  /** @private */
  get _button() {
    return this.shadowRoot.querySelector('vaadin-message-menu-button');
  }

  /** @private */
  get _menu() {
    return this.shadowRoot.querySelector('vaadin-message-menu');
  }

  /** @private */
  _onMenuButtonClick(event) {
    event.preventDefault();
    this._openMenu(event);
  }

  /** @private */
  _onMenuButtonKeyDown(event) {
    event.preventDefault();

    // RETURN, SPACE, DOWN ARROW: open menu & focus first item
    if (event.keyCode === 13 || event.keyCode === 32 || event.keyCode === 40) {
      this._openMenu(event);

      // UP ARROW: open menu & focus last item
    } else if (event.keyCode === 38) {
      this._openMenu(event, { focusLast: true });
    }
  }

  /** @private */
  _openMenu(event, options = {}) {
    const button = this._button;
    const menu = this._menu;

    const rect = button.getBoundingClientRect();
    requestAnimationFrame(() => {
      button.dispatchEvent(
        new CustomEvent('openmessagemenu', {
          detail: {
            x: this.__isRTL ? rect.right : rect.left,
            y: rect.bottom
          }
        })
      );
      button.setAttribute('aria-expanded', 'true');
    });

    if (options.focusLast) {
      this.__onceOpened(() => this._focusLastItem());
    }

    // Only focus an item when opened using keyboard
    if (event.type !== 'keydown') {
      this.__onceOpened(() => {
        menu.$.overlay.$.overlay.focus();
      });
    }
  }

  /** @private */
  __onceOpened(callback) {
    const overlay = this._menu.$.overlay;
    const listener = () => {
      callback();
      overlay.removeEventListener('vaadin-overlay-open', listener);
    };
    overlay.addEventListener('vaadin-overlay-open', listener);
  }

  /** @private */
  _focusLastItem() {
    const list = this._menu.$.overlay.firstElementChild;
    const item = list.items[list.items.length - 1];
    item && item.focus();
  }

  /** @private */
  _closeMenu(restoreFocus) {
    const button = this._button;
    const menu = this._menu;

    button.setAttribute('aria-expanded', 'false');
    if (restoreFocus) {
      button.focus();
    }

    menu.opened && menu.close();
  }
}

customElements.define(MessageElement.is, MessageElement);

export { MessageElement };
