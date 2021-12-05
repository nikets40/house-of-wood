import { NextPage } from "next";
import Link from "next/link";
import Footer from "../components/common/Footer";
import Hero from "../components/home/Hero";
import MailinglistBanner from "../components/common/MailinglistBanner";
import Marketing from "../components/home/Marketing";
import NewArrivals from "../components/home/NewArrivals";
import Testimonials from "../components/common/Testimonials";
import Trending from "../components/home/Trending";

const IndexPage: NextPage = () => {
  return (
    <div className="mt-5">
      <Hero />
      <NewArrivals />
      <Trending />
      <Marketing />
      <Testimonials />
    </div>
  );
};

export default IndexPage;
