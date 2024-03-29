const axios = require('axios').default;

async function getUser(){
  const url = 'https://jsonplaceholder.typicode.com/users';
  const {data:users} = await axios.get(url);
  return users;
}

async function *getPostsByUser(users){
  const url = 'https://jsonplaceholder.typicode.com/posts';
  for(let i=0; i<users.length; i++){
    const {data: posts} = await axios.get(`${url}?userId=${users[i].id}`);
    yield posts;
  }
}

getUser()
  .then(async (users)=>{
    // const usersIterato = await getPostsByUser(users);
    // await usersIterato.next();
    // await usersIterato.next();
    // await usersIterato.next();
    // await usersIterato.next();
    // await usersIterato.next();
    // await usersIterato.next();
    // await usersIterato.next();
    // console.log((await usersIterato.next()).value);
    for await(v of getPostsByUser(users)){
      console.log(v);
    }
    for await(v of getPostsByUser(users)){
      console.log(v.map((data)=>data.title));
    }
  })
  .catch((e)=>{
    console.log(e);
  });