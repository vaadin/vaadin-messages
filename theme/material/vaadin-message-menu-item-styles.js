import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import '@vaadin/vaadin-item/theme/material/vaadin-item-styles.js';

registerStyles(
  'vaadin-message-menu-item',
  css`
    :host::before {
      content: none;
    }
  `,
  { include: ['material-item'], moduleId: 'material-message-menu-item' }
);
