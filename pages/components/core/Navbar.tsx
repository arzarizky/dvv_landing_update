import React from "react";
import { useRouter } from "next/router";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import MobileDrawer from "./MobileDrawer";
import Link from "next/link";

function Navbar() {
  const router = useRouter();

  return (
    <>
      <div className="bg-gradient-to-b from-primary to-secondary md:flex hidden justify-between items-center h-24 px-20 shadow-md sticky top-0 z-50">
        <h1 className="text-white text-4xl"></h1>
        <div className="flex items-center gap-x-11">
          <Link href="home">
            <text
              className={`${router.pathname.split("/")[1] == "home"
                  ? "link-underline-active link-underline-black"
                  : "link-underline link-underline-black"
                } font-medium text-base text-white cursor-pointer py-1`}
            >
              Home
            </text>
          </Link>
          <Link href="/about">
            <text
              className={`${router.pathname.split("/")[1] == "about"
                  ? "link link-underline-active link-underline-black"
                  : "link-underline link-underline-black"
                } font-medium text-base text-white cursor-pointer py-1`}
            >
              About Us
            </text>
          </Link>
          <Link href="/service">
            <text
              className={`${router.pathname.split("/")[1] == "service"
                  ? "link-underline-active link-underline-black"
                  : "link-underline link-underline-black"
                } font-medium text-base text-white cursor-pointer py-1`}
            >
              Our Service
            </text>
          </Link>
          <Link href="team">
            <text
              className={`${router.pathname.split("/")[1] == "team"
                  ? "link-underline-active link-underline-black"
                  : "link-underline link-underline-black"
                } font-medium text-base text-white cursor-pointer py-1`}
            >
              Our Team
            </text>
          </Link>
          <Link href="/contact">
            <button className="bg-transparent border py-2 px-3 rounded-md border-white hover:bg-white hover:text-black text-white transition-colors duration-150">
              <text className="font-medium text-base">Contact Now</text>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
