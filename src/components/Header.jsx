import { BsFillPersonFill } from "react-icons/bs";
import {FaAngleDown, FaCartShopping} from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import UserMenu from "./UserMenu";
import { Link } from "react-router-dom";

const Header = () => {
  const [isUserModal, setIsUserModal] = useState(false);

  return (
    <div className="bg-warning py-3 px-6 md:px-14 sticky top-0 z-10">
      <div className="flex justify-between items-center">
        <Link to="/">
          <div className="logo text-accent">FOODIE</div>
        </Link>
        
        <div className="hidden md:flex flex-grow items-center justify-center ">
          <form action="" className="flex flex-row items-center">
            <div className="relative flex-grow">
              <input
                type="text"
                name=""
                id=""
                placeholder="Search for food"
                className="rounded-md py-2 pl-10 w-full md:w-80 px-4 outline-none"              
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <BsSearch className="text-gray-400" />
              </div>
            </div>
            <input
              type="button"
              value="Search"
              className="bg-info text-accent px-4 py-2 rounded-md ml-2 border-0 cursor-pointer"
            />
          </form>
        </div>
        <div className="flex items-center justify-between gap-3">
          <Link to='/cart'>
          <div>
             <FaCartShopping className="text-2xl text-accent cursor-pointer"   />
          </div>
          </Link>
          
          <div className="flex items-center justify-between text-accent gap-2 lg:border py-[6px] px-3 lg:rounded-full cursor-pointer"
            onClick={()=>{
              setIsUserModal(!isUserModal);              
            }}
          >
            <BsFillPersonFill className="text-2xl text-accent" />
            <div className="hidden lg:flex items-center gap-1 justify-between">
              <h2>Account</h2>
            <FaAngleDown />
            </div>
            
          </div>
        </div>
      </div>
      <div className="md:hidden py-3">
        <form action="" className="flex flex-row items-center">
          <div className="relative flex-grow">
            <input
              type="text"
              name=""
              id=""
              placeholder="Search for food"
              className="rounded-md py-2 pl-10 w-full px-4 outline-none"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <BsSearch className="text-gray-400" />
            </div>
          </div>
          <input
            type="button"
            value="Search"
            className="bg-info text-accent px-4 py-2 rounded-md ml-2 border-0 cursor-pointer"
          />
        </form>
      </div>

      {
        isUserModal ? <UserMenu /> : <div></div>
      }
    </div>
  );
};

export default Header;
