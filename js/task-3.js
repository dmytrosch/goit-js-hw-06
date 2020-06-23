import users from "./users.js";

const getUsersWithGender = (users, gender) => {
  const genderFilter = users
    .filter((user) => user.gender === gender)
    .map((user) => user.name);
  return genderFilter;
};
console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
