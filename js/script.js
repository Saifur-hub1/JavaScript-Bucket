/*
  Store 10 students information
  id:
  name:
  e-mail:
*/

function uuidv4(){
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c)=>{
    const r = (Math.random() * 16)|0;
    const v = c == 'x'? r: (r & 0x3) | 0x8;

    return v.toString(16);
  });
}
console.log(uuidv4());