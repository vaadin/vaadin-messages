/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { ItemElement } from '@vaadin/vaadin-item/src/vaadin-item.js';
import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';

registerStyles(
  'vaadin-message-menu-item',
  css`
    :host {
    }
  `,
  { moduleId: 'vaadin-message-menu-item-styles' }
);

/**
 * @extends PolymerElement
 */
class MessageMenuItemElement extends ItemElement {
  ready() {
    super.ready();
  }

  static get is() {
    return 'vaadin-message-menu-item';
  }
}

customElements.define(MessageMenuItemElement.is, MessageMenuItemElement);
