const express = require("express")
const cors = require("cors");
const authRoutes = require("./routes/auth")
const connection=require("./connection")

require("dotenv").config();
connection();

const PORT = process.env.PORT || 8000;
const app = express();

/* Middlewares */
app.use(cors())
app.use(express.json())

/* Routes */
app.use("/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})