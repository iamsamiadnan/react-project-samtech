import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";


export default function Root() {
  return (
    <>
        <div className="max-w-[1280px] mx-auto">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    </>

  )
}
