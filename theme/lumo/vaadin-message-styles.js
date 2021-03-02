import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import '@vaadin/vaadin-lumo-styles/color.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/typography.js';
import '@vaadin/vaadin-avatar/theme/lumo/vaadin-avatar-styles.js';

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

    vaadin-avatar {
      margin-right: var(--lumo-space-m);
      margin-top: var(--lumo-space-s);
    }

    :host([dir='rtl']) vaadin-avatar {
      margin-left: var(--lumo-space-m);
      margin-right: 0;
    }

    :host([theme~='system']) vaadin-avatar {
      --vaadin-avatar-size: var(--lumo-size-xs);
      --size-diff: calc(
        (var(--lumo-size-m) - (2 * var(--vaadin-avatar-outline-width)) - var(--vaadin-avatar-size)) / 2
      );

      border-color: var(--lumo-contrast-10pct);
      font-size: var(--lumo-font-size-xl);
      font-style: italic;
      height: var(--vaadin-avatar-size);
      margin-left: var(--size-diff);
      margin-right: calc(var(--size-diff) + var(--lumo-space-m));
      margin-top: calc(var(--size-diff) + var(--lumo-space-s));
      width: var(--vaadin-avatar-size);
    }

    :host([dir='rtl'][theme~='system']) vaadin-avatar {
      margin-left: calc(var(--size-diff) + var(--lumo-space-m));
      margin-right: var(--size-diff);
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
  `,
  { moduleId: 'lumo-message' }
);
