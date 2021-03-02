import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import '@vaadin/vaadin-material-styles/color.js';
import '@vaadin/vaadin-material-styles/typography.js';
import '@vaadin/vaadin-avatar/theme/material/vaadin-avatar-styles.js';

registerStyles(
  'vaadin-message',
  css`
    :host {
      font-family: var(--material-font-family);
      font-size: var(--material-body-font-size);
      line-height: 1.5;
      padding: 0.875em 1em;
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
    }

    vaadin-avatar {
      height: 2.5em;
      margin-right: 1em;
      margin-top: 0.125em;
      width: 2.5em;
    }

    :host([dir='rtl']) vaadin-avatar {
      margin-left: 1em;
      margin-right: 0;
    }

    :host([theme~='system']) vaadin-avatar {
      --vaadin-avatar-size: 1.5rem;
      --size-diff: calc((2.5rem - (2 * var(--vaadin-avatar-outline-width)) - var(--vaadin-avatar-size)) / 2);

      border-color: var(--material-divider-color);
      font-size: 1.25rem;
      margin-left: var(--size-diff);
      margin-right: calc(var(--size-diff) + 1rem);
      margin-top: calc(var(--size-diff) + 0.25rem);
    }

    :host([dir='rtl'][theme~='system']) vaadin-avatar {
      margin-left: calc(var(--size-diff) + 1rem);
      margin-right: var(--size-diff);
    }

    [part='name'] {
      margin-right: auto;
    }

    :host([dir='rtl']) [part='name'] {
      margin-left: auto;
      margin-right: 0;
    }

    [part='time'] {
      color: var(--material-secondary-text-color);
      font-size: var(--material-caption-font-size);
    }

    [part='message'] {
      color: var(--material-secondary-text-color);
      font-size: var(--material-small-font-size);
      line-height: 1.25rem;
    }
  `,
  { moduleId: 'material-message' }
);
