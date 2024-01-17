const axios = require('axios').default;

async function getUsers(){
  const url = 'https://jsonplaceholder.typicode.com/users';

  const {data: users} = await axios.get(url); // It will provide an array of users to us
  return users;
}

getUsers()
  .then((users)=>{
    console.log(users);
  })
  .catch((e)=>{
    console.log(e);
  }) 