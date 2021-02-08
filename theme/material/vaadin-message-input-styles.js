import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import '@vaadin/vaadin-material-styles/color.js';
import '@vaadin/vaadin-material-styles/typography.js';
import './vaadin-message-input.js';

registerStyles(
  'vaadin-message-input',
  css`
    :host {
    }
  `,
  { moduleId: 'material-message-input' }
);
