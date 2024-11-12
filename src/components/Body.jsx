import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Feed from "./feed";

 const Body=()=>{
    return(
        <div >
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
 }

 export default Body;