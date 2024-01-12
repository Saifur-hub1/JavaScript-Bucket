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

const id = 499999;
console.time('Array taking time: ');

const index = arr.findIndex((item)=> item.id===id);
arr.splice(index,1);

console.timeEnd('Array taking time: ');



console.time('Object taking time: ');

delete obj[id];

console.timeEnd('Object taking time: ');