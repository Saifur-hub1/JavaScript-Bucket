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
