const db = require("../models")
const Rsvp = db.rsvp

exports.create = (req,res)=>{
    req.body.tgl_periksa=new Date(req.body.tgl_periksa)
    Rsvp.create(req.body)
    .then(()=>res.send({message:"Data Berhasil"}))
    .catch(err=>res.status(500).send({message:err.message}))
}

exports.findAll=(req,res)=>{
    Rsvp.find()
    .then(data=>res.send(data))
    .catch(err=>res.status(500).send({message:err.message}))
}