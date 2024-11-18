import { database } from "../database.js";

export const getPermissions = (_, response) => {
    try {
        const query = "SELECT * FROM Permissoes ORDER BY Cargo";

        database.query(query, (error, data) => {
            if (error) {
                console.error("Erro ao buscar permissões:", error);
                return response.status(500).json({ error: "Erro ao buscar permissões." });
            }

            return response.status(200).json(data);
        });
    } catch (error) {
        console.error("Erro ao buscar permissões:", error);
        response.status(500).json({ error: "Erro ao buscar permissões." });
    }
};

export const getPermissionsUser = (request, response) => {
    try {
        const query = "SELECT r.ID_Porta, r.Nome FROM usuario u, Permissoes p, porta r, Permissoes_has_Porta pr WHERE p.ID_Permissoes = u.Permissoes_ID_Permissoes AND pr.Permissoes_ID_Permissoes = p.ID_Permissoes AND pr.Porta_ID_Porta = r.ID_Porta AND u.ID_Usuario = ?";

        const userID = request.params.userID;

        database.query(query, [userID], (error, data) => {
            if (error) {
                console.error(`Erro ao buscar permissões do usuário com ID ${userID}:`, error);
                return response.status(500).json({ error: "Erro ao buscar permissões do usuário." });
            }

            return response.status(200).json(data);
        });
    } catch (error) {
        console.error("Erro ao buscar permissões do usuário:", error);
        response.status(500).json({ error: "Erro ao buscar permissões do usuário." });
    }
};