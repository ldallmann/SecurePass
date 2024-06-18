import React from "react";
// import GlobalStyle from "./styles/global";
// import styled from "styled-components";
// import Form from "./components/Form.js";
// import Grid from "./components/Grid.js";
// import { useEffect, useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

// const Constainer = styled.div`
//   width: 100vw;
//   max-width: 800px;
//   margin-top: 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 10px;
// `;

// const Title = styled.h2``;

function App() {
//   const [users, setUsers] = useState([]);
//   const [onEdit, setOnEdit] = useState(null);

//   const getUsers = async () => {
//     try {
//       const res = await axios.get("http://localhost:8800/");
//       setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
//     } catch (error) {
//       toast.error(error);
//     }
//   };

//   useEffect(() => {
//     getUsers();
//   }, [setUsers])

  return (
    <>
      <Constainer>
        <Title>SecurePass</Title>
        <Form onEdit={onEdit} getUsers={getUsers} setOnEdit={setOnEdit} />
        <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit} />
      </Constainer>
      <ToastContainer position="bottom-left" autoClose={3000} />
      <GlobalStyle />
    </>
  );
}

export default App;
