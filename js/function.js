function demoFunction(){
  console.log('saifur rahman');
}
const value = demoFunction;
console.log(value.toString());

value();

const ar = [fn, demoFunction];
const o = {
  fn: demoFunction
}

function returnFn(){
  return demoFunction;
}