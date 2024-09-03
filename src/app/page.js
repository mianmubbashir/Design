"use client";
import { useState } from "react";
import { FaLessThan } from "react-icons/fa6";
import Image from "next/image";

export default function Home() {
  const [activeOption, setActiveOption] = useState({
    title: "Industry experts",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, recusandae nesciunt. Mollitia quidem.",
    image: "/image2.png",
  });

  const options = [
    {
      title: "Industry experts",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, recusandae nesciunt. Mollitia quidem.",
      image: "https://via.placeholder.com/400",
    },
    {
      title: "Dedicated Team",
      description:
        "Our team is dedicated to providing the best service to our clients.",
      image: "https://via.placeholder.com/400/FF0000",
    },
    {
      title: "Outcome focused",
      description:
        "We focus on delivering outcomes that meet your business goals.",
      image: "https://via.placeholder.com/400/00FF00",
    },
    {
      title: "High Quality Service",
      description: "We provide high quality services that exceed expectations.",
      image: "https://via.placeholder.com/400/0000FF",
    },
    {
      title: "Cyber Security Expert",
      description:
        "Our experts ensure your business is secure from cyber threats.",
      image: "https://via.placeholder.com/400/FFFF00",
    },
  ];

  return (
    <section className="bg-white text-center h-screen">
      <div className="px-20 h-full flex flex-col justify-center">
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-gray-600 uppercase text-lg tracking-widest mb-6">
            Why Choose Us
          </h2>
          <h3 className="text-3xl font-bold mt-2 text-black">
            We Are Different From Others
          </h3>
          <p className="text-gray-800 text-lg my-6 w-[55rem] mx-[55rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            cupiditate accusantium recusandae soluta explicabo hic! Facere unde
            nam accusantium natus?
          </p>
        </div>
        <div className="flex flex-wrap justify-between items-center">
          <div className="relative flex-1 max-w-full md:max-w-1/2 p-4">
            <div className="relative flex justify-center">
              <div className="relative top-0 left-[5rem] bg-red-700 bg-opacity-80 text-white p-6 rounded-[20rem] max-w-xs h-[20rem] w-[20rem] flex flex-col justify-center text-start">
                <h4 className="font-semibold mb-2 ml-5" id="active-title">
                  {activeOption.title}
                </h4>
                <p className="ml-5" id="active-description">
                  {activeOption.description}
                </p>
              </div>
              <div className="w-[20rem] max-w-[20rem]">
                <Image
                  src={activeOption.image}
                  alt={activeOption.title}
                  width={400}
                  height={400}
                  className="rounded-[20rem] w-full"
                  id="active-image"
                />
              </div>
            </div>
          </div>
          <div className="w-[25rem] max-w-[25rem] md:max-w-2/5 p-4">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => setActiveOption(option)}
                className={`flex justify-between items-center w-full text-left px-4 py-3 mb-2 rounded-l-[5rem] transition-colors ${
                  activeOption.title === option.title
                    ? "bg-red-700 text-white font-bold "
                    : "bg-gray-200 text-gray-900 font-bold hover:bg-red-500 hover:text-white"
                }`}
              >
                <FaLessThan />
                {option.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
