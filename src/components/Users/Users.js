import React from "react";

import Card from "../UI/Card";
import UsersList from "./UsersList";

const Users = (props) => {
  return (
    <div>
      <Card>
        <UsersList users={props.users} />
      </Card>
    </div>
  );
};

export default Users;
