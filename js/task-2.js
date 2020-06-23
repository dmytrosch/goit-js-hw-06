import users from "./users.js";
const getUsersWithEyeColor = (users, color) => {
  const eyesFilter = users.filter((user) => user.eyeColor === color);
  return eyesFilter;
};

console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
