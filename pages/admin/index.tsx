import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import AdminLogin from "./login";

const Admin: NextPage = () => {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const [currentTabComponent, setCurrentTabComponent] = useState(<Dashboard />);

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
        onTabChange={(e) => {
          if (e) setCurrentTabComponent(e);
          else setCurrentTabComponent(<Dashboard />);
        }}
      />
      <main className="w-full h-screen overflow-y-scroll">
        {currentTabComponent}
      </main>
    </div>
  );
};

export default Admin;

const Dashboard: React.FC = () => <div>Welcome to admin dashboard!</div>;
