import YourBlogPage from "@app/components/YourBlogPage"
export const metadata ={
    title: "Your Blogs",
    description: "Blogs that you have posted"
}
const page = () => {
  return (
    <YourBlogPage/>
  )
}

export default page