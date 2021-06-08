import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./NewUser.module.css";

const NewUser = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [error, setError] = useState();

  const nameInputHandler = (event) => {
    setInputName(event.target.value);
  };

  const ageInputHandler = (event) => {
    setInputAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (both must be filled).",
      });
      return;
    }
    if (+inputAge < 1) {
      setError({
        title: "invalid age",
        message: "Please enter a valid age > 0.",
      });
      return;
    }

    props.onAddUser(inputName, inputAge);

    setInputName("");
    setInputAge("");
  };

  const errorHandler = () =>{
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onClick={errorHandler}/>}
      {/* passing additional styles to Card component */}
      <Card className={styles.newuser}>
        <form className={styles.input} onSubmit={formSubmitHandler}>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={inputName}
              onChange={nameInputHandler}
            ></input>
          </div>
          <div>
            <label>Age</label>
            <input
              type="number"
              value={inputAge}
              onChange={ageInputHandler}
            ></input>
          </div>
          {/* Using cutom made Button component */}
          <Button type="submit">Add New User</Button>
        </form>
      </Card>
    </div>
  );
};

export default NewUser;
