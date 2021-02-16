import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import '@vaadin/vaadin-list-box/theme/lumo/vaadin-list-box-styles.js';

registerStyles(
  'vaadin-message-menu-list-box',
  css`
    /* Normal item */
    [part='items'] ::slotted(vaadin-message-menu-item) {
      -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
      cursor: default;
    }

    [part='items'] ::slotted(vaadin-message-menu-item) {
      outline: none;
      border-radius: var(--lumo-border-radius);
      padding-left: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));
      padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
    }

    /* Workaround to display checkmark in IE11 when list-box is not used in dropdown-menu */
    [part='items'] ::slotted(vaadin-message-menu-item)::before {
      display: var(--_lumo-item-selected-icon-display);
    }

    /* Hovered item */
    /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */
    [part='items'] ::slotted(vaadin-message-menu-item:hover:not([disabled])) {
      background-color: var(--lumo-primary-color-10pct);
    }

    @media (pointer: coarse) {
      [part='items'] ::slotted(vaadin-message-menu-item:hover:not([disabled])) {
        background-color: transparent;
      }
    }

    /* RTL specific styles */
    :host([dir='rtl']) [part='items'] ::slotted(vaadin-message-menu-item) {
      padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
      padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));
    }
  `,
  {
    include: ['lumo-list-box'],
    moduleId: 'lumo-message-menu-list-box'
  }
);
