'use client'
import { useParams } from "next/navigation"
import Post from "@app/components/Post";
import { useEffect, useState } from "react";
import  Head  from 'next/head'

const page = () => {
    const params = useParams();
    const [data, setData] = useState([])
    const [name, setName] = useState([])

    const user =  params?.uid
    useEffect(()=>{
        const fetchBlogs = async()=>{
            const res = await fetch(`/api/getpost/${user}`);
            const dt = await res.json();
            if(dt){
            setData(dt.data)
            setName(dt.userName)
            }
        }
        fetchBlogs()
    },[])
    useEffect(()=>{
    },[data])
  return (
    <div className="allPost">
      <Head key={user}>
      <title>{user}'s Blogs</title>
      </Head>
        {data.length ?<h1>{name}'s Blogs</h1>:''}
        {
            data.length ? data?.map((e)=>{
                return <Post title={e?.titlte} userName={name} val={e?.val} key={e?.postId}/>
            }):<h1>Loadinggg.....</h1>
        }
        
    </div>
  )
}

export default page