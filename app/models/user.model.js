module.exports = mongoose =>{
    const schema = mongoose.Schema({
        no_ktp:String,
        no_kartu:String,
        nama:String,
        no_handphone:String,
        email:String,
        tgl_lahir:Date,
        alamat:String,
        password:String,
    },{
        timestamps:true
    }  
    )

    schema.method("toJSON", function(){
        const {__v, _id, ...object}=this.toObject()
        object.id=_id

        return object;
    })

    return mongoose.model("user", schema)
}