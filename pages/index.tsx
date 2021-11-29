import { NextPage } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Marketing from "../components/Marketing";
import NewArrivals from "../components/NewArrivals";
import Trending from "../components/Trending";

const IndexPage: NextPage = () => {
  return (
    <div className="mt-5">
      <Hero />
      <NewArrivals />
      <Trending />
      <Marketing />
    </div>
  );
};

export default IndexPage;
