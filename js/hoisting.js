function randomSum(max){
  const random1 = Math.floor(Math.random()*max);
  const random2 = Math.floor(Math.random()*max);

  t();
  console.log(test);

  function t(){
    console.log('im t');
  }
  var test = 'something';

  t();

  return random1+random2;
}

const r = randomSum(5); 
