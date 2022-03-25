import React from "react";


const UsersList = ({ users, setUserSelected, deleteUsers, setIsOpen }) => {
  
  const editInModal = (user) =>{
    setIsOpen(true);
    setUserSelected(user);
  }
  
  return (
    <div className="content-grid">

      {users.map((user) => (
        <ul className="card-users-list" key={user.id}>
          
            <h3 className='user-first-name'>{user.first_name}</h3>
            <p>
              <b className='info'>Last Name: </b> {user.last_name}
            </p>
            <p>
              <b className='info'>Email: </b>
              {user.email}
            </p>
            <p>
              <b className='info'>Password: </b> {user.password}
            </p>
            <p>
              <b className='info'>Birthday</b> {user.birthday}
            </p>
            <div className='button-content'>  
              <button className='select-button' onClick={() =>editInModal(user)}><i className="fa-solid fa-pen-to-square"></i>Select</button>
              <button className='delete-button' onClick={() => deleteUsers(user.id)}><i className="fa-solid fa-trash"></i>Delete</button>
            </div>
          
        </ul>
      ))
      }

    </div>
  );
};

export default UsersList;
