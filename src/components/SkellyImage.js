import BaseElement from './BaseElement';

export class SkellyImage extends BaseElement {
  static {
    this.register('skelly-image');
  }

  static get observedAttributes() {
    return ['imageLabel', 'imageColor', 'height', 'width'];
  }

  get imageLabel() {
    return this.getAttribute('image-label') || 'Placeholder Image';
  }

  get imageColor() {
    return this.getAttribute('image-color') || '#CCCCCC';
  }

  get height() {
    return Number(this.getAttribute('height')) || 100;
  }

  get width() {
    return Number(this.getAttribute('width')) || 100;
  }

  createStyles() {
    return Object.assign(document.createElement('style'), {
      innerHTML: `
        @layer skelly{
          :host {
            color-scheme: light dark;
            container-type: inline-size;
            container-name: skelly-image;
            display: grid;
            grid-template-areas: 'skelly-stack';
            place-content: center;
            height: var(--skelly-image-height, auto);
            width: var(--skelly-image-width, auto);
            aspect-ratio: 16/9;
            overflow: clip;
            background-color: var(--skelly-background-color, #CCC);

            * {
              box-sizing: border-box;
            }
          }
        }
    `,
    });
  }

  createPlaceholderImage() {
    return Object.assign(document.createElement('span'), {
      innerText: this.imageLabel,
      id: 'skelly-image-label',
    });
  }

  connectedCallback() {
    // Attach shadow DOM and add styles
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(this.createStyles());
    this.attachInternals();

    if (this.imageColor) console.log(this.imageColor);
    if (this.imageLabel) console.log(this.imageLabel);

    this.shadowRoot.appendChild(this.createPlaceholderImage());
  }
}
