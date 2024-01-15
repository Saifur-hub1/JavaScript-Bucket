//pure function
function sum(a,b){
  return a+b;
}
// console.log(sum(2,3));

// side effect
let limit = 100;
function changeLimit(limit){
  limit = 500;
  return limit;
}
changeLimit(limit);



// Impure function
function changeLimit1(){
  limit = 500;
}
changeLimit1();
console.log(limit);


//Though array get reference but it is pure function
const arr = [1,2,3];
function add(arr, data){
  arr.push(data);
}
add(arr, 10);

console.log(arr);

//side effect
function change(data){
  arr.push(data);
}
change(100);
console.log(arr);


