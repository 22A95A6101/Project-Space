import {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import About from "./About";
const Userform=()=>{
    const[formdata,setFormdata]=useState({
        'username':'',
        'password':'',
        'email':''
        
    })
    const handlesubmit=(e)=>{
        // const Inputfields = new FormData()
        // Inputfields.append("username",formdata.username)
        // Inputfields.append("password",formdata.password)
        // Inputfields.append("email",formdata.email)
        e.preventDefault();
        axios.post('http://localhost:4000/login',formdata).then((result)=>{console.log(result)
        if(result.status===200){
            console.log(formdata)

        }
    })
    .catch((err)=>{
        console.error("error:",err);
    });
   }
    return(
        <>
        <form onSubmit={handlesubmit}>
            <label>User Name</label>
            <input type="text" name="username" required={true} onChange={(e)=>setFormdata({...formdata,username:e.target.value})}/>
            <br/>
            <label>Password</label>
            <input type="password" name="password" required={true} onChange={(e)=>setFormdata({...formdata,password:e.target.value})}/>
            <br/>
            <label>Email:</label>
            <input type="text" name="email" onChange={(e)=>setFormdata({...formdata,email:e.target.value})}></input>
            <br/>
            <Link to={'/home'}><input type="submit" value="submit"/></Link>
            
        </form>
        <About/>
        </>
    )
}
export default Userform;