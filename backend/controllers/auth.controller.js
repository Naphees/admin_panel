import db from '../config/dbConnect.js';

// register constroller
const  registerController = async(req,res) =>{
    try{
            console.log(req.body);
              // 1. all data retrieve from req.body
              const {name, password, email, mobile ,role} = req.body;
              // 2. input validation
              if(!name || !password || !email ||!mobile ||!role){
                     return res.status(400).json({message:`All fields are required`});
              }

              //  check email   exist 
              const [checkEmail] = await db.execute(`SELECT email FROM users WHERE email = ? `,[email]);
              if(checkEmail.length > 0) return res.status(409).json({message:`Email Already exists`})
              // check mobile exist
              const [checkMobile] = await db.execute(`SELECT mobile FROM users WHERE mobile = ? `,[mobile]);
              if(checkMobile.length > 0) return res.status(409).json({message:`Mobile number alredy exists `});

           return  res.status(201).json({message : "User Created!"})
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