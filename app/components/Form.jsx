'use client'
import { useContext, useState } from "react"
import Input from "./Input";
import Button from "./Button";
import { UidContext } from "@app/globalContext";
import { useRouter } from "next/navigation";
const Form = () => {
    const [titlte, setTitlte] = useState("");
    const [val, setVal] = useState("");
    const {uid} = useContext(UidContext);
    const router = useRouter()
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const user = uid || JSON.parse(sessionStorage.getItem('uid'))
        if(user === null)
        router.push('/login')
        const post = {titlte, val};
        const res = await fetch('/api/addpost',{
            method:'POST',
            body:JSON.stringify({uid:user, post})
        })
        const data = await res?.json()
        alert(data?.message)
    }
  return (
        <form className="form">
            <Input type="text" name="title" placeValue="Title Of Your Blog" onChangeFun={setTitlte}/>
        <textarea name="post" id="" cols="50" rows="10"  onChange={(e)=>{setVal(e.target.value)}} className="post" placeholder="Dirty Your Hands Here"/>
        <Button value="Post" handleSubmit={handleSubmit}/>
        </form>
  )
}

export default Form