// Return non-duplicate number in the array. Consider every element appears twice except for one.

let sample = [1,2,2,3,1]

const num = sample.reduce((a, b) => a ^ b);

console.log(num)  //3
