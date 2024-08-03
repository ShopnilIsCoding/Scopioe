import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import SideNav from "../components/Shared/SideNav";


const RootLayout = () => {
    return (
        <div>
            <div className="flex">
                <div className="hidden lg:block min-w-[250px]">
                    <div>
                        <img src="/LOGO.png" className="py-10 w-fit mx-auto" alt="" />
                    </div>
                    <SideNav></SideNav>
                </div>
                <div>
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                </div>

            </div>
        </div>
    );
};

export default RootLayout;