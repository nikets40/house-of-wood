import Image from "next/image";

const MailinglistBanner = () => {
  return (
    <div className="h-[40vh] w-full relative mt-20">
      <Image
        src="/static/images/mailinglist-bg.jpg"
        layout="fill"
        objectFit="cover"
        className="rounded-2xl"
      />
      <div className="absolute text-white flex flex-col items-center text-center left-0 right-0 mx-auto w-11/12 top-[50%] translate-y-[-55%] lg:text-left lg:items-start md:w-[60%] xl:w-[40%] lg:mr-5 ">
        {emailIcon}{" "}
        <h4 className="uppercase font-semibold text-4xl mt-4">
          Get $20 of your First order
        </h4>
        <p className="font-light mt-2">Join our mailing list!</p>
        <div className="bg-white w-[80%] rounded-lg border-2 border-gray-300 mt-7 flex justify-between items-center">
          <input
            type="email"
            placeholder="Enter your Email"
            className="text-black h-full border-none outline-none px-4 py-2 flex-grow"
          />
          <button className="primary-btn-dark hover:bg-primary hover:text-white rounded-lg my-[1px] mr-[1px] hidden md:block">
            Shop Now
          </button>
        </div>
        <button className="primary-btn-dark hover:bg-primary hover:text-white mt-5 md:hidden">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default MailinglistBanner;

const emailIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="49.506"
    height="49.506"
    viewBox="0 0 49.506 49.506"
  >
    <path
      d="M37.9,49.506H11.6A11.616,11.616,0,0,1,0,37.9v-11.6a5.346,5.346,0,0,1,1.672-3.918,5.479,5.479,0,0,1,4.038-1.5,5.386,5.386,0,0,1,2.938,1.07l11.4,8.544.013.01a7.754,7.754,0,0,0,9.382,0l.013-.01,11.4-8.54A5.391,5.391,0,0,1,43.8,20.893a5.48,5.48,0,0,1,4.037,1.5,5.346,5.346,0,0,1,1.672,3.918V37.9A11.616,11.616,0,0,1,37.9,49.506ZM5.431,24.753a1.621,1.621,0,0,0-1.1.441,1.491,1.491,0,0,0-.467,1.112V37.9A7.744,7.744,0,0,0,11.6,45.638H37.9A7.744,7.744,0,0,0,45.638,37.9v-11.6a1.491,1.491,0,0,0-.467-1.112A1.612,1.612,0,0,0,44,24.755a1.509,1.509,0,0,0-.832.31L31.783,33.6a11.631,11.631,0,0,1-14.06,0L6.333,25.061a1.5,1.5,0,0,0-.9-.308Zm24.157-3.868a1.934,1.934,0,0,0-1.934-1.934H17.211a1.934,1.934,0,0,0,0,3.868H27.654A1.934,1.934,0,0,0,29.587,20.885Zm4.835-7.445a1.934,1.934,0,0,0-1.934-1.934H17.211a1.934,1.934,0,0,0,0,3.868H32.488A1.934,1.934,0,0,0,34.422,13.44Zm10.443,1.74V11.6A11.616,11.616,0,0,0,33.262,0H16.437a11.616,11.616,0,0,0-11.6,11.6v3.578a1.934,1.934,0,1,0,3.868,0V11.6a7.744,7.744,0,0,1,7.735-7.735H33.262A7.744,7.744,0,0,1,41,11.6v3.578a1.934,1.934,0,1,0,3.868,0Z"
      fill="#fff"
    ></path>
  </svg>
);
