const operations = [
  {
    args: [10, 20],
    params: ['a', 'b'],
    body: 'console.log("Sum:",(a+b))'
  },
  {
    args: [40, 30],
    params: ['a','b'],
    body: 'console.log("Sub: ", (a-b))'
  },
  {
    args: [50, 10],
    params: ['a', 'b'],
    body: 'console.log("Multiplication: ", (a*b))'
  }
];

// const funCode = operations.reduce((acc, curr)=>{
//   const body = curr.body;
//   acc+= body +';\n';
//   return acc;
// }, ``);

// console.log(funCode);

operations.forEach(Operation=>{
  const fn = new Function(...Operation.params, Operation.body);
  fn(...Operation.args);
});