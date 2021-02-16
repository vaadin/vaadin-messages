/**
 * @license
 * Copyright (c) 2020 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { ContextMenuElement } from '@vaadin/vaadin-context-menu/src/vaadin-context-menu.js';
import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';

registerStyles('vaadin-message-menu', css``, { moduleId: 'vaadin-message-menu-styles' });

/**
 * @extends HTMLElement
 */
class MessageMenuElement extends ContextMenuElement {
  static get is() {
    return 'vaadin-message-menu';
  }
}

customElements.define(MessageMenuElement.is, MessageMenuElement);
