# skelly-wc

A collection of custom elements to quickly build skeletons. This is based on the [skellyCSS](https://github.com/ritterim/skellyCSS) package created by [RIMdev](https://rimdev.io/).
- [skelly-wc](#skelly-wc)
  - [Installation](#installation)
  - [Components](#components)
    - [`skelly-text`](#skelly-text)
  - [Examples](#examples)
  - [Development](#development)

## Installation

Install via npm:
```bash
npm install @mrtrimble/skelly-wc
```

Install via CDN:
```html
<script 
  type="module" 
  src="https://cdn.jsdelivr.net/npm/@mrtrimble/skelly-wc/dist/skelly-wc.js"
>
</script>
```

## Components

### `skelly-text`

Import component into your project.

```js
import { SkellyText } from '@mrtrimble/skelly-wc';
```

Add `<skelly-text></skelly-text>` to your HTML document wherever you need a skeleton.

```html
<p>
  <skelly-text></skelly-text>
</p>
```

`skelly-text` contains two attributes for customization.

- `line-color` - sets the color of the line (default: `#CCCCCC`)
- `line-count` - sets number of lines (default: `5`)

```html
<p>
  <skelly-text line-count="3" line-color="tomato"></skelly-text>
</p>
```

## Examples

- [`skelly-text` demo on CodePen](https://codepen.io/mrtrimble/live/VwJXQZJ/4499796d2b5cb87dda1ed5bb2b1f392c)

## Development

Clone repository:
```bash
git clone https://github.com/mrtrimble/skelly-wc
```

Install dependencies:
```bash
npm install
```

Start development server:
```bash
npm run dev
```