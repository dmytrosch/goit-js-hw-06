import users from "./users.js";

const getUserNames = (users) => {
  const userNames = users.map((user) => user.name);

  return userNames;
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
