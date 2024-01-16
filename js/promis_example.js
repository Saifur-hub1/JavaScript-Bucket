function wait(ms){
  const promise = new Promise((resolve)=>{
    setTimeout(resolve, ms);
  });
  return promise;
}

wait(1000).then(()=>{
  console.log('Done in 1000ms');
});

wait(2000).then(()=>{
  console.log('Done in 2000ms');
});

wait(3000).then(()=>{
  console.log('Done in 3000ms');
});