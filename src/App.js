import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import UsersList from "./components/UsersList";
import UsersForm from "./components/UsersForm";
import "./styles.css";
import ModalScreen from "./components/ModalScreen";

function App() {
  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  const getUsers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  };

  const deleteUsers = id => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers());
  }


  console.log(userSelected)

  return (
    <div className="App">
      <div className="toolbar"> <h1> Usuarios</h1>
        <div className="toolbar-button">
          <button className="button-new" onClick={openModal}>
            <i className="fa-solid fa-plus-large"></i><p>New User</p>
          </button>
        </div>
      </div>
      {/*
        showForm &&<UsersForm 
        getUsers={getUsers} 
        userSelected={userSelected}
        setUserSelected={setUserSelected} 
        />
    */}
      <ModalScreen
        getUsers={getUsers}
        userSelected={userSelected}
        setUserSelected={setUserSelected} 
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
      />

      <UsersList
        users={users}
        setUserSelected={setUserSelected}
        deleteUsers={deleteUsers}
        setIsOpen={setIsOpen}
      />
    </div>
  );




}

export default App;
