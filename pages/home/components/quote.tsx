/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Collapse, Fade, SlideFade } from "@chakra-ui/react";
import { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import "swiper/css/bundle";
import ContactUs from "./contactUs";

function team() {
  const ref = useRef(null);
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "-60px" },
    { disconnectOnLeave: false },
    {}
  );
  return (
    <div className="quote">
      <Box className="md:px-20 md:py-20 px-20 py-16">
        <SlideFade offsetY="50px" in={inViewport}>
        </SlideFade>
      </Box>
      <Box className="md:px-20 pb-20 px-10" ref={ref}>
        <Fade in={inViewport}>
          <Box ref={ref}>
            <ContactUs />
          </Box>
        </Fade>
      </Box>
    </div>
  );
}

export default team;
