import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import '@vaadin/vaadin-material-styles/color.js';
import '@vaadin/vaadin-material-styles/typography.js';
import '@vaadin/vaadin-avatar/theme/material/vaadin-avatar-styles.js';
import '@vaadin/vaadin-button/theme/material/vaadin-button.js';
import '@vaadin/vaadin-context-menu/material/lumo/vaadin-context-menu.js';

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

    [part='sender'] {
      justify-content: space-between;
    }

    [part='name'] {
      margin-right: 1rem;
    }

    :host([dir='rtl']) [part='name'] {
      margin-left: 1rem;
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

    vaadin-button {
      border-radius: 50%;
      height: 2.5rem;
      margin: -0.5rem -0.5rem -0.5rem 0.5rem;
      min-width: 0;
      padding: 0;
      width: 2.5rem;
    }

    :host([dir='rtl']) vaadin-button {
      margin: -0.5rem 0.5rem -0.5rem -0.5rem;
    }

    vaadin-button iron-icon {
      height: 1rem;
      width: 1rem;
    }
  `,
  { moduleId: 'material-message' }
);
