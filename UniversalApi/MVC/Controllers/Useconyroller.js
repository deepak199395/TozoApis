const UserModel= require("../Models/Usermodel")

const createusercontroller=async(req,res)=>{
   try {
    const { name, lastname, email, password, phone, role } = req.body;
     const createuser= await UserModel.create({
        name,
        lastname,
        email,
        password,
        phone,
        role
     })
     res.status(201).json({ message: "User created successfully", createuser })

   } catch (error) {
    res.status(500).json({ message: "Error creating user", error })
    
   }
}
module.exports={createusercontroller};  