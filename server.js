require("dotenv").config();
const express = require("express");
const listsRoutes = require("./src/routes/listsDeleteRoutes");
const sequelize = require("./src/config/database");

const app = express();
app.use(express.json());

app.use("/lists", listsRoutes);

const PORT = process.env.PORT || 5004;
sequelize.sync()
  .then(() => {
    console.log("📦 Base de datos sincronizada");
    app.listen(PORT, () => {
      console.log(`🚀 Lists Delete Service corriendo en el puerto ${PORT}`);
    });
  })
  .catch(error => console.error("❌ Error al sincronizar la base de datos:", error));
