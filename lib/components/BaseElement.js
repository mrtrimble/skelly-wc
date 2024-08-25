export default class BaseElement extends HTMLElement {
  static register(tagName = this.tagName) {
    customElements.define(tagName, this);
  }
}
