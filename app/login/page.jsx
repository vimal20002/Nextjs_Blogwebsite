import Login from "@app/components/Login"
export const metadata ={
  title: "Login To BlogPost",
  description: "Login on best blogging website"
}
const page = () => {
  return (
    <div>
        <Login/>
    </div>
  )
}

export default page