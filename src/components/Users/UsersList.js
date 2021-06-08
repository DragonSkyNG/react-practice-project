import React from "react";

import UserItem from "./UserItem";
import Card from "../UI/Card";
import styles from "./UsersList.module.css";



const UsersList = (props) => {
  // check  to see if passed array is empty
  if (props.users.length === 0) {
    return <h2>No Users Found</h2>;
  }

  return (
    <Card className={styles.users}>
      {/* for each array element we're creating a new UserItem component with passed data */}
      <ul>
        {props.users.map((user) => {
          return <UserItem key={user.id} name={user.name} age={user.age} />;
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
