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

const demoGet = (url) => Promise.resolve();

demoGet(`/users?username=saifur`)
  .then(user=>{
    // Do all other operations here
    return demoGet(`/posts?user_id=${user.id}`);
  })
  .then((posts)=>{
    const latestPost = posts[0];
    return demoGet(`/comments?post_id=${latestPost.id}`);
  })
  .then((comments)=>{
    const latestComment = comments[0];
    return demoGet(`/users?username=saifur`);
  })
  .then((user)=>{
    console.log(user);
  })
  .catch(()=>{
    console.log('Error');
  })