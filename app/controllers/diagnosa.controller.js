const db = require("../models")
const Diagnosa = db.diagnosa

exports.create = (req,res)=>{
    req.body.tgl_periksa=new Date(req.body.tgl_periksa)
    Diagnosa.create(req.body)
    .then(()=>res.send({message:"Data Berhasil"}))
    .catch(err=>res.status(500).send({message:err.message}))
}

exports.findAll=(req,res)=>{
    Diagnosa.find()
    .then(data=>res.send(data))
    .catch(err=>res.status(500).send({message:err.message}))
}