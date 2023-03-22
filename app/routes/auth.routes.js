module.exports = app => {
    const auth = require("../controllers/auth.controller")
    const r = require("express").Router()

    r.post("/login", auth.login)

    app.use("/auth",r)
}