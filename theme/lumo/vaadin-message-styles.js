import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import '@vaadin/vaadin-lumo-styles/color.js';
import '@vaadin/vaadin-lumo-styles/sizing.js';
import '@vaadin/vaadin-lumo-styles/spacing.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/typography.js';
import './vaadin-message-avatar-styles.js';

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

    :host([focus-ring]) {
      box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
    }

    [part='header'] {
      min-height: calc(var(--lumo-font-size-m) * var(--lumo-line-height-m));
    }

    [part='name'] {
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

    /*
      "filled" theme variant:
      Message has a light background color
    */
    :host([theme~='filled']) [part='content'] {
      align-items: flex-start;
    }

    :host([theme~='filled']) [part='header'] {
      margin-bottom: var(--lumo-space-xs);
    }

    :host([theme~='filled']) [part='message'] {
      background-color: var(--lumo-contrast-5pct);
      border-radius: var(--lumo-border-radius-l);
      padding: var(--lumo-space-wide-m);
    }

    :host([theme~='filled'][theme~='primary']) [part='message'] {
      background-color: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
    }

    /* 
       "align-end" theme variant:
       Message is aligned to the right (LTR) or left (RTL)
    */
    :host([theme~='align-end']) [part='content'] {
      align-items: flex-end;
    }

    /* 
       "message-first" theme variant:
       Message placed on top of the header
    */
    :host([theme~='message-first']) [part='header'] {
      order: 1;
    }

    /* Filled & message-first */
    :host([theme~='filled'][theme~='message-first']) [part='header'] {
      margin-bottom: 0;
      margin-top: var(--lumo-space-xs);
    }

    /* 
       "hide-name" theme variant:
       The name is visually hidden (still read aloud by screen readers)
    */
    :host([theme~='hide-name']) [part='name'] {
      border-width: 0;
      clip: rect(0, 0, 0, 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    /* 
       "hide-time" theme variant:
       Timestamp is visually hidden (still read aloud by screen readers)
    */
    :host([theme~='hide-time']) [part='time'] {
      border-width: 0;
      clip: rect(0, 0, 0, 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }
  `,
  { moduleId: 'lumo-message' }
);
