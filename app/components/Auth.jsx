'use client'
import { useEffect, useState } from "react";
import Link from 'next/link'
import { useContext } from "react";
import { LoginContext } from "@app/globalContext";
const Auth = () => {
  const {isLogedIn, setIsLoggedIn} = useContext(LoginContext)
    const [name, setName]= useState('');
    useEffect(()=>{
        const checkLogin=async()=>{
            const token = JSON.parse(localStorage.getItem('token'))
            if(token !== undefined &&  token !== null)
            {
                try {
                    const res = await fetch(`/api/auth/${token}`,{
                        method:'GET'
                    })
                    const data = await res.json();
                    if(data)setIsLoggedIn(true);
                    setName(data?.name)
                    sessionStorage.setItem('name',JSON.stringify(data?.name))
                    sessionStorage.setItem('uid',JSON.stringify(data?.uid))
                } catch (error) {
                    console.log(error)
                }
            }
        }
        checkLogin()
    },[])
    useEffect(()=>{
      const dt = JSON.parse(sessionStorage.getItem('name'))
      if(dt !== null){
      setName(dt)
      setIsLoggedIn(true)
      }
    })
    const logOut = ()=>{
      setIsLoggedIn(false);
      sessionStorage.clear();
      localStorage.clear();
    }
  return (
    <div className="auth-op">
    {
      isLogedIn?
      <div className="auth"> <div className="auth-op op"> {name.toLocaleUpperCase()}</div>
      <div className="auth-op op" onClick={logOut}> Logout</div>
      </div>:
      <div className="auth">
       <Link href="/register"> <div className="auth-op op">Register</div></Link>
        <Link href="/login"><div className="auth-op op">LogIn</div></Link>
      </div>
    }
  </div>
  )
}

export default Auth