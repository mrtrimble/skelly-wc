import { SkellyText } from './src/components/skelly-text';

const components = [
  {
    tag: 'skelly-text',
    cmp: SkellyText,
  },
];

document.addEventListener('DOMContentLoaded', () => {
  components.forEach(({ tag, cmp }) => customElements.define(tag, cmp));
});
