import users from "./users.js";

const getInactiveUsers = (users) => {
  const inactiveFilter = users.filter((user) => !user.isActive);
  return inactiveFilter;
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
