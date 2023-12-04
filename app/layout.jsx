import Nav from "./components/Nav.jsx"
import '@styles/globals.css'
import Provider from "./Provider.js";
 
 const metadata ={
    title: "BlogPost",
    description: "You Can Share your blog here"
}
const RootLayout = ({children}) => {
  return (
    <html lang="en">
    <body>
      <Provider>
        <Nav/>
       {
        children
       } 
       </Provider>
    </body>
    </html>
  )
}

export default RootLayout