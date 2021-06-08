import React from "react";
import NewUser from "./components/NewUser/NewUser";
import Users from "./components/Users/Users";

const usersArr = [
  { Name: "Jimbo", Age: 28 },
  { Name: "Rubat", Age: 28 },
  { Name: "Laz", Age: 27 },
];

const App = () => {
  return (
    <div>
      {/* Calling Component with which we can add new users */}
      <NewUser />
      {/* Calling Component which displays all users based on passed array */}
      <Users users={usersArr} />
    </div>
  );
};

export default App;
