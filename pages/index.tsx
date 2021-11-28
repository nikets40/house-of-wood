import { NextPage } from "next";
import Link from "next/link";
import Hero from "../components/Hero";
import NewArrivals from "../components/NewArrivals";
import Trending from "../components/Trending";

const IndexPage: NextPage = () => {
  return (
    <div>
      <Hero />
      <NewArrivals />
      <Trending />
    </div>
  );
};

export default IndexPage;
