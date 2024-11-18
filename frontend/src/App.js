import React, { useEffect, useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import Access from './pages/Access';
import Home from './pages/Home';
import Profile from './pages/Profile';
import './styles/index.css';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import LoginRegisterForm from './pages/LoginRegisterForm';
import ProtectedRoute from './components/ProtectedRoute.js';
import useIdleTimeout from './hooks/useIdleTimeout';

function App() {
  const [users, setUsers] = useState([]);
  const [usersHome, setUsersHome] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [doors, setDoors] = useState([]);
  const [access, setAccess] = useState([]);
  const [accessTest, setAccessTest] = useState([]);
  const [permission, setPermission] = useState([]);
  const [permissionUser, setPermissionUser] = useState([]);
  const [accessLog, setAccessLog] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  const IdleTimeoutWrapper = ({ children, handleLogout }) => {
    useIdleTimeout(10000, handleLogout);
    return children;
  };

  const reloadAccess = async () => {
    try {
      const response = await axios.get("http://localhost:8800/accessTest/");
      setAccessTest(response.data);
    } catch (error) {
      console.error("Erro ao recarregar acessos:", error);
      toast.error("Erro ao recarregar acessos");
    }
  };

  const reloadUsersHome = async () => {
    try {
      const response = await axios.get("http://localhost:8800/userHome/");
      setUsersHome(response.data);
    } catch (error) {
      console.error("Erro ao recarregar dados dos usuários:", error);
      toast.error("Erro ao recarregar dados dos usuários");
    }
  };

  const fetchData = useCallback(async (userID) => {
    try {
      const [userInfoRes, accessLogRes, permissionsUserRes] = await Promise.all([
        axios.get(`http://localhost:8800/userInfo/${userID}`),
        axios.get(`http://localhost:8800/accessLog/${userID}`),
        axios.get(`http://localhost:8800/permissionUser/${userID}`),
      ]);

      setUserInfo(userInfoRes.data);
      setAccessLog(accessLogRes.data);
      setPermissionUser(permissionsUserRes.data);
    } catch (error) {
      console.error("Erro ao carregar dados do usuário:", error);
      toast.error("Erro ao carregar dados do usuário");
    }
  }, []);

  useEffect(() => {
    reloadUsersHome();
    const fetchDataFunctions = [
      { api: "http://localhost:8800/user/", stateSetter: setUsers, errorMessage: "Erro ao carregar dados dos usuários" },
      { api: "http://localhost:8800/userHome/", stateSetter: setUsersHome, errorMessage: "Erro ao carregar dados dos usuários home" },
      { api: "http://localhost:8800/door/", stateSetter: setDoors, errorMessage: "Erro ao carregar portas" },
      { api: "http://localhost:8800/access/", stateSetter: setAccess, errorMessage: "Erro ao carregar acessos" },
      { api: "http://localhost:8800/accessTest/", stateSetter: setAccessTest, errorMessage: "Erro ao carregar acessos de teste" },
      { api: "http://localhost:8800/permission/", stateSetter: setPermission, errorMessage: "Erro ao carregar permissões" },
    ];

    fetchDataFunctions.forEach(async ({ api, stateSetter, errorMessage }) => {
      try {
        const response = await axios.get(api);
        stateSetter(response.data);
      } catch (error) {
        console.error(errorMessage, error);
        toast.error(errorMessage);
      }
    });
  }, []);

  return (
    <Router>
      <div className="body-container">
        <div className="content-container">
          <IdleTimeoutWrapper handleLogout={handleLogout}>
            <Routes>
              <Route path="/" element={<LoginRegisterForm />} />
              <Route path="/home" element={<ProtectedRoute> <Home usersHome={usersHome} permission={permission} reloadUsersHome={reloadUsersHome} /> </ProtectedRoute>} />
              <Route path="/access" element={<ProtectedRoute> <Access users={users} accessTest={accessTest} doors={doors} reloadAccess={reloadAccess} /> </ProtectedRoute>} />
              <Route path="/profile/:userID" element={<ProtectedRoute> <UserProfileWrapper
                permission={permission}
                accessLog={accessLog}
                userInfo={userInfo}
                permissionUser={permissionUser}
                fetchData={fetchData}
                reloadUsersHome={reloadUsersHome}
                setUserInfo={setUserInfo}
              /> </ProtectedRoute>} />
            </Routes>
          </IdleTimeoutWrapper>
        </div>
      </div>
      <ToastContainer />
    </Router>
  );
}

function UserProfileWrapper({ permission, accessLog, userInfo, permissionUser, fetchData, setUserInfo, reloadUsersHome }) {
  const { userID } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUserInfo(null);
    setLoading(true);

    fetchData(userID).then(() => {
      setLoading(false);
    });
  }, [userID]);

  if (loading || !userInfo) {
    return <div>Carregando...</div>;
  }

  return (
    <Profile
      permission={permission}
      permissionUser={permissionUser}
      accessLog={accessLog}
      userInfo={userInfo}
      reloadUsersHome={reloadUsersHome}
    />
  );
}

export default App;