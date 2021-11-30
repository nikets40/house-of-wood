import { NextPage } from "next";
import PageBanner from "../components/PageBanner";
import Map from "../components/contact/Map";
import ContactForm from "../components/contact/ContactForm";

import React from "react";
import ContactDetails from "../components/contact/ContactDetails";

const Contact: NextPage = () => {
  return (
    <div className="mt-0">
      <PageBanner page="Contact" />

      <div className="flex md:items-center  flex-col mt-20 md:flex-row-reverse justify-between">
        <Map className="rounded-2xl shadow-xl hidden lg:inline-block h-[90vh] lg:h-[60vh] lg:w-[50%]" />
        <ContactForm className="w-full lg:w-[45%]" />
      </div>
      <ContactDetails />
    </div>
  );
};

export default Contact;
