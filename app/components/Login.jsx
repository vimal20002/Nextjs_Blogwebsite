"use client"
import { useContext, useState } from "react"
import Input from "./Input"
import Button from "./Button"
import { LoginContext, UidContext } from "@app/globalContext"
import { useRouter } from "next/navigation";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {setIsLoggedIn} = useContext(LoginContext)
    const {setUid} = useContext(UidContext);
    const router = useRouter()


    const handleSubmit = async(e)=>{
        e.preventDefault();
        const res = await fetch('/api/auth/login', {
          method:'POST',
          body:JSON.stringify({email,password})
        })
        const data = await res.json();
        localStorage.setItem('token', JSON.stringify(data?.token));
        sessionStorage.setItem('name',JSON.stringify(data?.name))
        sessionStorage.setItem('uid',JSON.stringify(data?.uid))
        setUid(data?.uid)
        setIsLoggedIn(true)
        router.push('/')

    }
  return (
    <div className="main login">
        <form className="form">
        <Input type="email" name="email" placeValue="Your Email" onChangeFun={setEmail}/>
        <Input type="password" name="password" placeValue="Password" onChangeFun={setPassword}/>
        <Button value="Login" handleSubmit={handleSubmit}/>
        </form>
    </div>
  )
}

export default Login