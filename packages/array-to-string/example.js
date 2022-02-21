//const { arrayToString } = require("./index");
const { arrayToString } = require("3d-array-to-string");

// prettier-ignore
const array = [
  1, 1, 1, 1, 1, 0,
  2, 3, 0, 3, 0, 2,
  2, 0, 0, 0, 0, 2,
  2, 0, 1, 0, 0, 2,
  2, 1, 1, 1, 1, 2,
  1, 1, 1, 1, 1, 0,
  2, 4, 0, 4, 0, 2,
  2, 0, 0, 0, 0, 2,
  2, 0, 1, 0, 0, 2,
  2, 1, 1, 1, 1, 2,
];
console.log(arrayToString);
console.log(
  arrayToString(
    array,
    6,
    5,
    2,
    [0, 1, 2, 3, 4],
    [" 0", " 1", " 2", " 3", " 4"],
    3
  )
);
console.log(
  arrayToString(array, 6, 5, 2, [0, 1, 2, 3, 4], [" ", "_", "|", ".", "?"], 1)
);
