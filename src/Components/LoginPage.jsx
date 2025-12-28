import { useState } from "react";
import { useNavigate } from "react-router-dom";

 function LoginPage({setIsAuth}){
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const navigate=useNavigate()
const handleLogin=()=>{
    if(email==="admin@gmail.com" && password==="admin1234"){
        alert("Login sucess");
setIsAuth(true)
navigate("./AdminDashboard")
    }else{
        alert("Wrong email or password")
    }
}
return(
    <div style={{display:"flex", flexDirection:"column",gap:"10px",width:"200px",margin:"100px auto"}}>
        <input placeholder="Enter email" onChange={(e)=> setEmail(e.target.value)}/>
        <input placeholder="Enter password" onChange={(e)=> setPassword(e.target.value)}/>
        <button onClick={handleLogin}>Login</button>
    </div>
)
}
export default LoginPage
