// You can iterate any type of primitive data by doing these steps
let channel = 'The Code Cave';

console.log(channel[Symbol.iterator].toString()); 

const channelIterator = channel[Symbol.iterator]();
// console.log(channelIterator.next());
// console.log(channelIterator.next());
// console.log(channelIterator.next());
// console.log(channelIterator.next());
// console.log(channelIterator.next());
// console.log(channelIterator.next());
// console.log(channelIterator.next());
// console.log(channelIterator.next());
// console.log(channelIterator.next());
// console.log(channelIterator.next());
// console.log(channelIterator.next());
// console.log(channelIterator.next());
// console.log(channelIterator.next());
// console.log(channelIterator.next());
// console.log(channelIterator.next());

// We can do upper activity by writing these lines of code
// for(let v of channel){
//   console.log(v);
// }


// We can also use while loop
console.log('using while loop')
while(true){
  const data = channelIterator.next();
  if(data.done){
    break
  }
  console.log(data);
}