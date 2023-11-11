import { Link, useNavigate } from "react-router-dom";
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
import { PostApiFetch } from "@/common/postapi";

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
    const res = await PostApiFetch('https://surveybackend-cjev.onrender.com/api/admin/login',payloadDta);

    if(res.data.responseStatus === "success"){
      navigateTo("/tables")
    }else if(res.data.responseStatus === "error"){
     setError(res.data.responseMsg)
    }

  }

  return (
    <>
      
      <div className="absolute inset-0 z-0 h-full w-full bg-[#f2f2f2]" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[40rem] -translate-y-2/4 -translate-x-2/4">
        
          <CardBody className="flex flex-col gap-4">
            <Input onChange={(e)=>setUserName(e.target.value)}  type="email" label="युजरचे नाव" size="xl" />
            <Input  onChange={(e)=>setPassword(e.target.value)}  type="password" label="पासवर्ड" size="xl" />
           
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={handleSubmit} variant="gradient" fullWidth>
              Sign In
            </Button>
           
            <h1 className="text-center text-[red] mt-3">{error}</h1>
          </CardFooter>
        </Card>
      
      </div>
    </>
  );
}

export default SignIn;
