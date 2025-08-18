const _ = require("lodash");

const array = [1, [2, [3, [4]], 5], 6];

const flattenArray = _.flattenDeep(array);

console.log("Original Array:", array);
console.log("NEW Array:", flattenArray);
