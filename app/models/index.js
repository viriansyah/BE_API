const dbconfig= require("../config/database");
const mongoose= require("mongoose")

module.exports={
    mongoose,
    url:dbconfig.url,
    user:require('./user.model.js')(mongoose),
    rsvp:require('./rsvp.model.js')(mongoose),
    diagnosa:require('./diagnosa.model.js')(mongoose),
    dokter:require('./dokter.model.js')(mongoose)
}