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

    [part='list'] {
      padding: 2px;
    }
  `,
  { moduleId: 'lumo-message-list' }
);
