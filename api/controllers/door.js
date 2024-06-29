import { database } from "../database.js";

export const getDoors = (_, response) => {
    const query = "SELECT * FROM porta ORDER BY Nome";

    database.query(query, (error, data) => {
        if (error) return response.json(error);   

        return response.status(200).json(data);
    });
};

export const addDoor = (request, response) => {
    const query = "";

    const values = [
    ];

    database.query(query, [values], (error) => {
        if (error) return response.json(error);
        
        return response.status(200).json("Usuário criado com sucesso.")
    });
};

export const updateDoor = (request, response) => {
    const query = "";

    const values = [
    ];

    database.query(query, [...values, request.params.userID], (error) => {
        if (error) return response.json(error);
        
        return response.status(200).json("Usuário atualizado com sucesso.")
    });
};

export const deleteDoor = (request, response) => {
    const query = "DELETE FROM usuario WHERE `ID_Usuario` = ?";

    database.query(query, [request.params.userID], (error) => {
        if (error) return response.json(error);
        
        return response.status(200).json("Usuário deletado com sucesso.")
    });
};