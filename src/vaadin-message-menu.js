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

  constructor() {
    super();
    this.openOn = 'openmessagemenu';
  }

  ready() {
    super.ready();
    this.$.overlay.addEventListener('keydown', (event) => this._onKeyDown(event));
  }

  /** @private */
  _onKeyDown(event) {
    if (event.keyCode === 27) {
      this.getRootNode().host._closeMenu(true);
    }
  }

  /**
   * Overriding the observer to not add global "contextmenu" listener.
   */
  _openedChanged(opened) {
    this.$.overlay.opened = opened;
  }
}

customElements.define(MessageMenuElement.is, MessageMenuElement);
