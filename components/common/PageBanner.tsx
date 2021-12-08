import Image from "next/dist/client/image";

const PageBanner: React.FC<{ page: string }> = ({ page }) => {
  return (
    <div className="relative h-[25vh] w-[100vw] -ml-10 lg:-ml-20">
      <Image
        src="/static/images/page-banner.jpeg"
        layout="fill"
        objectFit="cover"
        className=""
        priority
        alt="Page Banner"
      />
      <div className="absolute text-center left-0 right-0 top-[50%] translate-y-[-50%] text-white">
        <h3 className="text-5xl font-bold">{page}</h3>
        <p className="lowercase font-light text-base mt-2">
          home &nbsp; {" > "} &nbsp;&nbsp;{page}
        </p>
      </div>
    </div>
  );
};

export default PageBanner;
