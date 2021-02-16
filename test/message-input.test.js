import { expect } from '@esm-bundle/chai';
import sinon from 'sinon';
import { fixtureSync } from '@open-wc/testing-helpers';
import { pressEnter, pressAndReleaseKeyOn } from '@polymer/iron-test-helpers/mock-interactions.js';
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
    function testInput(done) {
      messageInput.addEventListener('submit', function (e) {
        expect(e.detail.text).to.be.equal('foo');
        setTimeout(() => {
          expect(messageInput.text).to.be.empty;
          done();
        }, 0);
      });
    }

    it('calling submitMessage() should fire a submit event', (done) => {
      testInput(done);
      messageInput.text = 'foo';
      messageInput.submitMessage();
    });

    it('clicking button should fire a submit event', (done) => {
      messageInput.addEventListener('submit', function (e) {
        expect(e.detail.text).to.be.equal('foo');
        setTimeout(() => {
          expect(messageInput.text).to.be.empty;
          done();
        }, 0);
      });
      messageInput.text = 'foo';
      button.click();
    });

    it('pressing enter on input field should fire a submit event', (done) => {
      testInput(done);
      textArea.value = 'foo';
      pressEnter(textArea.inputElement);
    });

    it('pressing shift+enter should not fire a submit event', () => {
      const spy = sinon.spy();
      messageInput.addEventListener('submit', spy);

      textArea.value = 'foo';
      pressAndReleaseKeyOn(textArea.inputElement, 63, 'shift');

      expect(spy.called).to.be.false;
    });
  });
});
