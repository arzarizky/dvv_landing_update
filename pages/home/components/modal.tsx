/* eslint-disable react-hooks/rules-of-hooks */
import Sponsorship from "./sponsorship";
import Image from "next/image";
import building from "../../../assets/building.png";
import Link from "next/link";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import { Box, Fade } from "@chakra-ui/react";

function modal() {
  const buttonContent = "See More >";
  const ref = useRef(null);
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "-100px" },
    { disconnectOnLeave: false },
    {}
  );
  return (
    <Box ref={ref}>
      <Fade in={inViewport}>
        <div className="md:flex w-full justify-center md:px-20 px-10 bg-gray-100">
          {/* content */}
          <div className="bg-white rounded-md shadow-sm md:-translate-y-14 -translate-y-8">
            <div className="md:flex gap-x-4 h-full">
              <Image
                src={building}
                alt="building.png"
                className="rounded-md md:h-full h-1/2"
              />
              <div className="flex items-center md:p-8 lg:p-10">
                {/* text content */}
                <div className="pr-6 lg:pr-20 md:p-0 p-8">
                  <h1 className="md:text-4xl text-xl mb-2 text-dvBlue">
                    About The Firm
                  </h1>
                  <text className="text-base">
                    Destivano Wibowo & Associates is not a new firm (DW). It was
                    a rebranding of a mid-size law firm that had been recognized
                    in Indonesian’s legal markets for more than 15 years. <br />{" "}
                    <br /> DW advises clients on almost every aspect of
                    business: from banking and finance, lease finance, complex
                    restructuring process, mining, oil and gas, aviation,
                    shipping, construction, anti-trust law, general corporate
                    issues, litigation, bankruptcy matters, condominium, and
                    real estate issues, labor and employment law to healthcare,
                    from capital raising and entity formation to corporate
                    growth and expansion locally and nationally.
                  </text>
                  <div className="md:flex justify-between items-center mt-6">
                    {/* <Sponsorship /> */}
                    <Link href="/about">
                      <button className="border border-maroon bg-transparent text-maroon hover:text-white hover:bg-maroon transition-colors duration-100 py-2 px-5 rounded-md">
                        <text className="text-base font-semibold">
                          {buttonContent}
                        </text>
                      </button>
                    </Link>
                  </div>
                </div>
                {/* sponsorship */}
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </Box>
  );
}

export default modal;
