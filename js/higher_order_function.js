/*
 * Higher order function 
 * - Function can be passed as an argument
 * - Function can be return from another argument
*/
/*
* Hidden concepts
* - Scope
* - Closure
* - Execution/Function Context
* - Hoisting 
*/

function generateTwoRandomNum(max, WhatDoYouWant){
  const random1 = Math.floor(Math.random()*max);
  const random2 = Math.floor(Math.random()*max);
  const result = WhatDoYouWant(random1, random2);
  return result;
}
generateTwoRandomNum(100, (rand1,rand2)=>console.log(rand1,rand2));
generateTwoRandomNum(100, (r,b)=>console.log(r+b));

// function randomSum(max){
//   // const random1 = Math.floor(Math.random()*max);
//   // const random2 = Math.floor(Math.random()*max);
//   const {random1,random2} = generateTwoRandomNum(max);

//   return random1 + random2;
// }

// function randomSub(max){
//   // const random1 = Math.floor(Math.random()*max);
//   // const random2 = Math.floor(Math.random()*max);
//   const {random1,random2} = generateTwoRandomNum(max);
  
//   return random2-random1;
// }

// function randomMultiple(max){
//   // const random1 = Math.floor(Math.random()*max);
//   // const random2 = Math.floor(Math.random()*max);
//   const {random1,random2} = generateTwoRandomNum(max);

//   return random1*random2;
// }

// function randomSquare(max){
//   // const random1 = Math.floor(Math.random()*max);
//   // const random2 = Math.floor(Math.random()*max);
//   const {random1,random2} = generateTwoRandomNum(max);

//   return random1*random1+random2*random2;
// }

// console.log(randomSum(100));
// console.log(randomSub(100));
// console.log(randomMultiple(100));
// console.log(randomSquare(100));
