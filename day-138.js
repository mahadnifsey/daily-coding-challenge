// Surface Area and Volume of a Box
// Write a function that returns the total surface area and volume of a box as an array: [area, volume]
const getSize = (width, height, depth) => [
    ((width * height) + (width * depth) + (depth * height)) * 2,
    width * height * depth
];

// Alternative Method
const getSize = (w, h, d) => [
    (w * h + w * d + h * d) * 2,
    w * h * d
];