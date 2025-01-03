const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const apiRoutes = require("./routes/apiRoutes");
const connection = require("./connection");
const { getURLHandler } = require("./controllers/url");

require("dotenv").config();
connection();

const PORT = process.env.PORT || 8000;
const app = express();

/* Middlewares */
app.use(cors());
app.use(express.json());

/* Routes */
app.use("/auth", authRoutes);
app.use("/api", apiRoutes);

app.get("/:id", getURLHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
