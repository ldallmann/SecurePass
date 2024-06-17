import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 800px;
    margin 20px auto;
    word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;

    @media (max-width: 500px) {
        ${(props) => props.onlyWeb && "display: none"}
    }
 `;

 export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width : "auto")};

    @media (max-width: 500px) {
        ${(props) => props.onlyWeb && "display: none"}
    }
`;

const Grid = ({ users, setUsers, setOnEdit }) => {
    const handleEdit = (item) => {
        setOnEdit(item);
    };

    const handleDelete = async (ID_Usuario) => {
        await axios
            .delete("http://localhost:8800/" + ID_Usuario)
            .then(({ data }) => {
                const newArray = users.filter((user) => user.ID_Usuario !== ID_Usuario);

                setUsers(newArray);
                toast.success(data);
            })
            .catch(({ data}) => toast.error(data));
    };

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>E-mail</Th>
                    <Th onlyWeb>Telefone</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {users.map((item, i) => (                    
                    <Tr key={i}>
                        <Td width="30%">{item.Nome_Usuario}</Td>
                        <Td width="30%">{item.Email}</Td>
                        <Td width="20%" onlyWeb>{item.Telefone}</Td>
                        <Td alignCenter width="5%" onlyWeb>
                            <FaEdit onClick={() => handleEdit(item)} />
                        </Td>
                        <Td alignCenter width="5%" onlyWeb>
                            <FaTrash onClick={() => handleDelete(item.ID_Usuario)}/>
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};

export default Grid;