import React, { useRef } from "react";
import { Box, Fade, ScaleFade } from "@chakra-ui/react";
import { useInViewport } from "react-in-viewport";

function Quote() {
  const ref = useRef(null);
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "-50px" },
    { disconnectOnLeave: false },
    {}
  );
  return (
    <div className="quote">
      <Box className="md:px-20 md:py-20 px-20 py-16">
      </Box>
      <Box className="md:px-20 pb-20 px-10"></Box>
    </div>
  );
}

export default Quote;
