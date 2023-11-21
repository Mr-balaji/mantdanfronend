import { Link, json, useNavigate } from "react-router-dom";
// import logo from '../../public/GRAMSEVA.png';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import axios from "axios";
import { InputText } from "primereact/inputtext";

export function SignIn() {

  const [userName,setUserName] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("")

  const navigateTo = useNavigate();

  const  handleSubmit = async(e) =>{
    e.preventDefault();
    const payloadDta ={
      "email":userName,
      "password":password,
    }
    const res = await axios.post('https://surveybackend-cjev.onrender.com/api/admin/login',payloadDta);
    console.log("payloadDta",res);
    if(res.data.responseStatus === "success"){
      navigateTo("/tables")
      localStorage.setItem("token",JSON.stringify(res.data.responseData.token))
    }else if(res.data.responseStatus === "error"){
     setError(res.data.responseMsg)
    }

  }

  return (
    <>
      
      {/* <div className=" inset-0 z-0 h-full w-[30%]  bg-[#f2f2f2] " />
      <div className=" mx-auto p-4">
        <Card className=" top-2/4 left-2/4 w-full  -translate-y-2/4 -translate-x-2/4">
        
          <CardBody className="flex flex-col gap-4 w-[30%] m-auto">
            <Input onChange={(e)=>setUserName(e.target.value)}  type="email" label="युजरचे नाव" size="xl" />
            <Input  onChange={(e)=>setPassword(e.target.value)}  type="password" label="पासवर्ड" size="xl" />
           
          </CardBody>
          <CardFooter className="pt-0 bg-[green]">
            <Button onClick={handleSubmit} variant="gradient" fullWidth>
              Sign In
            </Button>
           
            <h1 className="text-center text-[red] mt-3">{error}</h1>
          </CardFooter>
        </Card>
      
      </div> */}


<div class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
           Login
        </h2>
        {/* <Image src={logo}/> */}
   
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form class="" action="#" method="POST">
                <div class="mb-4">
                    <label for="email" class="block text-lg font-semibold text-gray-700">
                    युजरचे नाव
                    </label>
                    <div class="">
                        <input id="email" name="email" onChange={(e)=>setUserName(e.target.value)} value={userName} type="email" autocomplete="email" required
                            class="appearance-none rounded-md relative block w-full p-5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg"
                            placeholder="Enter your email address" />
                    </div>
                </div>

                <div>
                    <label for="password" class="block text-lg font-semibold text-gray-700">
                    पासवर्ड
                    </label>
                    <div class="">
                        <input id="password" name="password" onChange={(e)=>setPassword(e.target.value)} value={password} type="password" autocomplete="current-password" required
                            class="appearance-none rounded-md relative block w-full p-5 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-lg"
                            placeholder="Enter your password" />
                    </div>
                </div>

                {/* <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input id="remember_me" name="remember_me" type="checkbox"
                            class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                        <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                            Remember me
                        </label>
                    </div>

                    <div class="text-sm">
                        <a href="#" class="font-medium text-blue-600 hover:text-blue-500">
                            Forgot your password?
                        </a>
                    </div>
                </div> */}

                <div className="mt-10">
                    <button type="submit" onClick={handleSubmit}
                        class="group relative w-full flex justify-center items-center p-5 border border-transparent text-xl font-bold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      
                       प्रवेश करा
                    </button>
                </div>
            </form>
            {/* <div class="mt-6">

                <div class="relative">
                    <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-gray-300"></div>
                    </div>
                    <div class="relative flex justify-center text-sm">
                        <span class="px-2 bg-gray-100 text-gray-500">
                            Or continue with
                        </span>
                    </div>
                </div>

                <div class="mt-6 grid grid-cols-3 gap-3">
                    <div>
                        <a href="#"
                            class="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                            <img class="h-5 w-5" src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                                alt=""/>
                        </a>
                    </div>
                    <div>
                        <a href="#"
                            class="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                            <img class="h-5 w-5" src="https://www.svgrepo.com/show/513008/twitter-154.svg"
                                alt="" />
                        </a>
                    </div>
                    <div>
                        <a href="#"
                            class="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                            <img class="h-6 w-6" src="https://www.svgrepo.com/show/506498/google.svg"
                                alt="" />
                        </a>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
</div>



    </>
  );
}

export default SignIn;
