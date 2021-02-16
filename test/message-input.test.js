import { expect } from '@esm-bundle/chai';
import sinon from 'sinon';
import { fixtureSync } from '@open-wc/testing-helpers';
import { keyDownOn } from '@polymer/iron-test-helpers/mock-interactions.js';
import '../vaadin-message-input.js';

describe('message-input', () => {
  let messageInput, textArea, button;

  beforeEach(() => {
    messageInput = fixtureSync('<vaadin-message-input></vaadin-message-input>');
    textArea = messageInput.shadowRoot.querySelector('vaadin-text-area');
    button = messageInput.shadowRoot.querySelector('vaadin-button');
  });

  it('should have a valid version number', () => {
    expect(messageInput.constructor.version).to.match(/^(\d+\.)?(\d+\.)?(\d+)(-(alpha|beta)\d+)?$/);
  });

  it('message should be initialized', () => {
    expect(messageInput.shadowRoot.querySelector('vaadin-text-area')).to.be.not.undefined;
    expect(messageInput.shadowRoot.querySelector('vaadin-button')).to.be.not.undefined;
  });

  it('text area placeholder should be set', () => {
    expect(messageInput.shadowRoot.querySelector('vaadin-text-area').placeholder).to.be.equal('Message');
  });

  describe('submit functionality', () => {
    it('should fire a submit event when calling submitMessage()', () => {
      const spy = sinon.spy();
      messageInput.addEventListener('submit', spy);
      messageInput.text = 'foo';
      messageInput.submitMessage();
      expect(spy.calledOnce).to.be.true;
    });

    it('should fire a submit event won button click', () => {
      const spy = sinon.spy();
      messageInput.addEventListener('submit', spy);
      messageInput.text = 'foo';
      button.click();
      expect(spy.calledOnce).to.be.true;
    });

    it('should fire a submit event on Enter keydown', () => {
      const spy = sinon.spy();
      messageInput.addEventListener('submit', spy);
      textArea.value = 'foo';
      keyDownOn(textArea.inputElement, 13, [], 'Enter');
      expect(spy.calledOnce).to.be.true;
    });

    it('should not fire a submit event on Shift + Enter keydown', () => {
      const spy = sinon.spy();
      messageInput.addEventListener('submit', spy);
      textArea.value = 'foo';
      keyDownOn(textArea.inputElement, 13, ['shift'], 'Enter');
      expect(spy.called).to.be.false;
    });
  });
});
