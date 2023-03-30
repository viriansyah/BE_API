module.exports = app => {
    const auth = require("../controllers/auth.controller")
    const r = require("express").Router()

    r.post("/login", auth.login)
    // r.get("/login", auth.token)

    app.use("/auth",r)
}