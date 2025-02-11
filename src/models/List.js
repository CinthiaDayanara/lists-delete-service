const pool = require('../config/database');

const List = {
    async deleteList(id) {
        try {
            const result = await pool.query('DELETE FROM listas WHERE id = $1 RETURNING *', [id]);
            return result.rows[0]; // Retorna la lista eliminada
        } catch (error) {
            throw error;
        }
    }
};

module.exports = List;
