// import axios from "axios";
// import React, { useEffect, useRef } from "react";
// import styled from "styled-components";
// import { toast } from "react-toastify";

// const FormContainer = styled.form`
//     display: flex;
//     align-items: flex-end;
//     gap: 10px;
//     flex-wrap: wrap;
//     background-color: #fff;
//     padding: 20px;
//     box-shadow: 0px 0px 5px #ccc;
//     border-radius: 5px;
// `;

// const InputArea = styled.div`
//     display: flex;
//     flex-direction: column;
// `;

// const Input = styled.input`
//     width: 120px;
//     padding: 0 10px;
//     border: 1px solid #bbb;
//     border-radius: 5px;
//     height: 40px;
// `;

// const Label = styled.label``;

// const Button = styled.button`
//     padding: 10px;
//     cursor: pointer;
//     border-radius: 5px;
//     border: 0;
//     background-color: #2c73d2;
//     color: white;
//     height: 42px;
// `;

// const Form = ({ getUsers, onEdit, setOnEdit }) => {
//     const ref = useRef();

//     useEffect(() => {
//         if (onEdit) {
//             const user = ref.current;

//             user.Nome_Usuario.value = onEdit.Nome_Usuario;
//             user.Email.value = onEdit.Email;
//             user.Telefone.value = onEdit.Telefone;
//             user.Permissao.value = onEdit.Permissao;
//         }
//     }, [onEdit]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const user = ref.current;

//         if (
//             !user.Nome_Usuario.value ||
//             !user.Email.value ||
//             !user.Telefone.value ||
//             !user.Permissao.value
//         ) {
//             return toast.warn("Preencha todos os campos!")
//         }

//         if (onEdit) {
//             await axios
//                 .put("http://localhost:8800/" + onEdit.ID_Usuario, {
//                     Nome_Usuario: user.Nome_Usuario.value,
//                     Email: user.Email.value,
//                     Telefone: user.Telefone.value,
//                     Permissao: user.Permissao.value
//                 })
//                 .then(({ data }) => toast.success(data))
//                 .catch(({ data }) => toast.error(data));
//         } else {
//             await axios
//                 .post("http://localhost:8800/", {
//                     Nome_Usuario: user.Nome_Usuario.value,
//                     Email: user.Email.value,
//                     Telefone: user.Telefone.value,
//                     Permissao: user.Permissao.value
//                 })
//                 .then(({ data }) => toast.success(data))
//                 .catch(({ data }) => toast.error(data));
//         }

//         user.Nome_Usuario.value = "";
//         user.Email.value = "";
//         user.Telefone.value = "";
//         user.Permissao.value = "";

//         setOnEdit(null);
//         getUsers();
//     };

//     return (
//         <FormContainer ref={ref} onSubmit={handleSubmit}>
//             <InputArea>
//                 <Label>Nome</Label>
//                 <Input name="Nome_Usuario" />
//             </InputArea>
//             <InputArea>
//                 <Label>E-mail</Label>
//                 <Input name="Email" type="email" />
//             </InputArea>
//             <InputArea>
//                 <Label>Telefone</Label>
//                 <Input name="Telefone" />
//             </InputArea>
//             <InputArea>
//                 <Label>Permissão</Label>
//                 <Input name="Permissao" />
//             </InputArea>

//             <Button type="submit">Salvar</Button>
//         </FormContainer>
//     );
// };

// export default Form;