import { database } from "../database.js";

export const getPermissions = (_, response) => {
    const query = "SELECT * FROM permissoes ORDER BY Cargo";

    database.query(query, (error, data) => {
        if (error) return response.json(error);   

        return response.status(200).json(data);
    });
};

export const getPermissionsUser = (request, response) => {
    const query = "SELECT r.ID_Porta, r.Nome FROM usuario u, permissoes p, porta r, Permissoes_has_Porta pr WHERE p.ID_Permissao = u.Permissoes_ID_Permissao AND pr.Permissoes_ID_Permissao = p.ID_Permissao AND pr.Porta_ID_Porta = r.ID_Porta AND u.ID_Usuario = ?"

    const userID = request.params.userID;

    database.query(query, [userID], (error, data) => {
        if (error) return response.json(error);   

        return response.status(200).json(data);
    });
};

export const addPermission = (request, response) => {
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

export const updatePermission = (request, response) => {
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

export const deletePermission = (request, response) => {
    const query = "DELETE FROM usuario WHERE `ID_Usuario` = ?";

    database.query(query, [request.params.ID_Usuario], (error) => {
        if (error) return response.json(error);
        
        return response.status(200).json("Usuário deletado com sucesso.")
    });
};