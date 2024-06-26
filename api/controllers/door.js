import { database } from "../database.js";

export const getDoors = (_, response) => {
    const query = "SELECT * FROM porta ORDER BY Nome";

    database.query(query, (error, data) => {
        if (error) return response.json(error);   

        return response.status(200).json(data);
    });
};

export const addDoor = (request, response) => {
    const query = "INSERT INTO usuario SET(`Nome_Usuario`, `Email`, `Telefone`, `Permissao`) VALUES(?)";

    const values = [
        request.body.Nome_Usuario,
        request.body.Email,
        request.body.Telefone,
        request.body.Permissao
    ];

    database.query(query, [values], (error) => {
        if (error) return response.json(error);
        
        return response.status(200).json("Usuário criado com sucesso.")
    });
};

export const updateDoor = (request, response) => {
    const query = "UPDATE usuario SET `Nome_Usuario` = ?, `Email` = ?, `Telefone` = ?, `Permissao` = ? WHERE `ID_Usuario` = ?";

    const values = [
        request.body.Nome_Usuario,
        request.body.Email,
        request.body.Telefone,
        request.body.Permissao
    ];

    database.query(query, [...values, request.params.ID_Usuario], (error) => {
        if (error) return response.json(error);
        
        return response.status(200).json("Usuário atualizado com sucesso.")
    });
};

export const deleteDoor = (request, response) => {
    const query = "DELETE FROM usuario WHERE `ID_Usuario` = ?";

    database.query(query, [request.params.ID_Usuario], (error) => {
        if (error) return response.json(error);
        
        return response.status(200).json("Usuário deletado com sucesso.")
    });
};