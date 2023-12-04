"use client"
import Post from "@app/components/Post"
import { UidContext } from "@app/globalContext";
import { useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation";

const YourBlogPage = () => {
    const {uid} = useContext(UidContext);
    const [data, setData] = useState(null)
    const router = useRouter()
    
    const user =  uid || (typeof window !== "undefined" ?JSON.parse(sessionStorage.getItem('uid')):"")
    useEffect(()=>{
        const fetchBlogs = async()=>{
            const res = await fetch(`/api/getpost/${user}`);
            const dt = await res.json();
            setData(dt.data)
        }
        if(user)
        fetchBlogs()
        else
        router.push('/login')

    },[])
    useEffect(()=>{
    },[data])
  return (
    <div className="allPost">
        {data ?<h1>Your Blogs</h1>:''}
        {
            data ? data?.map((e)=>{
                return <Post title={e?.titlte} userName="You" val={e?.val} key={e?.postId}/>
            }):<h1>Loadinggg.....</h1>
        }
        
    </div>
  )
}

export default YourBlogPage