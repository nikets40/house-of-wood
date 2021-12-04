import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AdminLogin from "./login";
import { ShoppingBag, Plus, Settings, LogOut } from "react-feather";
import Image from "next/dist/client/image";

const Admin: NextPage = () => {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  //   localStorage.setItem("isAdmin", "false");

  useEffect(() => {
    localStorage.getItem("isAdmin") === "true"
      ? setIsAdmin(true)
      : setIsAdmin(false);
  }, []);

  const divider = <div className="w-full h-px bg-primary mt-3 mb-2" />;

  return !isAdmin ? (
    <AdminLogin />
  ) : (
    <div className="flex">
      <aside className="w-min shadow-lg px-4 flex flex-col gap-4 text-base h-screen pt-4">
        <Image
          src="/favicon.png"
          width="45px"
          height="45px"
          objectFit="contain"
        />
        {divider}
        <SidebarItem Icon={<ShoppingBag />} title="Manage Products" />
        <SidebarItem Icon={<Plus />} title="Add Product" />
        {divider}
        <SidebarItem Icon={<Settings />} title="Settings" />

        <div className="flex-grow" />
        <SidebarItem Icon={<LogOut />} title="Log out" />
        <div className="h-2" />
      </aside>
      <main className="w-full h-screen">
        <div className="text-5xl font-semibold text-center flex items-center justify-center mt-[50vh] translate-y-[-50%]">
          Welcome to the admin panel
        </div>
      </main>
    </div>
  );
};

export default Admin;

const SidebarItem: React.FC<{ Icon: React.ReactNode; title: string }> = ({
  Icon,
  title,
}) => {
  return (
    <div className="group relative flex cursor-pointer">
      <div className="sidebar-icon">{Icon}</div>
      <div className="sidebar-tooltip">{title}</div>
    </div>
  );
};
