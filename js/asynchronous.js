function main(){
  setTimeout(()=>{
    console.log('10');
  }, 1000);

  setTimeout(() => {
    console.log('20');
  }, 500);

  test();
}

function test(){
  console.log('testing');
}
main();