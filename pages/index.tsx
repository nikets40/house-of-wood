import { NextPage } from "next";
import Link from "next/link";
import Hero from "../components/Hero";
import NewArrivals from "../components/NewArrivals";

const IndexPage: NextPage = () => {
  return (
    <div>
      <Hero />
      <NewArrivals />
    </div>
  );
};

export default IndexPage;
