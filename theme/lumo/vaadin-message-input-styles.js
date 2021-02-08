import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import '@vaadin/vaadin-lumo-styles/color.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import './vaadin-message-input-styles.js';

registerStyles(
  'vaadin-message-input',
  css`
    :host {
    }
  `,
  { moduleId: 'lumo-message-input' }
);
