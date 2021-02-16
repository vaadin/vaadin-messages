import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import '@vaadin/vaadin-list-box/theme/material/vaadin-list-box-styles.js';

registerStyles(
  'vaadin-message-menu-list-box',
  css`
    [part='items'] ::slotted(vaadin-message-menu-item) {
      font-size: var(--material-small-font-size);
      height: 3rem;
      padding: 0 1rem;
    }

    [part='items'] ::slotted(vaadin-message-menu-item:hover:not([disabled])) {
      background-color: var(--material-secondary-background-color);
    }

    [part='items'] ::slotted(vaadin-message-menu-item[focused]:not([disabled])) {
      background-color: var(--material-divider-color);
    }

    @media (pointer: coarse) {
      [part='items'] ::slotted(vaadin-message-menu-item:hover:not([disabled])),
      [part='items'] ::slotted(vaadin-message-menu-item[focused]:not([disabled])) {
        background-color: transparent;
      }
    }
  `,
  {
    include: ['material-list-box'],
    moduleId: 'material-message-menu-list-box'
  }
);
