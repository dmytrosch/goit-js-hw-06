import users from "./users.js";

const getNamesSortedByFriendsCount = (users) => {
  const usersArr = [...users];
  return usersArr
    .sort((min, max) => min.friends.length - max.friends.length)
    .map((user) => user.name);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
