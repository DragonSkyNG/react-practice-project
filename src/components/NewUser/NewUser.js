import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./NewUser.module.css";

const NewUser = (props) => {
  return (
    <div>
    {/* passing additional styles to Card component */}
      <Card className={styles.newuser}>
        <form className={styles.input}>
          <div>
            <label>Name</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Age</label>
            <input type="number"></input>
          </div>
          {/* Using cutom made Button component */}
          <Button>Add New User</Button>
        </form>
      </Card>
    </div>
  );
};

export default NewUser;
