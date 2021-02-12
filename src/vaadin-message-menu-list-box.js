/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { ListBoxElement } from '@vaadin/vaadin-list-box/src/vaadin-list-box.js';
import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';

registerStyles(
  'vaadin-message-menu-list-box',
  css`
    :host {
    }
  `,
  { moduleId: 'vaadin-message-menu-list-box-styles' }
);

/**
 * @extends PolymerElement
 */
class MessageMenuListBoxElement extends ListBoxElement {
  ready() {
    super.ready();
  }

  static get is() {
    return 'vaadin-message-menu-list-box';
  }
}

customElements.define(MessageMenuListBoxElement.is, MessageMenuListBoxElement);
