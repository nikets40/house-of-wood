import Image from "next/image";
import Link from "next/dist/client/link";
import GoogleSignInButton from "../components/common/GoogleSignInButton";
import { useState } from "react";
import { loginWithEmail, validateEmail } from "../lib/auth-hooks";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isSignInDisabled = () => {
    if (!email || !password || isLoading) return true;
    if (!validateEmail(email)) return true;
    if (password.length < 6) return true;
    return false;
  };
  return (
    <div className="mt-4">
      <Link href="/" passHref>
        <a>
          <div className="flex flex-col items-center">
            <Image src="/favicon.png" width={90} height={90} className="" alt="" />
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
          <p className="text-4xl font-extrabold">Sign-In</p>
          <label className="mt-6">
            Email <span className="text-red-600">*</span>{" "}
            <input
              type="email"
              name="email"
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
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Enter your password"
            />
          </label>
          <button
            disabled={isSignInDisabled()}
            className="primary-btn text-white mt-6 "
            onClick={async () => {
              console.log("sigining in with:- ", email, password);

              setIsLoading(true);
              await loginWithEmail(email, password);
              setIsLoading(false);
            }}
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>

          <p className="mt-2 text-right">
            New user?{" "}
            <Link href="/signup" passHref>
              <a className="text-primary">Create account.</a>
            </Link>
          </p>

          <GoogleSignInButton className="mt-6 mb-3" />
        </form>
      </div>
    </div>
  );
};
export default Login;
