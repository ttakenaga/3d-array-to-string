const { arrayToString } = require("3d-array-to-string");

// prettier-ignore
const array = [
  1, 1, 1, 1, 1, 0,
  2, 3, 0, 3, 0, 2,
  2, 0, 0, 0, 0, 2,
  2, 0, 1, 0, 0, 2,
  2, 1, 1, 1, 1, 2,
];
console.log(arrayToString);
console.log(
  arrayToString(array, 6, 5, 1, [0, 1, 2, 3], ["0", "1", "2", "3"], 0)
);
console.log(
  arrayToString(array, 6, 5, 1, [0, 1, 2, 3], [" ", "_", "|", "."], 0)
);
