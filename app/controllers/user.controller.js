const db = require("../models")
const User = db.user

exports.create = (req,res)=>{
    req.body.tanggal_lahir=new Date(req.body.tanggal_lahir)
    User.create(req.body)
    .then(()=>res.send({message:"Data Berhasil"}))
    .catch(err=>res.status(500).send({message:err.message}))
}

exports.findAll=(req,res)=>{
    User.find()
    .then(data=>res.send(data))
    .catch(err=>res.status(500).send({message:err.message}))
}

exports.show=(req,res)=>{
    const id = req.params.id

    User.findById(id)
    .then(data=>res.send(data))
    .catch(err=>res.status(500).send({message:err.message}))

}

exports.update=(req,res)=>{
    const id = req.params.id

    req.body.tanggal_lahir=new Date(req.body.tanggal_lahir)

    User.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(404).send({message:"Data Tidak Ada"})
        }
        res.send({message:"Data Berhasil di Update"})
    })
    .catch(err=> res.status(500).send({message:err.message}))
}

exports.delete=(req,res)=>{
    const id = req.params.id

    User.findByIdAndRemove(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:"Tidak Dapat Menghapus Data"})
        }
        res.send({message:"data terhapus"})
    })
    .catch(err=> res.status(500).send({message:err.message}))
}