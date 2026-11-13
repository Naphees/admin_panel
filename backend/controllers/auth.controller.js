import db from '../config/dbConnect.js';
import bcrypt from 'bcryptjs';

// register constroller
const  registerController = async(req,res) =>{
    try{
            
              // 1. all data retrieve from req.body
              const {name, password, email, mobile ,role} = req.body;
              // 2. input validation
              if(!name || !password || !email ||!mobile ||!role){
                     return res.status(400).json({message:`All fields are required`});
              }
              // password validation
              if(password.length < 4) return res.status(400).json({message:`Password must 4 Characters`})
              // mobile validation
             
              // Email validation

              // role validation 
              const allowRole =['user'];
              if(!allowRole.includes(role)) return res.status(400).json({message:`Role Not Allow ${role}`}) ;   
              //  check email   exist 
              const [checkEmail] = await db.execute(`SELECT email FROM users WHERE email = ? `,[email]);
              if(checkEmail.length > 0) return res.status(409).json({message:`Email Already exists`})
              // check mobile exist
              const [checkMobile] = await db.execute(`SELECT mobile FROM users WHERE mobile = ? `,[mobile]);
              if(checkMobile.length > 0) return res.status(409).json({message:`Mobile number alredy exists `});

              // hashed password now
              const hashedPassword = await bcrypt.hash(password, 10);
              
              // now, register new user
              const [user] = await db.execute(`
                            INSERT INTO users(name, password,email ,role , mobile)  VALUES(?,?,?,?,?) 
                     `,[name,hashedPassword,email,role,mobile]);
       
       
              return  res.status(201).json({message : "User Registered Successfully!"})
    }catch(error){
           return  res.status(500).json({message:error.message})
    }
}

// login controller
const loginController = async(req,res) =>{
       try{
           console.log(req.body); 
           return res.status(200).json({message:"User Login Successfully"})
       }catch(error){
              return res.status(500).json({message:error.message});
       }
}

// logout controller
const logoutController = async(req, res) =>{
       try{
            return res.status(200).json({message:"User logout Successfully"})          
       }catch(error){
              return res.status(500).json({message:error.message});
       }
}

// forget password controller
const forgetPasswordController = async(req,res)=>{
       try{
              return res.status(200).json({message:"Forget Passaword "});
       }catch(error){
              return res.status(500).json({message:error.message});
       }
}

// reset password controller
const resetPasswordController = async(req,res)=>{
       try{
              return res.status(200).json({message:"Password Reset Successfully"});
       }catch(error){
              return res.status(500).json({message:error.message})
       }
}

export default{
        loginController,
        registerController,
        logoutController,        
        forgetPasswordController,
        resetPasswordController,
       };