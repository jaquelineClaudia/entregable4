import React from 'react';
import {useState} from 'react';
import { useEffect } from "react";
import axios from 'axios';

const UsersForm = ({getUsers,userSelected}) => {
      const[first_name,setFirst_name] = useState ("");
      const[last_name,setLast_name] = useState ("");
      const[email,setEmail] = useState ("");
      const[password,setPassword] = useState ("");
      const[bithday,setBithday] = useState ("");
      

      useEffect(() => {
            if (userSelected) {
              setFirst_name(userSelected.first_name);
              setLast_name(userSelected.last_name);
              setEmail(userSelected.email);
              setPassword(userSelected.password);
              setBithday(userSelected.bithday);
             
            }
          }, [userSelected]);
        
          console.log(userSelected);
        
      const submit = e =>{
            e.preventDefault();
            const user ={
                  first_name,
                  last_name,
                  email,
                  password,
                  bithday,
                  
            }
            axios.post('https://users-crud1.herokuapp.com/users/',user) 
                 .then(() =>{
                        getUsers();
                        setFirst_name("");
                        setLast_name("");
                        setEmail("");
                        setPassword("");
                        setBithday("");
                        
                });
            };
          
            return (
              <form onSubmit={submit}>
                <div className="input-container">
                  <label htmlFor="first_name">first name</label>
                  <input
                    type="text"
                    onChange={(e) => setFirst_name(e.target.value)}
                    value={first_name}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    type="text"
                    onChange={(e) => setLast_name(e.target.value)}
                    value={last_name}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="bithday">Birthday</label>
                  <input
                    type="date"
                    onChange={(e) => setBithday(e.target.value)}
                    value={bithday}
                  />
                </div>
    
                <button>Submit</button>
              </form>
            );
          };          
export default UsersForm;
      