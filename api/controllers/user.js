import { database } from "../database.js";

export const getUsers = (_, response) => { // _ onde seria o Request, pois é um GET, não precisamos enviar nada
    const query = "SELECT * FROM users";

    database.query(query, (error, data) => {
        if (error) return response.json(error);

        return response.status(200).json(data);
    });
}