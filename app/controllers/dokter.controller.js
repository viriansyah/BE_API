const db = require("../models")
const Dokter = db.dokter

exports.create = (req,res)=>{
    // req.body.tanggal_lahir=new Date(req.body.tanggal_lahir)
    Dokter.create(req.body)
    .then(()=>res.send({message:"Data Berhasil"}))
    .catch(err=>res.status(500).send({message:err.message}))
}

exports.findAll=(req,res)=>{
    Dokter.find()
    .then(data=>res.send(data))
    .catch(err=>res.status(500).send({message:err.message}))
}