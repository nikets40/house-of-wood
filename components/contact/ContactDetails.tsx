import {
    LocationMarkerIcon,
    PhoneIcon,
    MailIcon,
  } from "@heroicons/react/solid";

const ContactDetails: React.FC = () => {
    return (
      <div className="flex flex-col gap-10 md:flex-row justify-around mt-28">
        <ContactDetailCard
          title="Our Phone"
          Icon={<PhoneIcon className="w-14 h-14 text-primary mx-5 my-5" />}
        >
          <p>+7 (212) 654-33-35</p>
          <p>+7 (212) 287-85-22</p>
        </ContactDetailCard>
  
        <ContactDetailCard
          title="Find US"
          Icon={
            <LocationMarkerIcon className="w-14 h-14 text-primary mx-5 my-5" />
          }
        >
          <p>
            Patricia C. Amedee 4401 Waldeck <br /> Street Grapevine Nashville, Tx
            76051
          </p>
        </ContactDetailCard>
  
        <ContactDetailCard
          title="Our Email"
          Icon={<MailIcon className="w-14 h-14 text-primary mx-5 my-5" />}
        >
          <p>info@houseofwood.com</p>
          <p>help@houseofwood.com</p>
        </ContactDetailCard>
      </div>
    );
  };
  
  const ContactDetailCard: React.FC<{ Icon: React.ReactNode; title: string }> = (
    props
  ) => {
    return (
      <div className="flex items-center gap-6">
        <div className="flex items-center justify-center bg-gray-100 rounded-2xl">
          {props.Icon}
        </div>
        <div>
          <h6 className="text-2xl font-bold">{props.title}</h6>
          <div className="text-base text-gray-600 mt-2">{props?.children}</div>
        </div>
      </div>
    );
  };

export default ContactDetails;