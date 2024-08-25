# skelly-wc

A collection of custom elements to quickly build skeletons. This is based on the [skellyCSS](https://github.com/ritterim/skellyCSS) package created by [RIMdev](https://rimdev.io/).
- [skelly-wc](#skelly-wc)
  - [Installation](#installation)
  - [Components](#components)
    - [`skelly-image`](#skelly-image)
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

### `skelly-image`
Import component into your project.

```js
import { SkellyImage } from '@mrtrimble/skelly-wc/lib/components/SkellyImage';
```

Add `<skelly-image></skelly-image>` to your HTML document wherever you need a placeholder image.

```html
<figure>
  <skelly-image></skelly-image>
</figure>
```

Add a label by passing text into the default slot.

```html
<figure>
  <skelly-image>
    Placeholder Text
  </skelly-image>
</figure>
```

`skelly-image` contains five attributes for customization.

- `aspect-ratio` - sets the aspect ratio of the placeholder image (default: `4/3`)
- `height` - sets height of the placeholder image (default: `auto`)
- `width` - sets width of the placholder image (default: `auto`)
- `image-color` - sets the color of the line (default: `#CCCCCC`)
- `label-color` - sets number of lines (default: `#000000`)

```html
<figure>
  <skelly-image
    height="300px"
    width="300px"
    aspect-ratio="1"
    image-color="blue"
    label-color="orange">
    Placeholder Text
  </skelly-image>
</figure>
```

### `skelly-text`

Import component into your project.

```js
import { SkellyText } from '@mrtrimble/skelly-wc/lib/components/SkellyText';
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