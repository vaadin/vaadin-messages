import { expect } from '@esm-bundle/chai';
import { fixtureSync } from '@open-wc/testing-helpers';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';
import '../vaadin-message-list.js';

function nextRender(target) {
  return new Promise((resolve) => {
    afterNextRender(target, () => {
      resolve();
    });
  });
}

describe('message-list', () => {
  let messageList, messages;

  beforeEach(() => {
    let root = document.documentElement;
    root.style.setProperty('--vaadin-user-color-1', 'purple');
    root.style.setProperty('--vaadin-user-color-2', 'blue');

    messageList = fixtureSync('<vaadin-message-list></vaadin-message-list>');
    messages = [
      {
        text: 'A message in the stream of messages',
        time: '9:34 AM',
        user: {
          name: 'Joan Doe',
          abbr: 'JD',
          img: '/test/visual/avatars/avatar.jpg',
          colorIndex: 1
        }
      },
      {
        text: 'Call upon the times of glory',
        time: '2:34 PM',
        user: {
          name: 'Steve Mops',
          abbr: 'SM',
          colorIndex: 2
        }
      }
    ];
  });

  it('should have a valid version number', () => {
    expect(messageList.constructor.version).to.match(/^(\d+\.)?(\d+\.)?(\d+)(-(alpha|beta)\d+)?$/);
  });

  it('message list should be initially empty', () => {
    expect(messageList.items).to.be.empty;
  });

  describe('items property', () => {
    beforeEach(async () => {
      messageList.items = messages;
      await nextRender(messageList);
    });

    it('message list should have two messages', () => {
      const items = messageList.shadowRoot.querySelectorAll('vaadin-message');
      expect(items.length).to.equal(2);
    });

    it('message properties should be correctly set', () => {
      const firstMessage = messageList.shadowRoot.querySelectorAll('vaadin-message')[0];
      const content = firstMessage.shadowRoot.querySelector('[part="content"]');
      const time = firstMessage.shadowRoot.querySelector('[part="time"]');
      const name = firstMessage.shadowRoot.querySelector('[part="name"]');
      const avatar = firstMessage.shadowRoot.querySelector('vaadin-avatar');

      // Test that the <vaadin-message> slotted content is correct
      const slot = content.querySelector('slot');
      const nodes = slot.assignedNodes({ flatten: true });
      expect(nodes[0].textContent).to.be.equal(messages[0].text);

      // Test the direct dependencies
      expect(time.textContent).to.be.equal(messages[0].time);
      expect(name.textContent).to.be.equal(messages[0].user.name);

      // Test that avatar is set up correctly.
      expect(avatar.getAttribute('name')).to.be.equal(messages[0].user.name);
      expect(avatar.getAttribute('abbr')).to.be.equal(messages[0].user.abbr);
      expect(avatar.getAttribute('img')).to.be.equal(messages[0].user.img);
      expect(avatar.getAttribute('has-color-index')).to.be.not.null;
      expect(avatar.colorIndex).to.be.equal(messages[0].user.colorIndex);
    });
  });
});
