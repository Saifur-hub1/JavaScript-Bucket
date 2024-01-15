// Immediately Invoked Function Expression

(function callMeImmediately(name){
  console.log(name);
})('Saifur Raman');

(function callMeSecond(){
  console.log("It's working");
})();



//Fat arrow function
(()=>console.log('possible also in fat arrow function'))();