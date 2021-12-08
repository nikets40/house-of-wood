import Image from "next/image";
import CountdownDeal from "./CountdownDeal";

const Marketing: React.FC = () => {
  return (
    <div className="grid gap-8 grid-cols-12 mt-12">
      <CountdownDeal className="col-span-12 md:col-span-8" />
      <NewArrivalDeal />
      <MarketingCard
        imagePath="/static/images/marketing3.jpg"
        title="Sofa Style 2021"
      />

      <MarketingCard
        imagePath="/static/images/marketing4.jpg"
        title="Perfect fit for your home"
        isDark
      />
      <MarketingCard
        imagePath="/static/images/marketing5.jpg"
        title="Sale upto 30% off"
      />
    </div>
  );
};

export default Marketing;

const NewArrivalDeal: React.FC = () => {
  return (
    <div className="relative h-[30vh] lg:h-[40vh] col-span-12 md:col-span-4">
      <Image
        src="/static/images/marketing2.png"
        layout="fill"
        objectFit="cover"
        objectPosition="bottom"
        className="bg-primary rounded-2xl"
        alt=""
      />
      <div className="absolute text-center left-12 right-12 md:left-0 md:right-0 lg:left-12 lg:right-12 py-6 top-[50%] translate-y-[-50%] border-[3px] border-white rounded-3xl md:border-0 lg:border-[3px]">
        <p className="text-white text-base font-normal">New Arrivals</p>
        <h5 className="text-white text-3xl font-bold uppercase mt-2">
          Home
          <br />
          Office
        </h5>
        <button className="primary-btn-dark mt-4">Shop Now</button>
      </div>
    </div>
  );
};

const MarketingCard: React.FC<{
  imagePath: string;
  title: string;
  isDark?: boolean;
}> = ({ imagePath, title, isDark = false }) => {
  return (
    <div className="relative h-[30vh] lg:h-[40vh] md:col-span-4 lg:col-span-3 lg:even:col-span-6 col-span-12">
      <Image
        src={imagePath}
        layout="fill"
        objectFit="cover"
        className="rounded-2xl"
        alt=""
      />

      <div className="absolute text-center left-0 right-0 w-[70%] md:w-[85%] lg-w-[70%] mx-auto py-6 top-[50%] translate-y-[-55%]">
        <p
          className={`${
            isDark ? "text-black" : "text-white"
          } text-base font-normal`}
        >
          New Arrivals
        </p>
        <h5
          className={`${
            isDark ? "text-black" : "text-white"
          } text-3xl font-bold uppercase mt-2`}
        >
          {title}
        </h5>
        <button className="primary-btn mt-4 text-white">Shop Now</button>
      </div>
    </div>
  );
};
