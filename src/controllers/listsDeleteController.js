const List = require('../models/List');

const deleteList = async (req, res) => {
    const { id } = req.params; // Obtener el ID desde la URL

    try {
        const deletedList = await List.deleteList(id);

        if (!deletedList) {
            return res.status(404).json({ message: "❌ Lista no encontrada" });
        }

        res.json({ message: "✅ Lista eliminada correctamente", deletedList });
    } catch (error) {
        res.status(500).json({ message: "❌ Error al eliminar la lista", error: error.message });
    }
};

module.exports = { deleteList };
