import { Flex, ScaleFade, SimpleGrid } from "@chakra-ui/react";
import { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import CardService from "./cardService";

function ServiceList() {
  const ref = useRef(null);
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "-40px" },
    { disconnectOnLeave: false },
    {}
  );
  return (
    <div className="bg-gradient-to-b from-primary to-darkBlue py-14">
      <div className="flex justify-center">
        <h1 className="text-4xl text-white mb-4">Our Service</h1>
      </div>
      <div className="flex justify-center">
        <p className="text-base font-normal text-center text-white mb-4 md:w-auto w-80">
          DW can assist all clients, from individuals to international
          corporations, <br /> across the full range of legal services for
          business
        </p>
      </div>
      <div className="flex justify-center">
        <hr className="border border-maroon md:w-1/6 w-1/2 md:mb-0 mb-6" />
      </div>
      <ScaleFade initialScale={0.9} in={inViewport}>
        <Flex
          justify={"center"}
          mt={{ sm: 20, md: 28 }}
          px={{ xs: "40px", md: "80px" }}
          ref={ref}
        >
          <SimpleGrid columns={1} spacing={10}>
            <CardService />
          </SimpleGrid>
        </Flex>
      </ScaleFade>
    </div>
  );
}

export default ServiceList;
