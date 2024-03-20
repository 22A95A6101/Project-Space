const LoginModel = require('../models/login.js');
// const LoginData = async(req,res,next)=>{
//     console.log("add api")
//     const {username,password,type}=req.body;
//     let existingUser;
//     try{
//         let success=false;
//         const {username,password,type} = req.body;
//         existingUser = await findOne({username,password,type});
//         console.log(req.body.type);  
//         if(!data){
//             res.send({success});    
//         }
//         else{
//             success=true;
//             res.send({data,success});
//         }  
//     }catch(err){
//         return console.log(err)
//     }
//     if(existingUser){
//         return res.status(400).json({mesage:"User Already exist"})
//     }
//     const login = new LoginData({
//         username,password,type
//     }) 

//     try{
//         await username.save()
//         .then((data)=>{
//             console.log(data)
//             return res.send(200).send(data)
//         })
//     }catch(err){
//         return res.status(400);
//     }
// }


const Login = async(req,res)=>{
    const {username,password,type} = req.body;
    console.log(username,password,type)

    const details = await LoginModel.findOne({username:username,type:type,password:password})
    console.log(details)
    if(details){
        return res.status(200).send({login:"login Successs",success:true})
    }
    else
    {
        return res.status(404).send({login:'login failed',success:false})
    }
}

module.exports = Login;
