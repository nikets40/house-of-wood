import { NextPage } from "next";
import { useRouter } from "next/router";
import { ArrowLeft } from "react-feather";

const ErrorPage: NextPage<{ shouldGoBack?: boolean }> = ({
  shouldGoBack = false,
}) => {
  const router = useRouter();
  return (
    <div className="mx-auto text-center mt-[10vh]">
      <h1 className="text-9xl font-extrabold">404</h1>
      <p className="text-4xl font-medium mt-4">Page Not Found</p>
      <p className="text-xl mt-5">
        The Link you are trying to reach may be broken, outdated or incorrect.
      </p>

      <button
        onClick={() => {
          if (shouldGoBack) {
            router.back();
          } else router.push("/");
        }}
        className="primary-btn text-white mt-6 mb-20"
      >
        <p className="flex gap-2">
          <span className={`${!shouldGoBack && "hidden"}`}>
            <ArrowLeft className="-ml-2" />
          </span>{" "}
          <span> {shouldGoBack ? "Go Back" : "Go To Home"}</span>
        </p>
      </button>
    </div>
  );
};

export default ErrorPage;
