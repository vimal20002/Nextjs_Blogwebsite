"use client"
import { useState } from "react"
import Input from "./Input"
import Button from "./Button"
import { useRouter } from "next/navigation";

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")
    const router = useRouter()

    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(password === cpassword){
        const formData = {name,email,password}
        const res = await fetch("./api/auth/register",{
          method:'POST',
          body:JSON.stringify(formData)
          });
        if(res.ok)
        {
          router.push('/login')
        }
      }
      else{
        alert('Password and cofirm password should be same')
      }
    }
  return (
    <div className="main register">
    <form className="form">
        <Input type="text" name="name" placeValue="Your Name" onChangeFun={setName}/>
        <Input type="email" name="email" placeValue="Your Email" onChangeFun={setEmail}/>
        <Input type="password" name="password" placeValue="Password" onChangeFun={setPassword}/>
        <Input type="password" name="cpassword" placeValue="Confirm Password" onChangeFun={setCpassword}/>
        <Button value="Register" handleSubmit={handleSubmit}/>

    </form>
    </div>
  )
}

export default Register