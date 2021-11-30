const ContactForm: React.FC<{ className?: string }> = ({ className="" }) => {
  const formFieldClasses =
    "bg-gray-100 px-4 py-4 rounded-lg w-full block mt-6 outline-none";

  return (
    <div className={className}>
      <p className="text-primary text-xl">Contact us</p>
      <h2 className="capitalize mt-4 text-5xl font-bold">Get in touch</h2>
      <p className="mt-6 opacity-80">
        Your email address will not be published. Required fields are marked*
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Your Name *"
          className={formFieldClasses}
        />
        <input
          type="email"
          placeholder="Your Email *"
          className={formFieldClasses}
        />
        <textarea
          placeholder="Question *"
          rows={8}
          className={formFieldClasses}
        />

        <button className="primary-btn text-white py-5 mt-8">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
