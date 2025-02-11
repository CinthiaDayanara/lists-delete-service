require("dotenv").config();
const express = require("express");
const listRoutes = require("../routes/listsRoutes");

const app = express();
app.use(express.json());

app.use("/api", listRoutes);

const PORT = process.env.PORT || 5003;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});
