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
  
  // console.log('Index: ',index, 'Curr: ',curr, 'arr: ', arr);

  if(curr)arr.push(curr.toString());

  return arr;

}, []);
// console.log(ans);

let data1 = [];
for(let i=1; i<=5000000; i++){
  data1.push(i);
}

console.time('Brute force');
data1.filter((item)=> (item&1)===0).map((item)=> item*2);
console.timeEnd('Brute force');

console.time('Optimized: ');
data1.reduce((init, curr)=>{
  if(!(curr&1)) init.push(curr*2);
  
  return init;
}, []);
console.timeEnd('Optimized: ');

function myReduce(data2, cb, init){
  let acc = init;
  for(let i=0; i<data2.length; i++){
    acc = cb(acc, data2[i], i, data2);
  }
  return acc;
}
const sum = myReduce([1,2,3,4], (a,b)=> a+b, 0);
console.log(sum);

const data3 = [1,2,3,'',false, NaN, 4, 5,6];
const newData = myReduce(data3, (acc, curr)=>{
  
  if(curr){
    acc.push(curr);
  }
  return acc;
}, []);

console.log(newData);