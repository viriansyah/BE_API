module.exports = app => {
    const rsvp = require("../controllers/rsvp.controller")
    const r = require("express").Router()

    r.get("/", rsvp.findAll)
    r.post("/", rsvp.create)

    app.use("/rsvp",r)
}