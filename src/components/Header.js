import { useState } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import useOnlineStatus from "./CustomHook/useOnlineStatus";
import { useSelector } from "react-redux";
import { store } from "./utils/Store";
import { BsCart2 } from "react-icons/bs";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex min-h-16 justify-between sticky top-0 z-50 bg-orange-500 shadow-xl text-white text-lg sm:max-h-24">
      <Title />
      <div className="flex sm:w-[40%]">
        <ul className="flex items-center justify-between">
          <Link
            className="hidden xl:block px-5 hover:bg-white pt-2 hover:text-black hover:rounded-xl h-10 sm:pt-[6]"
            to="/"
          >
            <li>Home</li>
          </Link>
          <Link
            className="hidden xl:block px-5 hover:bg-white pt-2 hover:text-black hover:rounded-xl h-10 sm:pt-[6]"
            to="/about"
          >
            <li>About us</li>
          </Link>
          <Link
            className="hidden xl:block px-5 hover:bg-white pt-2 hover:text-black hover:rounded-xl h-10 sm:pt-[6]"
            to="/faq"
          >
            <li>FAQ</li>
          </Link>
          <Link
            className="px-5 hover:bg-white hover:text-black hover:rounded-xl h-10 pt-[6]"
            to="/cart"
          >
            <li data-testid="cart" className="flex">
              <BsCart2 className="mt-[6]" /> - {cartItems.length}
            </li>
          </Link>
          <li data-testid="onlinestat" className="hidden md:block sm:px-5">
            Online : {onlineStatus ? "🟢" : "🔴"}
          </li>
        </ul>
      </div>
      <Link to="/login" className="hidden sm:block sm:w-[12%]">
        <div className="flex justify-end sm:pr-8">
          <button className=" bg-orange-950 my-6 py-2 w-[6rem] rounded-md hover:bg-white hover:text-black">
            Login
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Header;
