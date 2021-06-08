import React, { useState } from "react";
import NewUser from "./components/NewUser/NewUser";
import Users from "./components/Users/Users";

// const usersArr = [
//   { id: "u1", name: "Jimbo", age: 28 },
//   { id: "u2", name: "Rubat", age: 28 },
//   { id: "u3", name: "Laz", age: 27 },
// ];

const App = () => {
  const [usersArr, setUserArr] = useState([
    { id: "u1", name: "Jimbo", age: 28 },
    { id: "u2", name: "Rubat", age: 28 },
    { id: "u3", name: "Laz", age: 27 },
  ]);
  const addUserHandler = (nName, nAge) => {
    setUserArr(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({id: Math.random(), name: nName, age: nAge})
      return updatedUsers;
    })
  };
  return (
    <div>
      {/* Calling Component with which we can add new users */}
      <NewUser onAddUser={addUserHandler} />
      {/* Calling Component which displays all users based on passed array */}
      <Users users={usersArr} />
    </div>
  );
};

export default App;
