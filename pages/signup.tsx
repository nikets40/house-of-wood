import { NextPage } from "next";
import Link from "next/dist/client/link";
import Image from "next/dist/client/image";
import { createUserWithEmail, validateEmail } from "../lib/auth-hooks";
import { useState } from "react";

const SignUp: NextPage = () => {
  const asterisk = <span className="text-red-600">*</span>;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const isButtonDisabled = () => {
    if (!validateEmail(email)) return true;
    if (password !== passwordConfirm) {
      return true;
    }
    if (password.length < 6) {
      return true;
    }
    if (userName.length < 4) return true;
    return false;
  };

  return (
    <div>
      <Link href="/" passHref>
        <a>
          <div className="flex flex-col items-center">
            <Image src="/favicon.png" width={90} height={90} className="" alt="" />
            <h4 className="text-xl font-bold uppercase">House of Wood</h4>
          </div>
        </a>
      </Link>
      <form
        className="kumb-sans-font"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <p className="text-4xl font-extrabold">Create Account</p>
        <label className="mt-4">
          User Name {asterisk}
          <input
            name="name"
            type="text"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            placeholder="Enter a User Name"
          />
        </label>
        <label>
          <div className="flex">
            Email {asterisk}
            {email.length > 8 && !validateEmail(email) && (
              <span className="flex-grow text-red-500 text-right text-sm">
                {" "}
                ( Please Enter a valid email! )
              </span>
            )}
          </div>

          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter your Email"
          />
        </label>
        <label>
          Password {asterisk}
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter your Password"
          />
        </label>
        <label>
          <div className="flex">
            Confirm Password {asterisk}
            {password !== passwordConfirm && passwordConfirm.length > 0 && (
              <span className="flex-grow text-red-500 text-right text-sm">
                {" "}
                ( Password does not match!)
              </span>
            )}
          </div>

          <input
            type="password"
            value={passwordConfirm}
            onChange={(e) => {
              setPasswordConfirm(e.target.value);
            }}
            placeholder="Confirm your Password"
          />
        </label>

        {error && (
          <span className="text-red-500 text-sm text-right mb-2">
            **{error}!**
          </span>
        )}

        <button
          disabled={isButtonDisabled() || isLoading}
          onClick={async () => {
            setIsLoading(true);
            const loginResult = await createUserWithEmail(
              userName,
              email,
              password
            );
            if (!loginResult.success) {
              setError(loginResult.message);
            }
            setIsLoading(false);
          }}
          className="primary-btn text-white"
        >
          {isLoading ? "Signing up..." : "Sign Up"}
        </button>
        <p className="mt-2 text-right">
          Already a user?{" "}
          <Link href="/login" passHref>
            <a className="text-primary">Sign In.</a>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
