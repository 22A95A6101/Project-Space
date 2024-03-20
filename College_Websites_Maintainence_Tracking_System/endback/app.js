const emailRoutes=require('./src/routes/emailRoutes.js');
const express = require("express");
const mongoose =require("mongoose");
const Email = require("./src/models/email.js");
const ResolvedIssue= require("./src/models/resolved.js");
const devRoutes=require('./src/routes/devRoutes.js');
const routes = require('./src/routes/routes.js')
// const InitiateMongoServer = require("./src/config/db");
mongoose.connect("mongodb+srv://admin:kishorereddy@cluster0.lw62znv.mongodb.net/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.log("Error connecting to MongoDB:", error);
});



const bodyParser=require("body-parser");
const app=express();
const LoginRouter = require("./src/routes/userRouter")
const PORT = process.env.PORT || 4000;
app.use(bodyParser.json());
const cors =require("cors");
const { default: emailSchema } = require('./src/models/email.js');
const { default: router } = require('./src/routes/routes.js');
app.use(cors());
// InitiateMongoServer();
app.use("/", LoginRouter);
app.listen(PORT, (req, res) => {
    console.log(`Server Started at PORT ${PORT}`);
});
const imageUrls = [
  'https://www.thecodemind.io/app/images/background/dr_c.jpg',
  'https://www.thecodemind.io/app/images/background/owl_coder3.0.png',
];
app.get('/images', (req, res) => {
  res.json(imageUrls);
});
app.use('/',emailRoutes);
app.use('/',devRoutes);
app.use('/',routes);
app.get('/getemaildata',async(req,res,next)=>{
  let emails;
  try{
      emails= await Email.find();
      if(emails){
        return res.status(200).send({'emails':emails})
      }
  }catch(err){
      console.log(err)
  }
  if(!emails){
      return res.status(404).json({message:"No email data found"})
  }
  return res.status(200).json({emails})
  // let result=student.find()
  // return res.send({"students":result})
})

app.get('/ceodata',async(req,res,next)=>{
  let emails;
  try{
      emails= await ResolvedIssue.find();
      if(emails){
        return res.status(200).send({'emails':emails})
      }
  }catch(err){
      console.log(err)
  }
  if(!emails){
      return res.status(404).json({message:"No email data found"})
  }
  return res.status(200).json({emails})
  // let result=student.find()
  // return res.send({"students":result})
})