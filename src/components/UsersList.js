import React from "react";

const UsersList = ({ users,setUserSelected }) => {
  return (
    <ul className="users-list">
      {users.map((user) => (
        <li key={user.id}>
          <h4>{user.first_name}</h4>
          <p>
            <b>Email: </b>
            {user.email}
          </p>
          <p>
            <b>Password: </b> {user.password}
          </p>
          <p>
            <b>Birthday</b> {user.bithday}
          </p>
          <p>
            <b>Last Name</b> {user.last_name}
          </p>
          <button onClick={() => setUserSelected(user)}>Select</button>
        </li>
        ))
      }
    </ul>
  );
};

export default UsersList;
