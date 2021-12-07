import { ShoppingBag, Plus, Settings, LogOut } from "react-feather";
import Image from "next/dist/client/image";
import React from "react";
import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import ManageProducts from "./ManageProducts";
import AddProduct from "./AddProduct";
import AdminSettings from "./AdminSettings";

const tabsData = [
  {
    slug: "manage-products",
    label: "Manage Products",
    Icon: <ShoppingBag />,
    Component: <ManageProducts />,
  },
  {
    slug: "add-product",
    label: "Add Product",
    Icon: <Plus />,
    Component: <AddProduct />,
  },
  {
    slug: "settings",
    label: "Admin Settings",
    Icon: <Settings />,
    Component: <AdminSettings />,
  },
];
const Sidebar: React.FC<{ onTabChange?: Function }> = ({ onTabChange }) => {
  const router = useRouter();
  const currentPath = router.query.tab;

  return (
    <aside className="w-min shadow-lg px-4 flex flex-col gap-4 text-base h-screen pt-4">
      <Link href="/admin" passHref>
        <Image
          src="/favicon.png"
          width="45px"
          height="45px"
          objectFit="contain"
          className="cursor-pointer"
          onClick={() => onTabChange()}
        />
      </Link>

      <SidebarDivider />

      {tabsData.map(({ Icon, label, slug, Component }, index) => {
        return (
          <React.Fragment key={index}>
            <SidebarItem
              Icon={Icon}
              title={label}
              slug={slug}
              key={index + slug}
              isSelected={currentPath === slug}
              onClick={() => onTabChange(Component)}
            />
            {index == 1 && <SidebarDivider />}
          </React.Fragment>
        );
      })}

      <div className="flex-grow" />
      <SidebarItem
        onClick={() => {
          localStorage.setItem("isAdmin", "false");
          router.reload();
        }}
        Icon={<LogOut />}
        title="Log out"
      />
      <div className="h-2" />
    </aside>
  );
};

export default Sidebar;

interface SidebarItemProps {
  Icon: React.ReactNode;
  title: string;
  onClick?: Function;
  isSelected?: boolean;
  slug?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  Icon,
  title,
  onClick,
  slug,
  isSelected = false,
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        onClick && onClick();
        if (slug) {
          // router.push(`/admin/${slug}`);
          router.push({
            query: {
              tab: slug,
            },
          });
        }
      }}
      className="group relative flex cursor-pointer"
    >
      <div className={`sidebar-icon ${isSelected && "sidebar-icon-selected"}`}>
        {Icon}
      </div>
      <div className="sidebar-tooltip">{title}</div>
    </div>
  );
};

const SidebarDivider: React.FC = () => (
  <div className="w-full h-px bg-primary mt-3 mb-2" />
);
