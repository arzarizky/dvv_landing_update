/* eslint-disable react-hooks/rules-of-hooks */
import { Flex, ScaleFade, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import CardService from "./cardService";

function service() {
  const ref = useRef(null);
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "-50px" },
    { disconnectOnLeave: false },
    {}
  );
  return (
    <div className="h-full bg-gradient-to-b from-primary to-darkBlue pb-20">
      <ScaleFade initialScale={0.9} in={inViewport}>
        <div className="flex justify-center" ref={ref}>
          <div className="md:max-w-xl max-w-lg md:px-0 px-5">
            <h1 className="md:text-4xl text-2xl md:mb-3 mb-2 text-white text-center md:mt-20 mt-14">
              What Industries We Legaly Serve
            </h1>
            <text className="flex justify-center md:text-base text-sm text-center font-normal text-white mb-3">
              DW can assist all clients, from individuals to international
              corporations, across the full range of legal services for business
            </text>
            <div className="flex justify-center">
              <hr className="border border-maroon w-1/2 md:mb-0 mb-7" />
            </div>
          </div>
        </div>
      </ScaleFade>
      <ScaleFade initialScale={0.9} in={inViewport}>
        <Flex justify={"center"} mt={{ sm: 20, md: 28 }} px="80px" ref={ref}>
          <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={10}>
            <CardService />
          </SimpleGrid>
        </Flex>
      </ScaleFade>
      <Flex justify={"center"} mt={{ xs: 14, md: 20 }}>
        <Link href="/service">
          <button className="border border-white py-2 px-6 rounded-md bg-transparent hover:bg-white text-white hover:text-dvBlue transition-colors duration-100">
            <text className="font-semibold text-base">{"See More >"}</text>
          </button>
        </Link>
      </Flex>
    </div>
  );
}

export default service;
