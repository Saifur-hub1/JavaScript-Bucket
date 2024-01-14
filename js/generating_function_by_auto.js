const FunData = {
  params: ['a', 'b'],
  body: ['const r = a+b', 'return r']
};

const FunBody = FunData.body.reduce((acc, curr)=>{
  acc+=curr+';\n';
  return acc;
}, ``);

console.log(FunBody);

const demoFun = new Function(...FunData.params, 
  `${FunBody}`
);

console.log(demoFun(100,44));