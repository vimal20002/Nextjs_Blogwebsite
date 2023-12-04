"use client"
import Button from "@app/components/Button"
import Input from "@app/components/Input"
import Post from "@app/components/Post"
import { useEffect, useState } from "react"
var result;
const AllBlogPage = () => {
    const [data, setData] = useState(null)
    const [val, setVal] = useState('')
    useEffect(()=>{
        const fetchBlogs = async()=>{
            const res = await fetch('/api/getAllPost');
            const dt = await res.json();
            result=dt;
            setData(dt)
        }
        fetchBlogs()
    },[])
    useEffect(()=>{
    },[data])
    const handleSearch = ()=>{
        if(val.length === 0)
        {
            setData(result)
        }
        else{
        const obj = result?.filter((e)=>{
            return e?.titlte?.includes(val) ;
        })
        setData(obj)
        if(obj.length === 0)
        {
            const obj2 =  result?.filter((e)=>{
            return e.userName === val;
        })
                setData(obj2)
        }

        }
    }
  return (
    <div className="allPost">
        <div className="search-box"><Input type="text" placeValue=" Title Or UserName" name="sch" onChangeFun={setVal}/>
        <Button value="Search" handleSubmit={handleSearch}/>
        </div>
        {data ?<h1>Recent Blogs</h1>:''}
        {
            data? data?.map((e)=>{
                return <Post title={e?.post.titlte} uid={e?.uid} key={e?.postId} userName={e?.userName} val={e?.post.val}/>
            }):<h1>Loadinggg.....</h1>
        }
        {data?.length===0 && <h1>Nothing To show</h1>}
        
    </div>
  )
}

export default AllBlogPage