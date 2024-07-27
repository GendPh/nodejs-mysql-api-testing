const express = require("express");
const cors = require("cors");
const app = express();

require('dotenv').config()

app.use(cors()); 

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const postsRouter = require('./routes/posts.router')
app.use("/api/v1/posts", postsRouter)

const authRouter = require('./routes/auth.router')
app.use("/api/v1/auth", authRouter)

const projectsRouter = require('./routes/projects.router')
app.use("/api/v1/projects", projectsRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server is running....")
})