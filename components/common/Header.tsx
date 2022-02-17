import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { LogOut, Search, ShoppingCart, Menu } from "react-feather";
import { UserContext } from "../../lib/context";
import { logout } from "../../lib/auth-hooks";
import { CartState } from "../../interfaces/reduxInterfaces";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import Router from "next/router";

const Header: React.FC<{ numberOfItemsInCart: number }> = ({
  numberOfItemsInCart,
}) => {
  const userData = useContext(UserContext);

  const [isSearchActive, setIsSearchActive] = React.useState(false);

  const handleSearch = (searchTerm: string) => {
    setIsSearchActive(false);
    console.log(searchTerm);
    Router.push(`/search?q=${searchTerm}`);
  };

  const searchBar = (
    <SearchBar
      onClose={() => setIsSearchActive(false)}
      onSearch={handleSearch}
    />
  );

  return (
    <header className="bg-white sticky shadow-lg top-0 w-full flex items-center justify-between h-20 z-10 m-auto px-10 lg:px-20">
      {isSearchActive ? (
        searchBar
      ) : (
        <div className="w-full flex items-center justify-between">
          {/* Left Side of Navbar */}
          <div className="flex items-center">
            <Logo />
            <Divider classname="hidden md:block md:mx-6" />
            <NavItems />
          </div>

          {/* Right Side of Navbar */}
          <div className="flex items-center">
            {/* {userData?.username && <p className="md:text-sm lg:text-base">{userData.username} </p>} */}
            <IconLink
              icon={<LogOut className="w-6 h-6" />}
              link="/login"
              onClick={
                userData?.username &&
                ((e) => {
                  e.preventDefault();
                  logout();
                })
              }
              text={userData?.username ? "Logout" : "Login"}
            />
            <Divider />
            <IconLink
              icon={<Search className="w-6 h-6" />}
              link="/"
              text="Searh"
              onClick={() => setIsSearchActive(true)}
            />
            <Divider />
            <IconLink
              icon={
                <div className="relative">
                  <ShoppingCart className="w-6 h-6" />
                  {numberOfItemsInCart > 0 && (
                    <div className="absolute -top-3 -right-3 bg-yellow-500 rounded-full flex">
                      <p className="text-[12px] text-white px-2 py-1">
                        {numberOfItemsInCart}
                      </p>
                    </div>
                  )}
                </div>
              }
              link="/cart"
              text="Cart"
            />

            <Divider classname="md:hidden" />
            <Link href="/">
              <a className="md:hidden">
                <Menu className="w-6 h-6" />
              </a>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const Divider: React.FC<{ classname?: string }> = ({ classname = "" }) => {
  return <div className={`w-[1px] h-6 bg-black mx-2 lg:mx-8 ${classname}`} />;
};

const Logo: React.FC = () => {
  return (
    <Link href="/" passHref>
      <div className="flex items-center space-x-4 cursor-pointer">
        <Image src="/favicon.png" width="50" height="50" alt="" />
        <p className="">House of Wood</p>
      </div>
    </Link>
  );
};

const NavItems: React.FC = () => {
  return (
    <div className="nav-items hidden md:block">
      <Link passHref href="/">
        <a className="">Home</a>
      </Link>
      <Link passHref href="/shop">
        <a>Shop</a>
      </Link>
      <Link passHref href="/about">
        <a>About</a>
      </Link>
      <Link passHref href="/contact">
        <a>Contact</a>
      </Link>
    </div>
  );
};

const IconLink: React.FC<{
  icon: any;
  text: string;
  link: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}> = ({ icon, text, link, onClick }) => {
  return (
    <Link passHref href={link}>
      <a
        onClick={(e) => {
          if (onClick) {
            e.preventDefault();
            onClick(e);
          }
          null;
        }}
        className="flex space-x-2"
      >
        {icon}
        <p className="hidden md:inline-block md:text-sm lg:text-base">{text}</p>
      </a>
    </Link>
  );
};

const mapStateToProps = (state: CartState) => {
  return {
    numberOfItemsInCart: state?.products?.length ?? 0,
  };
};

export default connect(mapStateToProps)(Header);
