import { NextPage } from "next";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import { useRouter } from "next/router";
import { useState } from "react";

const AdminLogin: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);
  const router = useRouter();

  return (
    <div className="bg-[#f0f0f1] w-[100vw] h-[100vh]">
      <div className="flex flex-col items-center pt-[15vh]">
        <Link href="/" passHref>
          <a>
            <Image
              src="/favicon.png"
              width="100px"
              height="100px"
              className="cursor-pointer"
              alt=""
            />
          </a>
        </Link>

        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="bg-white min-w-[370px] px-10 max-w-xl"
        >
          <label>
            Username:
            <input type="text" placeholder="Enter your username" />
          </label>
          <label>
            Password:
            <input type="password" placeholder="Enter your password" />
          </label>
          <div
            onClick={() => {
              setRemember(!remember);
            }}
            className="flex items-center space-x-2 text-gray-700 -mt-2 cursor-pointer"
          >
            <div
              className={`w-4 h-4 rounded border border-gray-500 transition-colors ${
                remember && "border-0 bg-primary"
              }`}
            ></div>
            <p className="">Remeber Me</p>
          </div>
          <button
            onClick={() => {
              localStorage.setItem("isAdmin", "true");
              router.reload();
            }}
            className="primary-btn text-white rounded mt-5"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
