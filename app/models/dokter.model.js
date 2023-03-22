module.exports = mongoose =>{
    const schema = mongoose.Schema({
        id_dokter:Number,
        no_pegawai:String,
        nama:String,
        jadwal_praktek:String,
        jam_praktek:String,
    },{
        timestamps:true
    }  
    )

    schema.method("toJSON", function(){
        const {__v, _id, ...object}=this.toObject()
        object.id=_id

        return object;
    })

    return mongoose.model("dokter", schema)
}