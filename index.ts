/*! 3d-array-to-string (c) 2022 Tomomi Takenaga */

function isIncluded(sample: any, population: number[]) {
  const unique = Array.from(new Set(sample));
  return !unique.some((element) => population.every((p) => p !== element));
}

export function arrayToString(
  array: any,
  width: number,
  height: number,
  nSlices: number,
  original: number[],
  conversion: string[],
  spacePaddingNumber = 3,
  linePaddingNumber = 0,
  sliceSeparation = "="
) {
  if (array.length !== width * height * nSlices)
    throw new TypeError("Invalid matrix size");
  if (original.length !== conversion.length)
    throw new TypeError("Invalid conversion table");
  if (!isIncluded(array, original))
    throw new TypeError("Invalid conversion table");
  const numberToString = (num: number) => {
    for (let index = 0; index < original.length; index++) {
      if (original[index] === num) return conversion[index];
    }
    throw new TypeError("Invalid conversion table");
  };
  let output: string = "";
  for (let k = 0; k < nSlices; k++) {
    for (let j = 0; j < height; j++) {
      for (let i = 0; i < width; i++) {
        const pos = i + j * width + k * width * height;
        const msg = numberToString(array[pos]);
        const padding =
          msg.length < spacePaddingNumber
            ? " ".repeat(spacePaddingNumber - msg.length)
            : "";
        output += `${msg}${padding}`;
      }
      output += "\n".repeat(linePaddingNumber + 1);
    }
    output +=
      `${sliceSeparation}`.repeat(
        (spacePaddingNumber / sliceSeparation.length) * width
      ) + "\n";
  }
  return output;
}
