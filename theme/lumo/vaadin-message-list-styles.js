import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import '@vaadin/vaadin-lumo-styles/color.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import './vaadin-message-styles.js';

registerStyles(
  'vaadin-message-list',
  css`
    :host {
      outline: none;
    }

    :host([focus-ring]) {
      box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
    }
  `,
  { moduleId: 'lumo-message-list' }
);
