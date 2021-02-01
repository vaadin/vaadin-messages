import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import '@vaadin/vaadin-lumo-styles/color.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';

registerStyles(
  'vaadin-message',
  css`
    :host {
      padding: var(--lumo-space-s);
    }

    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
    }

    .vaadin-message-wrapper {
      padding-inline-start: var(--lumo-space-s);
    }

    /* IE11 is the only browser that we support that doesn't support
     * padding-inline-start. For IE11, we use padding-left and -right instead. */
    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
      .vaadin-message-wrapper {
        padding-left: var(--lumo-space-s);
        padding-right: 0;
      }
      :host([dir='rtl']) .vaadin-message-wrapper {
        padding-left: 0;
        padding-right: var(--lumo-space-s);
      }
    }

    .vaadin-message-header {
      padding-bottom: var(--lumo-space-s);
    }

    [part='name'] {
      font-weight: 500;
    }

    [part='time'] {
      color: var(--lumo-secondary-text-color);
    }
  `,
  { moduleId: 'lumo-message' }
);
