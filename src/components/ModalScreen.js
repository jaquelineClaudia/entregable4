import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
      content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
      },
};

Modal.setAppElement('#root');

const ModalScreen = ({getUsers,userSelected,setUserSelected,modalIsOpen, setIsOpen }) => {
      const [first_name, setFirst_name] = useState("");
      const [last_name, setLast_name] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [birthday, setBirthday] = useState("");


      useEffect(() => {
            if (userSelected) {
                  setFirst_name(userSelected.first_name);
                  setLast_name(userSelected.last_name);
                  setEmail(userSelected.email);
                  setPassword(userSelected.password);
                  setBirthday(userSelected.birthday);

            }
      }, [userSelected]);


      const submit = e => {
            setIsOpen(false)
            e.preventDefault();
            const user = {
                  first_name,
                  last_name,
                  email,
                  password,
                  birthday,
            }
            if (userSelected) {
                  console.log("update");
                  axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
                        .then(() => {
                              getUsers()
                              setUserSelected(null)
                              reset();
                        });
            } else {
                  axios.post('https://users-crud1.herokuapp.com/users/', user)
                        .then(() => {
                              getUsers();
                              reset();
                        })
                        .catch(error => console.log(error.response));
            }

      }

      const reset = () => {
            setFirst_name("");
            setLast_name("");
            setEmail("");
            setPassword("");
            setBirthday("");
      }

      const closeModal = () => {
            setIsOpen(false);
      }
      return (
            <div>
                  <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        closeTimeoutMS={200}
                        overlayClassName="modal-background"
                  >
                        <div className='content-form'>
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
                                                <button className='button-submit'><i className="fas fa-upload"></i>  Submit</button>
                                          </div>
                                          <div>
                                                <button className='button-deselect' onClick={() => reset()} type="button"><i className="fas fa-do-not-enter"></i>Deselect</button>
                                          </div>
                                    </div>
                              </form>
                        </div>
                  </Modal>

            </div>
      );
};

export default ModalScreen;