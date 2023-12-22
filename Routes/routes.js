const express = require("express");
const { home, generate } = require("../Controller/qrController");
const qrRoutes = express.Router();

qrRoutes.route("/generate-code")
.get(generate)


module.exports = qrRoutes