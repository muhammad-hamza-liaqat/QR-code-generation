const express = require("express");
const qrRoutes = require("./Routes/routes");
const app = express();
require("dotenv").config();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api", qrRoutes);


app.listen(process.env.PORT, () => {
  console.log(`server running at http://localhost:${process.env.PORT}/`);
});
