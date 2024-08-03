import { RiArrowDropDownLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgLogOut } from "react-icons/cg";
import { HiMenuAlt3 } from "react-icons/hi";
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import { useContext, useState } from "react";
import SideNav from "./SideNav";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {user,logOut}=useContext(AuthContext);
    const navigate=useNavigate();
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    console.log(user)
    const handleSignOut=()=>
        {
          logOut() 
          .then(()=>{navigate('/')})
          .catch()
    
        }
    return (
       <div className="flex  justify-between items-center py-6 poppins px-7 border-l-base-300 border-b border-b-base-300 border-l">
         <div className="items-center gap-2 hidden lg:flex">
            <div>
                <img src={user?.photoURL} className="size-10 rounded-full" alt="" />
            </div>
            <div>
                <div className="text-[#152A16] font-medium flex items-center justify-between">{user?.displayName}  <div className="dropdown dropdown-right">
  <div tabIndex={0} role="button" className="cursor-pointer"><RiArrowDropDownLine className="text-3xl" /></div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Update profile</a></li>
    <li><a>Account details</a></li>
  </ul>
</div></div>
                <p className="text-[#5C635A]">{user?.email}</p>
                
            </div>
            
        </div>
        <div className="block lg:hidden">
            <img src="/LOGO.png" alt="" />
        </div>
        <div className=" flex items-center gap-4">
        <IoNotificationsOutline className=" lg:rounded-full lg:border border-[#afafaf] lg:text-4xl lg:p-2 text-xl cursor-pointer" />
        <div className="block lg:hidden">
        <HiMenuAlt3 className="text-xl cursor-pointer" onClick={toggleDrawer} />
        <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='overflow-y-auto pb-2'
                style={{height:'fitContent'}}
            >
                <div className="bg-dark pt-16 flex items-end gap-1 pr-4 pb-10 flex-col mb-2">
                    <img src={user?.photoURL} className="size-14 rounded-full" alt="" />
                    <p className="text-2xl font-semibold text-white">{user?.displayName}</p>
                    <p className="text-xs text-[#1A2634]">{user?.email}</p>

                </div>
                <SideNav></SideNav>
                <button onClick={handleSignOut} className="lg:hidden flex text-error btn btn-ghost rounded-none cursor-pointer px-4 border-l border-l-base-300 font-medium items-center gap-2">
            Log out <CgLogOut className="rotate-180 rounded-full bg-[#FFECEA] p-2 text-4xl" />
        </button>
            </Drawer></div>
        <button onClick={handleSignOut} className="hidden lg:flex text-error btn btn-ghost rounded-none cursor-pointer px-4 border-l border-l-base-300 font-medium items-center gap-2">
            Log out <CgLogOut className="rotate-180 rounded-full bg-[#FFECEA] p-2 text-4xl" />
        </button>
        </div>
       </div>
    );
};

export default Navbar;