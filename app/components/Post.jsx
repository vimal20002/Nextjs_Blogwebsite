import Link from 'next/link'
const Post = ({title, val, userName, uid}) => {
  return (
    <div className="postBox">
        <span className="post-top"><h3 className="post-title">{title}</h3> by <Link href={`/user/${uid}`}><h4 className="userName">{userName}</h4> </Link></span>
        <p className="post-val">{val}</p>

    </div>
  )
}

export default Post