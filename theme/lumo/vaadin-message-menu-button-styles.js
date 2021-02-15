import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/typography.js';
import '@vaadin/vaadin-button/theme/lumo/vaadin-button.js';

registerStyles(
  'vaadin-message-menu-button',
  css`
    :host([part='menu-button']) {
      align-self: flex-start;
      background: none;
      margin: calc(((var(--lumo-font-size-m) * var(--lumo-line-height-m)) - var(--lumo-button-size)) / 2);
      min-width: 0;
      padding: 0;
      width: var(--lumo-button-size);
    }

    :host([part='menu-button']) ::slotted(*) {
      display: block;
      font-size: var(--lumo-font-size-xl);
      transform: rotate(90deg);
    }
  `,
  { include: ['lumo-button'], moduleId: 'lumo-message-menu-button' }
);
