import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import '@vaadin/vaadin-lumo-styles/color.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/typography.js';
import '@vaadin/vaadin-avatar/theme/lumo/vaadin-avatar-styles.js';
import '@vaadin/vaadin-button/theme/lumo/vaadin-button-styles.js';
import '@vaadin/vaadin-text-field/theme/lumo/vaadin-text-area-styles.js';
import '@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field-styles.js';

registerStyles(
  'vaadin-message',
  css`
    :host {
      color: var(--lumo-body-text-color);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-m);
      padding: var(--lumo-space-s) var(--lumo-space-m);
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
    }

    :host([edit]) {
      background-color: var(--lumo-contrast-5pct);
    }

    vaadin-avatar {
      margin-right: var(--lumo-space-m);
      margin-top: var(--lumo-space-s);
    }

    :host([dir='rtl']) vaadin-avatar {
      margin-left: var(--lumo-space-m);
      margin-right: 0;
    }

    [part='name'] {
      font-weight: 500;
      margin-right: var(--lumo-space-s);
    }

    [part='name']:empty {
      margin-right: 0;
    }

    :host([dir='rtl']) [part='name'] {
      margin-left: var(--lumo-space-s);
      margin-right: 0;
    }

    :host([dir='rtl']) [part='name']:empty {
      margin-left: 0;
    }

    [part='time'] {
      color: var(--lumo-secondary-text-color);
      font-size: var(--lumo-font-size-s);
    }

    [part='editor'] {
      margin-top: var(--lumo-space-xs);
    }

    [part='editor-buttons'] {
      margin-top: var(--lumo-space-xs);
    }

    [part='editor-buttons'] vaadin-button:first-child {
      margin-right: var(--lumo-space-m);
    }

    :host([dir='rtl']) [part='editor-buttons'] vaadin-button:first-child {
      margin-left: var(--lumo-space-m);
      margin-right: 0;
    }
  `,
  { moduleId: 'lumo-message' }
);
