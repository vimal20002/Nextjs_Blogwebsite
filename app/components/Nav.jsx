
import Image from "next/image"
import logo from 'public/logo.webp'
import Link from 'next/link'
import Auth from "./Auth";

const Nav = () => {

  return (
    <section>
      <div className="nav">
      <div className="logo">
        <Image src={logo} width={50} height={50} alt="logo"/>
        <span><h2>Blogpost</h2></span>
        </div>
        <div className="nav-op">
        <Link href="/"><div className="op"> Home </div></Link>  
        <Link href="/blogs"> <div className="op">Blogs</div></Link>  
        <Link href="/myblog"> <div className="op">My Blogs</div></Link>  
        </div>
       <Auth/>
        </div>
    </section>
  )
}

export default Nav