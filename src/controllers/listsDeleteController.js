const List = require("../models/List");

// Eliminar lista por ID
exports.deleteList = async (req, res) => {
  try {
    const { id } = req.params;
    const list = await List.findByPk(id);

    if (!list) {
      return res.status(404).json({ message: "Lista no encontrada" });
    }

    await list.destroy();
    res.status(200).json({ message: "Lista eliminada exitosamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
