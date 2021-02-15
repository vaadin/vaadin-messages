/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { ButtonElement } from '@vaadin/vaadin-button/src/vaadin-button.js';
import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';

registerStyles(
  'vaadin-message-menu-button',
  css`
    :host {
      flex-shrink: 0;
      line-height: 1;
    }
  `,
  { moduleId: 'vaadin-message-menu-button-styles' }
);

/**
 * @extends PolymerElement
 */
class MessageMenuButtonElement extends ButtonElement {
  ready() {
    super.ready();
  }

  static get is() {
    return 'vaadin-message-menu-button';
  }
}

customElements.define(MessageMenuButtonElement.is, MessageMenuButtonElement);
