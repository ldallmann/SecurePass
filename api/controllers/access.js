import { database } from "../database.js";

export const getAccess = (_, response) => {
    const query = "SELECT * FROM registroacesso";

    database.query(query, (error, data) => {
        if (error) return response.json(error);   

        return response.status(200).json(data);
    });
};

export const getAccessTest = (_, response) => {
    const query = "SELECT u.Nome_Usuario, p.Nome, r.Data_Hora_Acesso, r.Status FROM registroacesso r, usuario u, porta p WHERE r.Usuario_ID_Usuario = u.ID_Usuario AND r.Porta_ID_Porta = p.ID_Porta ORDER BY r.Data_Hora_Acesso";

    database.query(query, (error, data) => {
        if (error) return response.json(error);   

        return response.status(200).json(data);
    });
};

export const getAccessLog = (request, response) => {
    const query = "SELECT p.Nome, r.Data_Hora_Acesso, r.Status FROM registroacesso r, porta p, usuario u WHERE r.Porta_ID_Porta = p.ID_Porta AND r.Usuario_ID_Usuario = u.ID_Usuario AND u.ID_Usuario = ?";

    const userID = request.params.userID;

    database.query(query, [userID], (error, data) => {
        if (error) return response.json(error);   

        return response.status(200).json(data);
    });
};


export const addAccess = (request, response) => {
    const query = "";

    const values = [
    ];

    database.query(query, [values], (error) => {
        if (error) return response.json(error);
        
        return response.status(200).json("Usuário criado com sucesso.")
    });
};

export const updateAccess = (request, response) => {
    const query = "";

    const values = [
    ];

    database.query(query, [...values, request.params.userID], (error) => {
        if (error) return response.json(error);
        
        return response.status(200).json("Usuário atualizado com sucesso.")
    });
};

export const deleteAccess = (request, response) => {
    const query = "";

    database.query(query, [request.params.userID], (error) => {
        if (error) return response.json(error);
        
        return response.status(200).json("Usuário deletado com sucesso.")
    });
};