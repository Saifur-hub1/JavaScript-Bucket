// map, filter, reduce

const  numbers = [1, 2, 3, 4, false, '', NaN, 5, 6];
// const filtered = numbers.filter((v)=> v);
const strs = numbers.filter((v)=>v).map((v)=> v.toString());

console.log(strs);

// console.log(filtered);
// console.log(numbers)