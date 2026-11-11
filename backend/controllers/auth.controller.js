

// register constroller
const  registerController = async(req,res) =>{
    try{
            console.log(req.body);
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