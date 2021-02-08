import { ThemableMixin } from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

import { ElementMixin } from '@vaadin/vaadin-element-mixin/vaadin-element-mixin.js';

/**
 * `<vaadin-message-list>` is a Web Component for showing an ordered list of messages. The messages are rendered as <vaadin-message>
 *
 * ```html
 * <vaadin-message-list
 *   items='[{"text":"Hello list","time":"yesterday","userName":"Matt Mambo","userAbbr":"MM","userColorIndex":1},
 *           {"text":"Another message","time":"right now", "userName":"Linsey Listy","userAbbr":"LL","userColorIndex":2, "userImg":"/test/visual/avatars/avatar.jpg"}]'>
 * </vaadin-message-list>
 * ```
 * It is recommended to set it programmatically by calling messageList.items = [...];
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ----------|----------------
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @extends HTMLElement
 * @mixes ThemableMixin
 * @mixes ElementMixin
 */
declare class MessageListElement extends ThemableMixin(ElementMixin(HTMLElement)) { }

declare global {
  interface HTMLElementTagNameMap {
    'vaadin-message-list': MessageListElement;
  }
}

export { MessageListElement };
