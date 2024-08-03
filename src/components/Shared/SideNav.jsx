import { NavLink } from "react-router-dom";
import { BiGridAlt } from "react-icons/bi";
import { MdOutlinePeople } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiSquareInfo } from "react-icons/ci";
const SideNav = () => {
    return (
        <div className="min-w-[200px] poppins">
             <nav>
          <ul className="flex flex-col space-y-4">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) =>
                  isActive ? "bg-[#D4E9FF] p-2 px-4 font-medium flex items-center border-l-4 gap-2" : "p-2 px-4 text-[#5C635A] flex items-center gap-2"
                } 
                end
              >
                <BiGridAlt className="text-xl text-[#5C635A]" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/new-listing" 
                className={({ isActive }) =>
                  isActive ? "bg-[#D4E9FF] p-2 px-4 font-medium flex items-center border-l-4 gap-2" : "p-2 px-4 text-[#5C635A] flex items-center gap-2"
                }
              >
                <MdOutlinePeople className="text-xl text-[#5C635A]" />
                New Listing
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/search" 
                className={({ isActive }) =>
                  isActive ? "bg-[#D4E9FF] p-2 px-4 font-medium flex items-center border-l-4 gap-2" : "p-2 px-4 text-[#5C635A] flex items-center gap-2"
                }
              >
                <CiSearch className="text-xl text-[#5C635A]" />
                Search
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) =>
                  isActive ? "bg-[#D4E9FF] p-2 px-4 font-medium flex items-center border-l-4 gap-2" : "p-2 px-4 text-[#5C635A] flex items-center gap-2"
                }
              >
                <IoDocumentTextOutline className="text-xl text-[#5C635A]" />
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/favourites" 
                className={({ isActive }) =>
                  isActive ? "bg-[#D4E9FF] p-2 px-4 font-medium flex items-center border-l-4 gap-2" : "p-2 px-4 text-[#5C635A] flex items-center gap-2"
                }
              >
                <CiHeart className="text-xl text-[#5C635A]" />
                Favourites
              </NavLink>
            </li>
            <div className="divider px-4"></div>
            <li>
              <NavLink 
                to="/help-center" 
                className={({ isActive }) =>
                  isActive ? "bg-[#D4E9FF] p-2 px-4 font-medium flex items-center border-l-4 gap-2" : "p-2 px-4 text-[#5C635A] flex items-center gap-2"
                }
              >
                <CiSquareInfo className="text-xl text-[#5C635A]" />
                Help Center
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/settings" 
                className={({ isActive }) =>
                  isActive ? "bg-[#D4E9FF] p-2 px-4 font-medium flex items-center border-l-4 gap-2" : "p-2 px-4 text-[#5C635A] flex items-center gap-2"
                }
              >
                <CiSettings className="text-xl text-[#5C635A]"/>
                Settings
              </NavLink>
            </li>
          </ul>
        </nav>

            
        </div>
    );
};

export default SideNav;