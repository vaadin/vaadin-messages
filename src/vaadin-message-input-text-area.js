/**
 * @license
 * Copyright (c) 2021 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
import { TextAreaElement } from '@vaadin/vaadin-text-field/src/vaadin-text-area.js';
import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';

registerStyles(
  'vaadin-message-input-text-area',
  css`
    :host {
      align-self: stretch;
      flex-grow: 1;
      padding: 0;
    }
  `,
  { moduleId: 'vaadin-message-input-text-area-styles' }
);

/**
 * The text area element for a message input.
 *
 * ### Styling
 *
 * See [`<vaadin-text-area>` documentation](https://github.com/vaadin/vaadin-text-field/blob/master/src/vaadin-text-area.js)
 * for `<vaadin-message-input-text-area>` parts and available slots (prefix, suffix etc.)
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin#readme)
 *
 * @extends TextAreaElement
 */
class MessageInputTextAreaElement extends TextAreaElement {
  static get is() {
    return 'vaadin-message-input-text-area';
  }
}

customElements.define(MessageInputTextAreaElement.is, MessageInputTextAreaElement);
