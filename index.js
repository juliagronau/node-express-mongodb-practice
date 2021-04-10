import express from "express";
import "dotenv/config.js";
import users from "./routes/users.js";

const port = process.env.PORT || 3000;
const app = express();
app.use("/users", users);

app.listen(port, () => console.log(`Server running in port ${port}`));
