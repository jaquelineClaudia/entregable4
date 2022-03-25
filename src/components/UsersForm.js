import React from 'react';
import {useState} from 'react';
import { useEffect } from "react";
import axios from 'axios';



const UsersForm = ({getUsers,userSelected,setUserSelected }) => {
      const[first_name,setFirst_name] = useState ("");
      const[last_name,setLast_name] = useState ("");
      const[email,setEmail] = useState ("");
      const[password,setPassword] = useState ("");
      const[birthday,setBirthday] = useState ("");
      

      useEffect(() => {
            if (userSelected) {
              setFirst_name(userSelected.first_name);
              setLast_name(userSelected.last_name);
              setEmail(userSelected.email);
              setPassword(userSelected.password);
              setBirthday(userSelected.birthday);
             
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
                  birthday,
            }
            if(userSelected){
              console.log("update");
              axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`,user)
                   .then(()=>{
                     getUsers()
                     setUserSelected(null)
                     reset();
                   });
            }else{
              axios.post('https://users-crud1.herokuapp.com/users/',user) 
              .then(() =>{
                  getUsers();
                  reset();
             })
             .catch(error =>console.log(error.response));
         }

      }

      const reset =()=>{
        setFirst_name("");
        setLast_name("");
        setEmail("");
        setPassword("");
        setBirthday(""); 
      }
          
          
          return (
            <div className='content-form' animate__animated animate__fadeInDown>
              <form onSubmit={submit}>
                <div className="first-name">
                  <label htmlFor="first_name">First Name</label>
                  <input
                    type="text"
                    placeholder='Jimin'
                    onChange={(e) => setFirst_name(e.target.value)}
                    value={first_name}
                  />
                </div>
                <div className="last-name">
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    type="text"
                    placeholder='Park'
                    onChange={(e) => setLast_name(e.target.value)}
                    value={last_name}
                  />
                </div>
                <div className="email">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder='user@user.com'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="password">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    placeholder='*********'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <div className="birthday">
                  <label htmlFor="birthday">Birthday</label>
                  <input
                    type="date"
                    placeholder='birthday'
                    onChange={(e) => setBirthday(e.target.value)}
                    value={birthday}
                  />
                </div>
                <div className='button'>
                  <div>
                    <button className='button-submit'><i class="fa-light fa-arrow-up-from-square"></i>Submit</button>
                  </div>
                  <div>
                    <button className='button-deselect' onClick={() => reset()} type="button"><i class="fa-light fa-hexagon-xmark"></i>Deselect</button>
                  </div>
                </div>
              </form>
            </div>
            );
          };          
export default UsersForm;
      