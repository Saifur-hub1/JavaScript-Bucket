function demoFunction(){
  console.log('saifur rahman');
}
const value = demoFunction;
console.log(value.toString());

value();

const ar = [value, demoFunction];
const o = {
  fn: demoFunction
}

function returnFn(){
  return demoFunction;
}

// function constFunc(str){
//   `let obj = {};
//   for(let s of str){
//     if(s!==' '){
//       obj[s] = s;
//     }
//   }
//   return obj;`
// }

const str = "Saifur Rahman";
// console.log(constFunc(str));


//By doing this type of function creation we can generate function in runtime
const demo  = new Function(
  'str', 
  `let obj = {};
  for(let s of str){
    if(s!==' '){
      obj[s] = s;
    }
  }
  return obj;`
);
console.log(demo(str));