const db = require("../models")
const jwt = require('jsonwebtoken');
const User = db.user

exports.login = async (req, res)=>{
    const {email, password}=req.body
    
    const user = await User.findOne({ email });

    // return res.status(200).json({message:user});

    if (!user) {
      return res.status(400).json({ message: 'Invalid email' });
    }

    
  
    if (user.password !== password) {
      return res.status(400).json({ message: 'password' });
    }

    const token = jwt.sign({ userId: user._id, name: user.nama }, process.env.JWT_SECRET);
      
    res.json({ token });
    
    return res.status(200).json({ message: 'Login successful',id:user.id });

}