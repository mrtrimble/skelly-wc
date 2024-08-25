import BaseElement from './BaseElement';

export class SkellyImage extends BaseElement {
  static {
    this.register('skelly-image');
  }

  static get observedAttributes() {
    return ['labelColor', 'imageColor', 'aspect-ratio', 'height', 'width'];
  }

  get labelColor() {
    return this.getAttribute('label-color');
  }

  get imageColor() {
    return this.getAttribute('image-color');
  }

  get height() {
    return this.getAttribute('height');
  }

  get width() {
    return this.getAttribute('width');
  }

  get aspectRatio() {
    return this.getAttribute('aspect-ratio');
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
            aspect-ratio: var(--skelly-image-aspect-ratio, 16/9);
            overflow: clip;
            background-color: var(--skelly-image-color, #CCCCCC);
            color: var(--skelly-label-color, #000000);

            * {
              box-sizing: border-box;
            }
          }
        }
    `,
    });
  }

  setLabel() {
    return Object.assign(document.createElement('span'), {
      id: 'skelly-image-label',
      innerHTML: `<slot></slot>`,
    });
  }

  setImageColor() {
    return this.style.setProperty('--skelly-image-color', this.imageColor);
  }

  setLabelColor() {
    return this.style.setProperty('--skelly-label-color', this.labelColor);
  }

  setHeight() {
    return this.style.setProperty('--skelly-image-height', this.height);
  }
  
  setWidth() {
    return this.style.setProperty('--skelly-image-width', this.width);
  }

  setAspectRatio() {
    return this.style.setProperty('--skelly-image-aspect-ratio', this.aspectRatio);
  }

  connectedCallback() {
    // Attach shadow DOM and add styles
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(this.createStyles());

    if (this.imageColor) this.setImageColor();
    if (this.labelColor) this.setLabelColor();
    if (this.height) this.setHeight();
    if (this.width) this.setWidth();
    if (this.aspectRatio) this.setAspectRatio();

    this.shadowRoot.appendChild(this.setLabel());
  }
}
