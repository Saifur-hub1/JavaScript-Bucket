const axios = require('axios').default;

async function getUsers(){
  const url = 'https://jsonplaceholder.typicode.com/users';
  const {data:users} = await axios.get(url);
  return users.map(
    user => axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
    );
}

(async ()=>{
  const users = await getUsers();
  for await (let i of users){
    const {data: users} = i;
    console.log(users);
  }
  for await(let v of users){
    const {data: posts} = v;
    console.log(posts.map((d)=>d.title));
  }
  for await (let v of users){
    const {data: posts} = v;
    console.log(posts.map((d)=>d.id));
  }
})();