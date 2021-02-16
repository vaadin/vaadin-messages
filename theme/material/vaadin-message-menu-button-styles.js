import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import '@vaadin/vaadin-button/theme/material/vaadin-button-styles.js';

registerStyles(
  'vaadin-message-menu-button',
  css`
    :host {
      border-radius: 50%;
      height: 2.5rem;
      margin: -0.5rem -0.5rem -0.5rem 0.5rem;
      min-width: 0;
      padding: 0;
      width: 2.5rem;
    }

    :host([dir='rtl']) {
      margin: -0.5rem 0.5rem -0.5rem -0.5rem;
    }

    :host([part='menu-button']) ::slotted(*) {
      display: block;
      font-size: var(--material-icon-font-size);
      transform: rotate(90deg);
    }
  `,
  { include: ['material-button'], moduleId: 'material-message-menu-button' }
);
