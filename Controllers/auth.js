import jwt from 'jsonwebtoken'
import bcrypt, { compare } from 'bcrypt';
import { userModel } from '../models/User.js';
export const Register = async(req,res)=>{
    try{
        console.log(req.body)
        const {username,email,password} = req.body;
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = new userModel({
            username,
            email,
            password: hashedPassword
        })
        const savedUser = await newUser.save();
        return res.status(201).json({message: "Account saved successfully"})
    }
    catch(err){
        res.status(500).json({message: err.message})
        throw err;
    }
}

export const Login = async(req,res)=>{
    const {email,password} = req.body;
    const account = await userModel.findOne({email: email})
    if(!account){
        return res.status(404).json({message: "Invalid Credentials"})
    }
    if(!isPasswordValid){
        return res.status(404).json({message: "Invalid Credentials"})
    }
    const isPasswordValid = await compare(password,account.password)
    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET);
    res.json({token: token});
}



export function authenticateToken(req, res, next) {
    const token = req.header('Authorization');
  
    if (token == null) return res.sendStatus(401);
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
}