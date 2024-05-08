/* eslint-disable react/no-unescaped-entities */
import { Fade } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";

function AboutContent() {
  const ref = useRef(null);
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "-100px" },
    { disconnectOnLeave: false },
    {}
  );
  return (
    <div className="p-20 md:flex items-center justify-between bg-gray-100">
      <div className="md:w-1/2 w-full md:mb-0 mb-5" ref={ref}>
        <Fade in={inViewport}>
          <h1 className="text-4xl text-dvBlue">
            Introduction About <br /> Destivano Wibowo & <br /> Associates
          </h1>
        </Fade>
      </div>
      <div className="md:w-1/2 w-full" ref={ref}>
        <Fade in={inViewport}>
          <p className="text-base font-medium text-justify">
            <span className="font-bold">Destivano Wibowo & Associates</span> is
            not a new firm (DW). It was a rebranding of Wibowo Hadiwijaya & Co,
            a mid-size law firm that had been recognized in Indonesian's legal
            markets for more than 15 years. <br />
            <br /> DW advises clients on almost every aspect of business: from
            banking and finance, lease finance, complex restructuring process,
            mining, oil and gas, aviation, shipping, construction, anti-trust
            law, general corporate issues, litigation, bankruptcy matters,
            mergers & acguisition, condominium, and real estate issues, labor
            and employment law, from capital raising and entity formation to
            corporate growth and expansion locally and nationally. <br /> <br />
            The firm was founded on and continues to adhere to several guiding
            principles of conduct, professionalism and practice, and these
            enduring principles revolve around integrity, openness, trust,
            mutual support and cooperation, a strong work ethic, and client
            service orientation. We are dedicated to servicing our clients to
            the best of our ability, handling their cases with the strongest
            sense of urgency, and always being accessible. <br /> <br /> In
            2019, 2021, and 2022 DW law firm had been honoured to be inducted to
            the lists of “Top 100 Indonesian Law Firms 2021”, "Top 100
            Indonesian Law Firms 2022”, “Recognized Midsized Corporate Practices
            2021”, as well as “Midsized Non Litigation Law Firms 2022” all
            compiled by www.hukumonline.com.
          </p>
        </Fade>
      </div>
    </div>
  );
}

export default AboutContent;
