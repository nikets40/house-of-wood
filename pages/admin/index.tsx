import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import AdminLogin from "./login";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import ManageProducts from "../../components/admin/ManageProducts";
import AddProduct from "../../components/admin/AddProduct";
import AdminSettings from "../../components/admin/AdminSettings";

const Admin: NextPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const router = useRouter();
  const pages = [<ManageProducts />, <AddProduct />, <AdminSettings />];

  useEffect(() => {
    localStorage.getItem("isAdmin") === "true"
      ? setIsAdmin(true)
      : setIsAdmin(false);
  }, []);

  return !isAdmin ? (
    <AdminLogin />
  ) : (
    <div className="flex">
      <Sidebar
        onPageChange={(i: number) => {
          console.log(i);
          setPageIndex(i);
        }}
        onLogout={() => {
          localStorage.setItem("isAdmin", "false");
          router.reload();
        }}
      />
      <main className="w-full h-screen">{pages[pageIndex]}</main>
    </div>
  );
};

export default Admin;
