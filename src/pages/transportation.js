/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";

const Transportation = () => {
  const groundTransportationOptions = [
    {
      title: "Hermanos Roldan Tours",
      description:
        "This company was recommended to us through the local expat community in Mexico City. They have various vehicle sizes, and the owner, Luis, speaks great English. Quotes are on a case by case basis",
      details: [
        "Email: contacto@hermanosroldantours.com",
        "Website: www.hermanosroldantours.com",
        "Phone: +52-55-3895-3946",
        "IG: tours.hermanosroldan",
        "Website: www.hermanosroldantours.com"
      ],
      image: "/images/shuttle.png",
      link: "https://hermanosroldantours.com",
    },
    {
      title: "Bajo la Montaña Preferred Shuttles",
      description:
        "Our wedding venue frequently works with this shuttle service, and their prices are great, especially if you ride with a group. We highly recommend this option, which includes insurance. If you'd like to use this option, please let us know and we will help to coordinate based on your flight info.",
      details: [
        "20 passenger van, one way - 11500 MXN (about 640 USD)",
        "14 passenger van, one way - 10200 MXN (about 570 USD)",
        "3 passenger car, one way - 5000 MXN (about 280 USD)"
      ],
      image: "/images/shuttle.png",
      link: "",
    },
    {
      title: "Transfeero",
      description:
        "This service allows you to book transportation online. They'll take you directly from the CDMX airport to your hotel in Tepoztlan. This works and the online booking is nice, but it's more expensive than the other option.",
      image: "/images/transfeero.png",
      link: "https://www.transfeero.com/en",
    }
  ];

  return (
    <Layout>
      <div className="py-[140px] max-w-[90%] mx-auto">
        <div
          className="z-[10] bg-white/[0.9] p-[24px] lg:p-[40px] flex flex-col items-center
            gap-[20px] text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl mb-[16px]">
            Transportation
          </h2>
          <p className="font-semibold text-darkGray text-xl mb-[60px] text-[#7baac8]">
            The best airport to fly into in order to get to Tepoztlan is in Mexico City. You have a few options for getting from Benito Juarez International
            Airport (Mexico City) to Tepoztlan. Please let us know if you have any questions or concerns about
            transportation and we will definitely help you out!
          </p>
          <div className="flex flex-col space-y-12">
            {groundTransportationOptions.map((option) => (
              <>
                {option?.link ? (
                  <a
                    key={option.title}
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-[60px]"
                  >

                    <div className="w-[60px] h-[60px] min-w-[60px] max-w-[60px]">
                      <img
                        src={option.image}
                        alt={option.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-[12px]">
                      <div className="flex flex-col items-start text-left">
                        <h3 className="font-bold text-lg">{option.title}</h3>
                        <p className="text-gray-600">{option.description}</p>
                        <ul>
                          {option?.details?.map((detail, index) => (
                            <li key={index} className="font-bold">{detail}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div
                    key={option.title}
                    className="flex items-center gap-[60px]"
                  >
                    <div className="w-[60px] h-[60px] min-w-[60px] max-w-[60px]">
                      <img
                        src={option.image}
                        alt={option.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start text-left gap-[12px]">
                      <h3 className="font-bold text-lg">{option.title}</h3>
                      <p className="text-gray-600">{option.description}</p>
                      <ul>
                        {option?.details?.map((detail, index) => (
                          <li key={index} className="font-bold">{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Transportation;
