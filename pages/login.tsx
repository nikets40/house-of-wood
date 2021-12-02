import Image from "next/image";
import Link from "next/dist/client/link";
import GoogleSignInButton from "../components/GoogleSignInButton";
import { useState } from "react";

const Login = () => {
  const signInWithEmail = () => {};
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="mt-4">
      <Link href="/" passHref>
        <a>
          <div className="flex flex-col items-center">
            <Image src="/favicon.png" width={90} height={90} className="" />
            <h4 className="text-xl font-bold uppercase">House of Wood</h4>
          </div>
        </a>
      </Link>

      <div className="kumb-sans-font mt-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-col"
        >
          <p className="text-4xl font-bold">Sign-In</p>
          <label className="mt-6">
            Email <span className="text-red-600">*</span>{" "}
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter your email"
            />
          </label>
          <label className="mt-4">
            Password <span className="text-red-600">*</span>{" "}
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Enter your password"
            />
          </label>
          <button
            className="primary-btn text-white mt-6"
            onClick={signInWithEmail}
          >
            Sign in
          </button>

          <GoogleSignInButton className="mt-6 mb-3" />
        </form>
      </div>
    </div>
  );
};
export default Login;
