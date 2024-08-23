import BaseElement from './BaseElement';

export class SkellyText extends BaseElement {
  static {
    this.register('skelly-text');
  }

  static get observedAttributes() {
    return ['lineCount', 'lineColor'];
  }

  get lineColor() {
    return this.getAttribute('line-color') || '#CCCCCC';
  }

  get lineCount() {
    return Number(this.getAttribute('line-count')) || 5;
  }

  createStyles() {
    return Object.assign(document.createElement('style'), {
      innerHTML: `
        :host {
          container-type: inline-size;
          container-name: skelly;
          display: flex;
          flex-direction: column;
          
          > * + * {
            margin-block-start: var(--flow-size, 1ch);
          }
        }

        .skelly-line {
          background: var(--skelly-line-color, #cccccc);
          border-radius: 0.25rem;
          display: inline-block;
          height: var(--skelly-line-height, 1rem);
          position: relative;
          transform: scaleX(1);
          transform-origin: center left;
          transition: transform 0.25s ease-out;
          width: 100%;
          
          @container skelly (min-width: 65ch){
            &:nth-child(even) {
              transform: scaleX(96%);
            }
            &:last-of-type {
              transform: scaleX(50%);
            }
          }
        }
    `,
    });
  }

  createLine() {
    const classList = ['skelly-line'].join(' ');

    const properties = {
      ariaHidden: true,
      classList,
    };

    return Object.assign(document.createElement('span'), properties);
  }

  setLineColor() {
    return this.style.setProperty('--skelly-line-color', this.lineColor);
  }

  addLines() {
    for (let i = 0; i < this.lineCount; i++) {
      this.shadowRoot.appendChild(this.createLine());
    }
  }

  connectedCallback() {
    // Attach shadow DOM and add styles
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(this.createStyles());

    // Check for color, set line color
    if (this.lineColor) this.setLineColor();

    // Add skeleton lines
    this.addLines();
  }
}
