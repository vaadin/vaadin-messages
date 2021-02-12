import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/typography.js';
import '@vaadin/vaadin-button/theme/lumo/vaadin-button.js';

registerStyles(
  'vaadin-message-menu-button-styles',
  css`
    :host {
      align-self: flex-start;
      background: none;
      height: var(--lumo-icon-size-m);
      margin: calc(((var(--lumo-font-size-m) * var(--lumo-line-height-m)) - var(--lumo-icon-size-m)) / 2) 0 0 0;
      min-width: 0;
      padding: 0;
      width: var(--lumo-icon-size-m);
    }
  `,
  { include: ['lumo-button'], moduleId: 'lumo-message-menu-button' }
);
