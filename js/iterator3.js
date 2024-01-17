// We want to loop throw an object but normal object don't allow to iterate, we must make it iteratable if we want make iteratable

const range = {
  start: 0,
  stop: 100,
  step: 5
};

range[Symbol.iterator] = function () {
  let current = this.start;
  const stop = this.stop;
  const step = this.step;
  return{
    next(){
      const o = {
        value: current,
        done: current>stop
      };
      current+=step;
      return o;
    }
  }
}
for(v of range){
  console.log(v);
}
const rangeIterator = range[Symbol.iterator]();
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());
console.log(rangeIterator.next());