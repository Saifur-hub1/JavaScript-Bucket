/**
 * 1. find user by username
 * 2. find posts by userid
 * 3. find latest post
 * 4. find comments by post id
 * 5. find latest comment
 * 6. find username of the last commented user
 */
/**
 * /users?username = [username]
 * /posts?user_id=[user_id]
 * /comments?post_id=[post_id]
 * /users?username=[username]
 */

const exampleGet = (url) => Promise.resolve();

async function getUserName(username){
  try{
    const mainUser = await exampleGet(`/users?username = ${username}`);
    const posts = await exampleGet(`/posts?user_id=${mainUser.id}`);
    const comments = await exampleGet(`/comments?post_id=${posts[0].id}`);
    const user = await exampleGet(`/users?username=${comments[0].username}`);
    console.log(user);
  } catch(e){
    console.log(e);
  }
}