function wait(ms){
  const promise = new Promise((resolve)=>{
    setTimeout(resolve, ms);
  });
  return promise;
}

//Same method to create promise 
const anoTherWay = (ms)=> new Promise((resolve)=> setTimeout(resolve, ms));
anoTherWay(5000).then(()=>{
  console.log('another 5000ms runs');
});
anoTherWay(2000).then(()=>{
  console.log('Another 2000ms');
});
anoTherWay(3000).then(()=>{
  console.log('Another 3000ms');
});


wait(1000).then(()=>{
  console.log('Done in 1000ms');
});

wait(2000).then(()=>{
  console.log('Done in 2000ms');
});

wait(3000).then(()=>{
  console.log('Done in 3000ms');
});