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
    const res = await PostApiFetch('http://localhost:5000/api/admin/login',payloadDta);

    if(res.data.responseStatus === "success"){
      navigateTo("/dashboard/home")
    }else if(res.data.responseStatus === "error"){
     setError(res.data.responseMsg)
    }

  }

  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
            <h1 className="text-center text-[red]">{error}</h1>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input onChange={(e)=>setUserName(e.target.value)}  type="email" label="Email" size="lg" />
            <Input  onChange={(e)=>setPassword(e.target.value)}  type="password" label="Password" size="lg" />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={handleSubmit} variant="gradient" fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?
              <Link to="/auth/sign-up">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SignIn;
