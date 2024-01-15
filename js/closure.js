function power(p){
  return function (n){
    let store = 1;
    for(let i=1; i<=p; i++) store*=n;

    return store;
  };
};

const sqr = power(2);
const cube =  power(3);
const pow4 = power(4);
const pow5 = power(5);

console.log(sqr.toString());
console.log(cube(2));
console.log(pow4(2));
console.log(pow4(2));
console.log(pow5(2));