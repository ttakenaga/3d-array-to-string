const { arrayToString } = require("./index.js");

test("array.length must be width * height * nSlices", () => {
  const width = 5;
  const height = 5;
  const nSlices = 5;
  const array = new Uint8Array(width * height * nSlices + 1).fill(0);
  const origin = [0];
  const convert = ["0"];
  expect(() =>
    arrayToString(array, width, height, nSlices, origin, convert)
  ).toThrow(`Invalid matrix size`);
});

test("origin.length and convert.length must be same", () => {
  const width = 5;
  const height = 5;
  const nSlices = 5;
  const array = new Uint8Array(width * height * nSlices).fill(0);
  const origin = [0];
  const convert = ["0", "1"];
  expect(() =>
    arrayToString(array, width, height, nSlices, origin, convert)
  ).toThrow(`Invalid conversion table`);
});

test("origin must contain all array's elements", () => {
  const width = 5;
  const height = 4;
  const nSlices = 1;

  // prettier-ignore
  const array = new Uint8Array([
    1, 1, 1, 1, 1, 
    0, 0, 0, 0, 0, 
    2, 2, 2, 2, 2, 
    3, 3, 3, 3, 3
  ]);
  const origin = [0, 1, 2];
  const convert = ["0", "1", "2"];
  expect(() =>
    arrayToString(array, width, height, nSlices, origin, convert)
  ).toThrow(`Invalid conversion table`);
});

test("array to string", () => {
  const width = 5;
  const height = 3;
  const nSlices = 2;
  const origin = [0, 1, 2];
  const convert = ["0", "1", "2"];
  const spacePaddingNumber = 1;

  // prettier-ignore
  const array = new Uint8Array([
      1, 1, 1, 1, 1, 
      0, 0, 0, 0, 0, 
      2, 1, 0, 1, 2,

      1, 1, 0, 1, 1,
      0, 0, 0, 0, 0, 
      0, 0, 0, 0, 0
    ]);
  const answer = "11111\n00000\n21012\n=====\n11011\n00000\n00000\n";
  const output = arrayToString(
    array,
    width,
    height,
    nSlices,
    origin,
    convert,
    spacePaddingNumber
  );
  console.log(answer);
  console.log(output);
  expect(answer === output).toBe(true);
});
