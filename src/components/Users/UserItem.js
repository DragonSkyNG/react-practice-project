import React from "react";

const UserItem = (props) => {
    const userString = props.name + " " + props.age + " years old";
    return (
        <li>
            <div>{userString}</div>
        </li>
    );
};

export default UserItem;
