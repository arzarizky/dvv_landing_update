/* eslint-disable react-hooks/rules-of-hooks */
import { Box, ScaleFade, SlideFade } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";

function about() {
  const ref = useRef(null);
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "-180px" },
    { disconnectOnLeave: false },
    {}
  );

  return (
    <Box ref={ref} className="bg-gray-100">
      <ScaleFade initialScale={0.95} in={inViewport}>
        <Box className="p-20 md:flex items-center justify-between">
          <div className="md:w-1/2 w-full md:mb-0 mb-5">
            <h1 className="text-4xl text-dvBlue">
              we will continue to <br /> provide what you need <br /> about the
              law
            </h1>
          </div>
          <Box className="md:w-1/2 w-full">
            <p className="text-base font-normal text-justify">
              The firm was founded on and continues to adhere to several guiding
              principles of conduct, professionalism and practice, and these
              enduring principles revolve around integrity, openness, trust,
              mutual support and cooperation, a strong work ethic, and client
              service orientation. We are dedicated to servicing our clients to
              the best of our ability, handling their cases with the strongest
              sense of urgency, and always being accessible
            </p>
          </Box>
        </Box>
      </ScaleFade>
    </Box>
  );
}

export default about;
