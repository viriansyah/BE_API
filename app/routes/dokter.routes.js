module.exports = app => {
    const dokter = require("../controllers/dokter.controller")
    const r = require("express").Router()

    r.get("/", dokter.findAll)
    r.post("/", dokter.create)

    app.use("/dokter",r)
}