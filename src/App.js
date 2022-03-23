import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import UsersList from "./components/UsersList";
import UsersForm from "./components/UsersForm";
import "./styles.css";

function App() {
  const [users, setUsers]= useState([]);
  const [ userSelected,setUserSelected] = useState(null);
  
  useEffect(() => {
    axios
    .get("https://users-crud1.herokuapp.com/users/")
    .then((res)=> setUsers(res.data));
  },[]);
  
  const getUsers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  };
  
  console.log(userSelected)
  return(
    <div className="App">
      <UsersForm getUsers={getUsers} userSelected={userSelected} />
      <UsersList users={users} setUserSelected={setUserSelected} />
    </div>
  );
  



}

export default App;
