module.exports = mongoose =>{
    const schema = mongoose.Schema({
        no_kartu:String,
        nama:String,
        tgl_periksa:Date,
        dokter:String,
    },{
        timestamps:true
    }  
    )

    schema.method("toJSON", function(){
        const {__v, _id, ...object}=this.toObject()
        object.id=_id

        return object;
    })

    return mongoose.model("rsvp", schema)
}