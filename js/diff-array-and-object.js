let arr = [];
let obj = {};
for(let i=0; i<10000000; i++){
  const data ={
    id: i,
    value: i+1
  }
  arr.push(data);
  obj[i] = data;
}

const id = 4999999;
console.time('Array taking time: ');

arr.find((item)=>item.id===id)

console.timeEnd('Array taking time: ');

console.time('Object taking time: ');

obj[id].value = 40;

console.timeEnd('Object taking time: ');