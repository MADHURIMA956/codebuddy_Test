// level {1/2/3}

//level -3 



// async function getUsers(users) {
//     const new_users = [];
  
//     for (let i = 0; i < users.length; i = i + 1) {
//       const newUser = user[i];
//       newUser.id = i;
  
//       new_users.push(newUser);
//     }
  
//     return new_users;
//   }


async function getUsers(users) {

    const  new_users = users.map((value) => value);
    return new_users;
    
}