import { useState } from "react";

const Testimonials = () => {
  return (
    <div className="mt-20 pt-20 bg-[#f5f5f5] w-[100vw] -ml-10 lg:-ml-20">
      <div className="text-center">
        <h3 className="font-extrabold text-3xl">Testimonials</h3>
        <p className="font-normal text-sm">
          What the people think about our service.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mx-10 lg:mx-20 mt-10">
        <TestimonialCard
          name="Denis Zakerburg"
          post="Marketing Management Remmi"
          testimonial="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
        />
        <TestimonialCard
          name="Robert Anyino"
          post="Marketing Management Remmi"
          testimonial="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
        />
        <TestimonialCard
          name="Mehmet Parblo"
          post="Marketing Management Remmi"
          testimonial="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
        />
      </div>
      <div className="from-[#f5f5f5] to-white bg-gradient-to-b h-10" />
    </div>
  );
};

export default Testimonials;

const TestimonialCard: React.FC<{
  name: string;
  post: string;
  testimonial: string;
}> = ({ name, post, testimonial }) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div className="bg-white rounded-2xl p-8 group border-transparent border-2 hover:border-primary transform transition-all duration-500 ease-in-out hover:shadow-2xl">
      <div className="flex gap-4 items-center md:flex-col md:items-start">
        <TestimonialIcon className="h-10 w-12 text-[#c8c8c8] group-hover:text-primary duration-300 ease-in-out" />
        <div className="">
          <p className="text-xl capitalize font-bold group-hover:text-primary duration-300 ease-in-out">
            {name}
          </p>
          <p className="capitalize text-sm text-[#0201019e]">
            {post}
          </p>
        </div>
      </div>
      <p className="text-[#3d3d3d] text-sm mt-4">
        {testimonial}
      </p>
    </div>
  );
};

const TestimonialIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="74"
    height="60"
    viewBox="0 0 74 60"
    className={className}
  >
    <g transform="translate(0 -0.102)">
      <path
        d="M17.5,60a2.406,2.406,0,0,1-2.365-2.446v-21.2H2.365A2.406,2.406,0,0,1,0,33.913V2.446A2.406,2.406,0,0,1,2.365,0h30.27A2.406,2.406,0,0,1,35,2.446V33.913a2.546,2.546,0,0,1-.029.382.125.125,0,0,1,0,.028l-.053.229-.876,2.817L30.839,47.875l-2.345,7.178-.4,1.215-.377,1.354a6.758,6.758,0,0,1-.57,1.362A2.319,2.319,0,0,1,25.225,60Z"
        transform="translate(74 60.102) rotate(180)"
        fill="currentColor"
      ></path>
      <path
        d="M17.5,60a2.406,2.406,0,0,1-2.365-2.446v-21.2H2.365A2.406,2.406,0,0,1,0,33.913V2.446A2.406,2.406,0,0,1,2.365,0h30.27A2.406,2.406,0,0,1,35,2.446V33.913a2.546,2.546,0,0,1-.029.382.125.125,0,0,1,0,.028l-.053.229-.876,2.817L30.839,47.875l-2.345,7.178-.4,1.215-.377,1.354a6.758,6.758,0,0,1-.57,1.362A2.319,2.319,0,0,1,25.225,60Z"
        transform="translate(35 60.102) rotate(180)"
        fill="currentColor"
      ></path>
    </g>
  </svg>
);
