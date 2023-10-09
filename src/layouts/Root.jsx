import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
import { Toaster } from "react-hot-toast";


export default function Root() {
  return (
    <>
<Toaster
  position="bottom-center"
  reverseOrder={false}
/>
        <div className="max-w-[1280px] mx-auto">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    </>

  )
}
