import React, { useState } from 'react'
import { PostApiFetch } from '../common/postapi';
import { getApiFetch } from '../common/getapiFeatch';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {

  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");


  const navigateTo = useNavigate();

  const  handleSubmit = async(e) =>{
    e.preventDefault();
    const payloadDta ={
      "email":userName,
      "password":password,
    }
    const res = await PostApiFetch('http://localhost:5000/api/admin/login',payloadDta);

    console.log("res",res);
    if(res.data.responseStatus === "success"){
      navigateTo("/dashboard")
    }else if(res.data.responseStatus === "error"){

    }

  }


  return (
    <div>
     <div class="container">
     <div class="overlay">
<form>
   <div class="con">
   <header class="head-form">
      <h2>Log In</h2>
      <p>login here using your username and password</p>
   </header>
   <br></br>
   <div class="field-set">

         <span class="input-item">
           <i class="fa fa-user-circle"></i>
         </span>
         <input onChange={(e)=>setUserName(e.target.value)} class="form-input" id="txt-input" type="text" placeholder="@UserName" required />

      <br></br>


      <span class="input-item">
        <i class="fa fa-key"></i>
       </span>
      <input onChange={(e)=>setPassword(e.target.value)} class="form-input" type="password" placeholder="Password" id="pwd"  name="password" required />

      <br></br>

      <button class="log-in" onClick={handleSubmit}> Log In </button>
   </div>

   <div class="other">
      <button class="btn submits frgt-pass">Forgot Password</button>
      {/* <button class="btn submits sign-up">Sign Up
      <i class="fa fa-user-plus" aria-hidden="true"></i>
      </button> */}
   </div>

  </div>

</form>
</div>
</div>
    </div>

  )
}

export default Login
