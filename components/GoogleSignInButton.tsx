import Image from "next/dist/client/image";

const GoogleSignInButton: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <button
      className={`relative rounded-xl py-3 flex px-10 items-center active:scale-90 transform transition-all borderShadow hover:shadow-lg ${className}`}
    >
      <Image
        src="/static/images/google.png"
        width={30}
        height={30}
        className=""
      />
      <p className=" absolute left-0 right-0 ml-10 text-center">
        Sign In with Google
      </p>
    </button>
  );
};

export default GoogleSignInButton;
