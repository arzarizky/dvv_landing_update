/* eslint-disable react-hooks/rules-of-hooks */
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useInViewport } from "react-in-viewport";
import founder from "../../../assets/founder.png";

function main() {
  const ref = useRef(null);
  const [isHover, setIsHover] = useState(false);

  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "-200px" },
    { disconnectOnLeave: false },
    {}
  );

  return (
    <div className="home">
      <div className="flex h-screen items-center justify-between">
        <Box className="max-w-3xl p-20" ref={ref}>
          <h1 className="text-white text-5xl mb-4">
            Destivano Wibowo <br /> & Associates
          </h1>
          <text className="text-2xl text-white font-normal">
            We can assist all clients, from individuals to <br /> international
            corporations, across the full range of <br />
            legal services for all business category
          </text>
          <div className="mt-10">
            <Link href="/contact">
              <button
                onMouseOver={() => setIsHover(true)}
                onMouseOut={() => setIsHover(false)}
                className="bg-maroon py-2 hover:shadow-lg transition ease-in-out px-9 text-left rounded-md flex justify-between items-center gap-x-5"
              >
                <div>
                  <text className="text-white text-xs">Want to talk?</text>{" "}
                  <br />
                  <text className="text-white text-base font-semibold">
                    Request Consulation
                  </text>
                </div>
                <div
                  className={`transition ease-in-out ${isHover && "translate-x-3"
                    }`}
                >
                  <ArrowForwardIcon color={"white"} boxSize={"24px"} />
                </div>
              </button>
            </Link>
          </div>
        </Box>
        <div className="md:flex hidden h-full items-end">
          {/* <Image src={founder} alt="founder" width={600} /> */}
        </div>
      </div>
    </div>
  );
}

export default main;
