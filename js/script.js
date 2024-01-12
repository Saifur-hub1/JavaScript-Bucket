/*
  Store 10 students information
  id:
  name:
  e-mail:
*/

function uuidv4(){
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c)=>{
    const r = (Math.random() * 16)|0;
    const v = c =='x'? r: (r&0x3) | 0x8;

    return v.toString(16);
  });
}


const students = [
  {
    id: '9a87a4f9-7cd3-4d8d-b725-3d8ac6f5b34c',
    name: 'Saifur Rahman',
    email: 'saifurrahman31416@gmail.com'
  },
  {
    id: '06cd4ef7-5e3e-4ede-bcd2-8c16945e1d6b',
    name: 'Sadia Afrin',
    email: 'sadiaafrin@gmail.com'
  },
  {
    id: 'c069d541-d673-4191-ac31-91759adfe0cb',
    name: 'Sultana Najnin',
    email: 'sultananajnin@gmail.com'
  }
];



/*
  1. Easily Traverse
  2. Filter
  3. Delete
  4. Update
  5. Create new one
*/

//By using 'students.unshift({id: '', name: '', email: ''})' we can add new object at the first index position. 
//(Note: It has O(n) time complexity, as all elements must shift one position right to insert a value in the left most side)

//By using 'students.push({id: '', name: '', email: ''})' we can add new object at the right most side.
//(Note: It has O(1) time complexity, as it's just added to the right side of the array)

// Create a new student
students.push({
  id: uuidv4(),
  name: 'Suraiya Najnin',
  email: 'suraiya@gmail.com'
});

const idToUpdate = '06cd4ef7-5e3e-4ede-bcd2-8c16945e1d6b';
const dataToUpdate = {
  name: 'Tarek Bin Nur',
  email: 'tarekbinnur@gmail.com'
}

// Update method 01
// It has a great problem while we want only one data or we want to add multiple data at once. So, go ahead to the next method
const updatedObj = students.find((item)=> item.id===idToUpdate);
updatedObj.name = dataToUpdate.name;
updatedObj.email = dataToUpdate.email;
console.log(updatedObj);


//Update method 02 
// It fixed all bug
const toUpdateIndex = students.findIndex((item)=> item.id===idToUpdate);
// console.log(toUpdateIndex);

students[toUpdateIndex] = {
  ...students[toUpdateIndex],
  ...dataToUpdate
}
// console.log(students);

// Object delete method
students.splice(toUpdateIndex, 1);

// console.log(students);

// forEach, map, filter, every, reduce, some, find, findIndex

students.forEach((student)=>{
  console.log(student.name);
});


for(let i=0; i<students.length; i++){
  console.log(students[i].name);
}

for(i in students){
  console.log(students[i].name);
}

for(i of students){
  console.log(i.name);
}