module.exports = app => {
    const diagnosa = require("../controllers/diagnosa.controller")
    const r = require("express").Router()

    r.get("/", diagnosa.findAll)
    r.post("/", diagnosa.create)

    app.use("/diagnosa",r)
}