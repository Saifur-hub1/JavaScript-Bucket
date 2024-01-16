function exampleAsyncCallbackHell(callback){
  asyncOptn1((result1)=>{
    asyncOptn2(result1, (result2)=>{
      asyncOptn3(result2, (result3)=>{
        // .... and so on
        callback(result3);
      });
    });
  });
}


function asyncOptn1(callback){
  //some asynchronous operation
  setTimeout(()=>{
    console.log('Async operation 1');
    callback('Result 1');
  },1000);
}
function asyncOptn2(data, callback){
  //some asynchronous operation
  setTimeout(()=>{
    console.log('Async operation 2 with data: ', data);;
    callback('Result 2');
  }, 1000);
}

function asyncOptn3(data, callback){
  //some asynchronous operation
  setTimeout(()=>{
    console.log('Async operation 3 with data: ', data);
    callback('Result 3')
  }, 1000);
}

exampleAsyncCallbackHell((finalResult)=>{
  console.log('Final result: ', finalResult);
})