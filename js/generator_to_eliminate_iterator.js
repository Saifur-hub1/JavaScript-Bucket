function *Generator(){
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  yield 6;
}
// const iterator = Generator();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


// Another example and uses of generator.
// Generator function must have a asterisk symbol like up and below
function *range(start=0, stop=100, step=5){
  for(let i=start; i<=stop; i+=step) yield i;
}


for(let v of range()) console.log(v);



// const ite = range();
// console.log(ite.next());
// console.log(ite.next());
// console.log(ite.next());
// console.log(ite.next());
// console.log(ite.next());
// console.log(ite.next());
// console.log(ite.next());
// console.log(ite.next());
// console.log(ite.next());
// console.log(ite.next());
// console.log(ite.next());
// console.log(ite.next());
// console.log(ite.next());
// console.log(ite.next());
// console.log(ite.next());
// console.log(ite.next());
// console.log(ite.next());
// console.log(ite.next());
// console.log(ite.next());
// console.log(ite.next());
// console.log(ite.next());
// console.log(ite.next());
// console.log(ite.next());
// console.log(ite.next());
// console.log(ite.next());
// console.log(ite.next());
// console.log(ite.next());
// console.log(ite.next());


// const ite1 = range(1,10,1);
// console.log(ite1.next());
// console.log(ite1.next());
// console.log(ite1.next());
// console.log(ite1.next());
// console.log(ite1.next());
// console.log(ite1.next());
// console.log(ite1.next());
// console.log(ite1.next());
// console.log(ite1.next());
// console.log(ite1.next());
// console.log(ite1.next());



// Another real type example of generator

function *Gen1(){
  let i=1;
  while(true) yield i++;
}

const generateUserId = Gen1();
const generateProductID = Gen1();


// Generate user id
console.log('\nGenerating user id: ');
console.log(generateUserId.next());
console.log(generateUserId.next());
console.log(generateUserId.next());
console.log(generateUserId.next());
console.log(generateUserId.next());
console.log(generateUserId.next());
console.log(generateUserId.next());


// Generate product Id
console.log('\nGenerating product Id: ')
console.log(generateProductID.next());
console.log(generateProductID.next());
console.log(generateProductID.next());
console.log(generateProductID.next());
console.log(generateProductID.next());
console.log(generateProductID.next());
console.log(generateProductID.next());
console.log(generateProductID.next());
console.log(generateProductID.next());