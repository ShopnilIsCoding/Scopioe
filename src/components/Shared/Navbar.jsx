import { RiArrowDropDownLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgLogOut } from "react-icons/cg";
const Navbar = () => {
    return (
       <div className="flex  justify-between items-center py-6 poppins px-7 border-l-base-300 border-b border-b-base-300 border-l">
         <div className="flex items-center gap-2 ">
            <div>
                <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722643200&semt=sph" className="size-10 rounded-full" alt="" />
            </div>
            <div>
                <div className="text-[#152A16] font-medium flex items-center justify-between">sagar  <div className="dropdown dropdown-right">
  <div tabIndex={0} role="button" className="cursor-pointer"><RiArrowDropDownLine className="text-3xl" /></div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Update profile</a></li>
    <li><a>Account details</a></li>
  </ul>
</div></div>
                <p className="text-[#5C635A]">sagar@gmail.com</p>
                
            </div>
            
        </div>
        <div className=" flex items-center gap-4">
        <IoNotificationsOutline className=" rounded-full border border-[#afafaf] text-4xl p-2" />
        <button className="text-error btn btn-ghost rounded-none cursor-pointer px-4 border-l border-l-base-300 font-medium flex items-center gap-2">
            Log out <CgLogOut className="rotate-180 rounded-full bg-[#FFECEA] p-2 text-4xl" />
        </button>
        </div>
       </div>
    );
};

export default Navbar;