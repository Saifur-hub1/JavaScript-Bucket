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


const students = {
  '9a87a4f9-7cd3-4d8d-b725-3d8ac6f5b34c': {
    id: '9a87a4f9-7cd3-4d8d-b725-3d8ac6f5b34c',
    name: 'Saifur Rahman',
    email: 'saifurrahman31416@gmail.com'
  },
  '06cd4ef7-5e3e-4ede-bcd2-8c16945e1d6b': {
    id: '06cd4ef7-5e3e-4ede-bcd2-8c16945e1d6b',
    name: 'Sadia Afrin',
    email: 'sadiaafrin@gmail.com'
  },
  'c069d541-d673-4191-ac31-91759adfe0cb': {
    id: 'c069d541-d673-4191-ac31-91759adfe0cb',
    name: 'Sultana Najnin',
    email: 'sultananajnin@gmail.com'
  }
};

/*
  1. Easily Traverse
  2. Filter
  3. Delete
  4. Update
  5. Create new one
*/

// New student added
const newStudent = {
  id: '7a15f5fb-b4e4-4b59-8037-fdcde58a45ab',
  name: `Amirul Islam Siham`,
  email: `amirulislamsiham@gmail.com`
}

students[newStudent.id] = newStudent;

// console.log(students);

// Update data
// It will work O(1) time complexity
const idToUpdate = '7a15f5fb-b4e4-4b59-8037-fdcde58a45ab';
const dataToUpdate = {
  id: idToUpdate,
  name: 'Dipti',
  email: 'dipti@gmail.com'
}

students[idToUpdate] = {
  ...students[idToUpdate],
  ...dataToUpdate
};

// console.log('Before deleting: ',students);


// Delete data
delete students[idToUpdate];

// console.log('After deleting: ',students);


// Traversing in the object
// console.log(Object.values(students)); // It will give an array type value, so we can traverse it by forEach
Object.values(students).forEach((student)=>{
  console.log(student.name, student.email);
});