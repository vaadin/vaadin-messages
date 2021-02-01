import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import '@vaadin/vaadin-material-styles/color.js';
import '@vaadin/vaadin-material-styles/typography.js';

registerStyles(
  'vaadin-message',
  css`
    :host {
      padding: 8px;
    }

    :host {
      font-family: var(--material-font-family);
      font-size: var(--material-small-font-size);
    }

    .vaadin-message-wrapper {
      padding-inline-start: 8px;
    }

    .vaadin-message-header {
      padding-bottom: 8px;
    }

    [part='name'] {
      font-weight: 500;
    }

    [part='time'] {
      color: var(--material-secondary-text-color);
    }

    /* IE11 is the only browser that we support that doesn't support
     * padding-inline-start. For IE11, we use padding-left and padding-right instead. */
    @media all and (-ms-high-contrast: active), (-ms-high-contrast: none) {
      .vaadin-message-wrapper {
        padding-left: 8px;
        padding-right: 0;
      }
      :host([dir='rtl']) .vaadin-message-wrapper {
        padding-left: 0;
        padding-right: 8px;
      }
    }
  `,
  { moduleId: 'material-message' }
);
