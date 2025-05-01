import { VscAccount } from "react-icons/vsc";
import { IoBagOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import CategoriesNav from "./CategoriesNav";
import { useState } from "react";
import { useGetCartQuery } from "@/redux/cart/cartAPI";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Button } from "../ui/button";
import { useLogoutMutation } from "@/redux/user/authAPI";
import { logout } from "@/redux/user/authSlice";

const navItemStyle =
  "hover:cursor-pointer hover:text-[#E80071] uppercase text-xl font-semibold";

function Navbar() {
  const [showCategories, setShowCategories] = useState(false);
  const { data } = useGetCartQuery();
  const [logoutAction] = useLogoutMutation();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      alert("Are you sure you want to logout?")
      await logoutAction().unwrap();
      dispatch(logout());
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Something went wrong while logging out.");
    }
  };

  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const [showAccountOptions, setshowAccountOptions] = useState(false);
  const quantity = data?.items.length || 0;
  // Handlers for mouse events
  const handleMouseEnter = () => setShowCategories(true);
  const handleMouseLeave = () => setShowCategories(false);

  return (
    <>
      <nav className="bg-[#FFEAF6] flex justify-between py-4 items-center lg:text-2xl md:w-full md:text-xl md:px-12">
        <Link to="/">
          <div
            className="lg:text-4xl text-primary md:text-2xl text-lg"
            onMouseEnter={handleMouseLeave}
          >
            Glam Luv
          </div>
        </Link>

        <div className="flex items-center">
          <ul className="flex gap-4 text-sm sm:text-lg lg:text-2xl">
            <Link
              className={navItemStyle}
              onMouseEnter={handleMouseLeave}
              to="/about"
            >
              About
            </Link>
            <div className={navItemStyle} onMouseEnter={handleMouseEnter}>
              Products
            </div>
            <Link
              className={navItemStyle}
              onMouseEnter={handleMouseLeave}
              to="/contact"
            >
              Contact Us
            </Link>
          </ul>
        </div>
        <div className="flex px-4 gap-2 relative">
            <VscAccount
              onClick={() => {
                setshowAccountOptions((prev) => !prev);
              }}
              className="text-3xl"
              aria-label="Account"
            />
          {/* account, logout box */}
          {isAuthenticated ? (
            <div
              className={`
         ${
           showAccountOptions
             ? "opacity-100 scale-100 pointer-events-auto"
             : "opacity-0 scale-95 pointer-events-none"
         }
            flex absolute top-10 right-16 flex-col text-lg bg-white p-2
           transition duration-500 
            `}
            >
              <Link
                to="/account"
                className="text-sm"
                onClick={() => {
                  setshowAccountOptions(false);
                }}
              >
                My Account
              </Link>
              <Button
                variant="ghost"
                className="cursor-pointer"
                onClick={() => {
                  handleLogout();
                  setshowAccountOptions(false);
                }}
              >
                Logout
              </Button>
            </div>
          ) : (
            <></>
          )}

          {/* cart */}
          <Link to="/cart" className="relative ">
            <IoBagOutline className="text-3xl" aria-label="Cart" />
            <div className="text-sm absolute bg-white left-4 bottom-4 px-2 rounded-full">
              {quantity}
            </div>
          </Link>
        </div>
      </nav>

      {/* Categories Navigation */}
      {showCategories && (
        <div className="" onMouseLeave={handleMouseLeave}>
          <CategoriesNav closeCategoryNav={setShowCategories} />
        </div>
      )}
    </>
  );
}

export default Navbar;
