import Image from "next/dist/client/image";
import { SocialIcon } from "react-social-icons";

const Footer: React.FC = () => {
  return (
    <div className="bg-gray-100 m-auto px-10 lg:px-20 footer pt-10 pb-5 mt-14">
      <div className="grid grid-cols-6 gap-4 m-auto footer pt-10">
        <div className="col-span-6">
          <Image src="/favicon.png" width="70" height="70" alt=""/>
          <h5 className="-mt-2">House of Wood</h5>
          <p className="font-normal text-base opacity-95 mt-3">
            While the lovely valley teems with vapour around me, and the
            meridian sun.
          </p>
        </div>

        <div>
          <h5>Visit Link</h5>
          <p>Privacy</p>
          <p>Terms and conditions</p>
        </div>

        <div>
          <h5>Company</h5>
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div>
          <h5>Contact</h5>
          <p>+99 (0) 101 0000 888 </p>
          <p>Info@yourdomain.com</p>
        </div>

        <div>
          <h5>Address</h5>
          <p>
            Patricia Amedee 4401 <br />
            Waldeck Street Grapevine <br /> Nashville, Tx 76051
          </p>
        </div>
      </div>

      <div className="w-full h-[1px] bg-black my-4" />
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <p className="text-center md:text-left">© 2021 Copyright House of Wood. All Rights Reserved</p>

        <div className="m-auto space-x-5 md:space-x-2  mt-5 md:mt-0 md:mr-0">
          <SocialIcon url="facebook.com" style={{ height: 30, width: 30 }} />
          <SocialIcon url="youtube.com" style={{ height: 30, width: 30 }} />
          <SocialIcon url="twitter.com" style={{ height: 30, width: 30 }} />
          <SocialIcon url="instagram.com" style={{ height: 30, width: 30 }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
