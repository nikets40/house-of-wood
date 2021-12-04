import { ShoppingBag, Plus, Settings, LogOut } from "react-feather";
import Image from "next/dist/client/image";
import { MouseEventHandler, useState } from "react";

const Sidebar: React.FC<{
  onPageChange?: Function;
  onLogout?: MouseEventHandler;
}> = ({ onPageChange, onLogout }) => {
  const divider = <div className="w-full h-px bg-primary mt-3 mb-2" />;

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <aside className="w-min shadow-lg px-4 flex flex-col gap-4 text-base h-screen pt-4">
      <Image
        src="/favicon.png"
        width="45px"
        height="45px"
        objectFit="contain"
      />
      {divider}
      <SidebarItem
        onClick={() => {
          setSelectedIndex(0);
          onPageChange(0);
        }}
        isSelected={selectedIndex === 0}
        Icon={<ShoppingBag />}
        title="Manage Products"
      />
      <SidebarItem
        onClick={() => {
          setSelectedIndex(1);
          onPageChange(1);
        }}
        isSelected={selectedIndex === 1}
        Icon={<Plus />}
        title="Add Product"
      />
      {divider}
      <SidebarItem
        onClick={() => {
          setSelectedIndex(2);
          onPageChange(2);
        }}
        isSelected={selectedIndex === 2}
        Icon={<Settings />}
        title="Settings"
      />

      <div className="flex-grow" />
      <SidebarItem onClick={onLogout} Icon={<LogOut />} title="Log out" />
      <div className="h-2" />
    </aside>
  );
};

export default Sidebar;

const SidebarItem: React.FC<{
  Icon: React.ReactNode;
  title: string;
  onClick?: MouseEventHandler<HTMLElement>;
  isSelected?: boolean;
}> = ({ Icon, title, onClick, isSelected }) => {
  return (
    <div onClick={onClick} className="group relative flex cursor-pointer">
      <div className={`sidebar-icon ${isSelected && "sidebar-icon-selected"}`}>
        {Icon}
      </div>
      <div className="sidebar-tooltip">{title}</div>
    </div>
  );
};
