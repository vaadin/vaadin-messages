import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import '@vaadin/vaadin-avatar/theme/lumo/vaadin-avatar-styles.js';

registerStyles(
  'vaadin-message-avatar',
  css`
    :host {
      margin-right: calc(var(--lumo-space-m) - var(--vaadin-avatar-outline-width));
      margin-top: calc(var(--lumo-space-s) - var(--vaadin-avatar-outline-width));
    }

    :host([dir='rtl']) {
      margin-left: calc(var(--lumo-space-m) - var(--vaadin-avatar-outline-width));
      margin-right: calc(var(--vaadin-avatar-outline-width) * -1);
    }

    /* 
       "align-end" theme variant:
       Message is aligned to the right (LTR) or left (RTL)
    */
    :host([theme~='align-end']) {
      margin-left: calc(var(--lumo-space-m) - var(--vaadin-avatar-outline-width));
      margin-right: calc(var(--vaadin-avatar-outline-width) * -1);
      order: 1;
    }

    :host([dir='rtl'][theme~='align-end']) {
      margin-right: calc(var(--lumo-space-m) - var(--vaadin-avatar-outline-width));
      margin-top: calc(var(--lumo-space-s) - var(--vaadin-avatar-outline-width));
      order: 1;
    }

    /* 
       "message-first" theme variant:
       Message placed on top of the header
    */
    :host([theme~='message-first']) {
      margin-top: calc((var(--lumo-space-s) * 0.375) - var(--vaadin-avatar-outline-width));
    }
  `,
  { moduleId: 'lumo-message-avatar' }
);
