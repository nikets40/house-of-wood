import { NextPage } from "next";
import PageBanner from "../components/PageBanner";
import Image from "next/dist/client/image";

const About: NextPage = () => {
  return (
    <div>
      <PageBanner page="about" />

      <div className="flex flex-col items-center text-center justify-center mt-16">
        <Image src="/favicon.png" width="60" height="60" objectFit="contain" />
        <p className="text-lg">GETTING BETTER AND BETTER – TOGETHER</p>
        <h3 className="mt-5 font-bold text-4xl">THE FUTURE OF FURNITURE</h3>

        <div className="relative w-full aspect-w-16 aspect-h-7 mt-10">
          <Image
            src="/static/images/about-hero.jpeg"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>

        <div className="text-left flex flex-col gap-4 md:flex-row mt-12">
          <h3 className="flex-1 font-bold text-4xl capitalize">
            Simple Creative Design Quaility
          </h3>
          <p className=" flex-1 text-gray-700 font-light ">
            Ut leo. Vivamus aliquet elit ac nisl. Aenean leo ligula, porttitor
            eu, consequat vitae, eleifend ac enim. Sed cursus turpis vitae
            tortor. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae; Fusce id purus.
          </p>

          <p className=" flex-1 text-gray-700 font-light">
            Ut leo. Vivamus aliquet elit ac nisl. Aenean leo ligula, porttitor
            eu, consequat vitae, eleifend ac enim. Sed cursus turpis vitae
            tortor. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia Curae; Fusce id purus.
          </p>
        </div>

        <div className="mt-24" />

      </div>

      <AboutUsSection />
    </div>
  );
};

export default About;

const AboutUsSection: React.FC = () => {
  return (
    <div className="flex gap-10 flex-col md:flex-row justify-between">


      <div className="relative w-full md:w-[50%] h-[40vh]">
        <Image
          src="/static/images/about-us.jpeg"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>


      <div className="text-left md:w-[45%]">
        <p className="text-primary text-xl">About Phlox Group</p>
        <h2 className="capitalize mt-4 text-5xl font-bold">
          We Are The Leader In Furniture product
        </h2>
        <p className="mt-6 opacity-80">
          In a professional context it often happens that private or corporate
          clients corder a publication to be made and presented with the actual
          content still not being ready. Think of a news blog
          <br />
          <br />
          In a professional context it often happens that private or corporate
          clients corder a publication to be made and presented with the actual
          content still not being ready. Think of a news blog
        </p>
      </div>
    </div>
  );
};
