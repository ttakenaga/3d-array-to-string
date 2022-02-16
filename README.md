# 3d-array-to-string

A small library which converts an array to a string.

## Usage

### Install

Install via npm or yarn: `npm install 3d-array-to-string`

### Example

`arrayToString(array, width, height, nSlices, original, conversion, spacePaddingNumber, linePaddingNumber, sliceSeparation)`

#### Parameters

- `array`: input array (3 dimensional)
- `width`: width of array
- `height`: height of array
- `nSlices`: number of slices of array
- `original`: the unique elements of array
- `conversion`: the string corresponding to original
- `spacePaddingNumber`: number of space following a string
- `linePaddingNumber`: line spacing
- `spaceSeparation`: slice separator string

```js
import arrayToString from "array-to-string";
// OR:
// const arrayToString = require('3d-array-to-string').arrayToString;

const array = [
  1, 1, 1, 1, 1, 0, 2, 3, 0, 3, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 1, 0, 0, 2, 2, 1,
  1, 1, 1, 2,
];
console.log(
  arrayToString(array, 6, 5, 1, [0, 1, 2, 3], ["0", "1", "2", "3"], 0)
);
// 111110
// 230302
// 200002
// 201002
// 211112

console.log(
  arrayToString(array, 6, 5, 1, [0, 1, 2, 3], [" ", "_", "|", "."], 0)
);
// _____
// |. . |
// |    |
// | _  |
// |____|
```
