import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import SideNav from "../components/Shared/SideNav";


const RootLayout = () => {
    return (
        <div>
            <div className="flex container mx-auto ">
                <div className="hidden lg:block ">
                    <div>
                        <img src="/LOGO.png" className="py-10 pt-14 w-fit mx-auto" alt="" />
                    </div>
                    <SideNav></SideNav>
                </div>
                <div className=" ">
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default RootLayout;