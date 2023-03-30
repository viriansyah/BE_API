const db = require("../models")
const User = db.user

const jwt = require('jsonwebtoken');

require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET

exports.login = async (req, res)=>{
    const {email, password}=req.body
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid email' });
    }

    if (user.password!==password) {
      return res.status(400).json({ message: 'password' });
    }

    if(user){
      const token = jwt.sign({ email: user.email }, JWT_SECRET, function(err,token){
        return res.status(200).json({ message: 'Login successful',id:user.id ,token:token, JWT_SECRET:JWT_SECRET});
      });  
    }
}

