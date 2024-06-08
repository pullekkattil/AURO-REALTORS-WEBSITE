
import Layout from "./components/Layout"
import {Outlet} from "react-router-dom"
import BackgroundVideo from "./components/BackgroundVideo"


function App() {


  return (
    <>
    <BackgroundVideo />
    <Layout>
    <Outlet />
    </Layout>
    </>
  )
}

export default App
