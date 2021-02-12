import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import '@vaadin/vaadin-list-box/theme/lumo/vaadin-list-box-styles.js';

registerStyles('vaadin-message-menu-list-box', css``, {
  include: ['lumo-list-box'],
  moduleId: 'lumo-message-menu-list-box'
});
