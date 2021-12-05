import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <main className="w-full grid grid-cols-5 gap-6 jost-font">
      {/* First Banner */}
      <div className="col-span-5 h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] relative">
        <Image
          src="/static/images/Hero1.jpeg"
          layout="fill"
          objectFit="cover"
          className="rounded-3xl"
          priority
        />
        <div className="absolute left-0 right-0 top-[24%] flex-col text-center text-white font-bold">
          <p className="text-2xl md:text-3xl font-medium uppercase">spring</p>
          <p className="text-5xl  md:text-7xl font-bold uppercase mt-2 md:pt-4">Collection</p>
          <p className="text-xl font-bold mt-2 mb-4">
            <span className="font-normal">Starts from</span> $39.99
          </p>
          <button className="primary-btn">
            Shop Now
          </button>
        </div>
      </div>

      {/* Second Banner */}
      <div className="h-[25vh] sm:h-[30vh] md:h-[35vh] col-span-5 lg:col-span-3 relative ">
        <Image
          src="/static/images/Hero2.jpeg"
          layout="fill"
          objectFit="cover"
          className="rounded-3xl"
        />

        <div className="absolute left-0 right-10 top-[14%] flex-col text-right text-black font-bold">
          <p className="text-xl sm:text-2xl lg:sm:text-2xl md:text-3xl font-medium uppercase">
            Modern
          </p>
          <p className="text-3xl sm:text-5xl lg:sm:text-5xl md:text-7xl font-bold uppercase mt-1">
            Furniture
          </p>
          <p className="text-lg  md:text-xl lg:text-lg font-bold mt-1 mb-4">
            <span className="font-normal">Starts from</span> $39.99
          </p>
          <button className="primary-btn">
            Shop Now
          </button>
        </div>
      </div>

      {/* Third Banner */}
      <div className="h-[25vh] sm:h-[30vh] md:h-[35vh] col-span-5 lg:col-span-2 relative ">
        <Image
          src="/static/images/Hero3.jpeg"
          layout="fill"
          objectFit="cover"
          className="rounded-3xl md:object-left"
        />

        <div className="absolute left-0 right-10 top-[14%] flex-col text-right text-black font-bold">
          <p className="text-xl sm:text-2xl lg:sm:text-2xl md:text-3xl font-medium uppercase">
            New
          </p>
          <p className="text-3xl sm:text-5xl lg:sm:text-5xl md:text-7xl font-bold uppercase mt-1">
            Lighting
          </p>
          <p className="text-lg  md:text-xl lg:text-lg font-bold mt-1 mb-4">
            <span className="font-normal">Starts from</span> $39.99
          </p>
          <button className="primary-btn">
            Shop Now
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
