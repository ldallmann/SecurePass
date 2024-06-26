import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Access from './pages/Access';
import Home from './pages/Home';
import Profile from './pages/Profile';
import './styles/index.css';
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function App() {
   const [users, setUsers] = useState([]);
   const [usersHome, setUsersHome] = useState([]);
   const [doors, setDoors] = useState([]);
   const [access, setAccess] = useState([]);
   const [accessTest, setAccessTest] = useState([]);
   const [permission, setPermission] = useState([]);
   const [permissionUser, setPermissionUser] = useState([]);
   const [accessLog, setAccessLog] = useState([]);   
   const [onEdit, setOnEdit] = useState(null);

   const getUsers = async () => {
     try {
       const res = await axios.get("http://localhost:8800/user/");
       setUsers(res.data);
     } catch (error) {
       toast.error(error);
     }
   };

   const getUsersHome = async () => {
     try {
       const res = await axios.get("http://localhost:8800/userHome/");
       setUsersHome(res.data);
     } catch (error) {
       toast.error(error);
     }
   };

   const getDoors = async () => {
    try {
      const res = await axios.get("http://localhost:8800/door/");
      setDoors(res.data);
    } catch (error) {
      toast.error(error);
    }
  };

  const getAccess = async () => {
    try {
      const res = await axios.get("http://localhost:8800/access/");
      setAccess(res.data);
    } catch (error) {
      toast.error(error);
    }
  };

  const getAccessTest = async () => {
    try {
      const res = await axios.get("http://localhost:8800/accessTest/");
      setAccessTest(res.data);
    } catch (error) {
      toast.error(error);
    }
  };

  const getAccessLog = async () => {
    try {
      const res = await axios.get("http://localhost:8800/accessLog/1"); // Passar ID
      setAccessLog(res.data);
    } catch (error) {
      toast.error(error);
    }
  };

  const getPermission = async () => {
    try {
      const res = await axios.get("http://localhost:8800/permission/");
      setPermission(res.data);
    } catch (error) {
      toast.error(error);
    }
  };

  const getPermissionsUser = async () => {
    try {
      const res = await axios.get("http://localhost:8800/permissionUser/1"); // Passar ID
      setPermissionUser(res.data);
    } catch (error) {
      toast.error(error);
    }
  };

   useEffect(() => {
     getUsers();
     getUsersHome();
     getDoors();
     getAccess();
     getAccessTest();
     getAccessLog();
     getPermission();
     getPermissionsUser();
   }, [setUsers, setUsersHome, setDoors, setAccess, setAccessTest, setPermission, setPermissionUser, setAccessLog]);

  return (
    <Router>
      <div className="body-container">
        <Header/>

        <div className="content-container">
          <Routes>
            <Route path="*" element={<Home usersHome={usersHome} />}/>
            <Route path="/access" element={<Access users={users} doors={doors} accessTest={accessTest} />}/>
            <Route path="/profile" element={<Profile permission={permission} permissionUser={permissionUser} accessLog={accessLog}/>}/>
          </Routes>
        </div>

        <ToastContainer position="bottom-left" autoClose={3000} />
      </div>
    </Router>
  );
}

export default App;
