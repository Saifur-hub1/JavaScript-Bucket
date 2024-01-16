const isResolved = true;

const promise = new Promise((resolve, reject)=>{
  if(isResolved){
    resolve('completed');
  }
  else {
    reject('data');
  }
});

promise.catch((e)=>{
  console.log('Rejeceted');
  console.log(e);
}).then((result)=>{
  console.log(result);
});
