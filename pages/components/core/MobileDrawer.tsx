import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

function MobileDrawer({ isOpen, onClose }: any) {
  const router = useRouter();
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          {/* <h1 className="text-4xl text-dvBlue">DW Law</h1> */}
        </DrawerHeader>

        <DrawerBody>
          <ul>
            <Link href="/home">
              <li className={`cursor-pointer py-3`}>
                <text
                  className={`${
                    router.pathname.split("/")[1] == "home"
                      ? "link-underline-active-drawer link-underline-black-drawer"
                      : "link-underline-drawer link-underline-black-drawer"
                  } font-medium text-base text-black cursor-pointer py-1`}
                >
                  Home
                </text>
              </li>
            </Link>
            <Link href="/about">
              <li className={`cursor-pointer py-3`}>
                <text
                  className={`${
                    router.pathname.split("/")[1] == "about"
                      ? "link-underline-active-drawer link-underline-black-drawer"
                      : "link-underline-drawer link-underline-black-drawer"
                  } font-medium text-base text-black cursor-pointer py-1`}
                >
                  About Us
                </text>
              </li>
            </Link>
            <Link href="/service">
              <li className={`cursor-pointer py-3`}>
                <text
                  className={`${
                    router.pathname.split("/")[1] == "service"
                      ? "link-underline-active-drawer link-underline-black-drawer"
                      : "link-underline-drawer link-underline-black-drawer"
                  } font-medium text-base text-black cursor-pointer py-1`}
                >
                  Our Service
                </text>
              </li>
            </Link>
            <Link href="/team">
              <li className={`cursor-pointer py-3`}>
                <text
                  className={`${
                    router.pathname.split("/")[1] == "team"
                      ? "link-underline-active-drawer link-underline-black-drawer"
                      : "link-underline-drawer link-underline-black-drawer"
                  } font-medium text-base text-black cursor-pointer py-1`}
                >
                  Our Team
                </text>
              </li>
            </Link>
            <Link href="/contact">
              <li className="cursor-pointer py-3">
                <button className="bg-transparent border py-2 px-3 rounded-md border-black hover:bg-black hover:text-white text-black transition-colors duration-150">
                  <text className="font-medium text-base">Contact Now</text>
                </button>
              </li>
            </Link>
          </ul>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default MobileDrawer;
