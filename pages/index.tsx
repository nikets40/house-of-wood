import { NextPage } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NewArrivals from "../components/NewArrivals";
import Trending from "../components/Trending";

const IndexPage: NextPage = () => {
  return (
    <div className="mt-5">
      <Hero />
      <NewArrivals />
      <Trending />
    </div>
  );
};

export default IndexPage;
