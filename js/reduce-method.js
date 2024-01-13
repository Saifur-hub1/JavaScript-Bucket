const numbers = [1,2,3,4,false, NaN, '', 5, 6];

// We want 1234falseNaN56
// const result = numbers.reduce((initial, curr)=>{
//   return (initial+=curr);
// }, '');

// console.log(result);

// We want 1,2,3,4,5,6
const result = numbers.reduce((initial, curr)=>{
  if(curr){
    initial.push(curr.toString());
  }
  return initial;
}, []);

// console.log(result);

const ans = numbers.reduce((arr, curr, index)=>{
  
  console.log('Index: ',index, 'Curr: ',curr, 'arr: ', arr);

  if(curr)arr.push(curr.toString());

  return arr;

}, []);
console.log(ans);