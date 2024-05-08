import { HamburgerIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Divider from "../about/components/Divider";
import Footer from "../components/core/Footer";
import MobileDrawer from "../components/core/MobileDrawer";
import Navbar from "../components/core/Navbar";
import ContactPlatform from "./components/ContactPlatform";
import Form from "./components/Form";

function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Head>
        <title>Law Dvv - Contact Us</title>
      </Head>
      <Navbar />
      {/* Mobile Navbar */}
      <div className="md:hidden px-10 sticky top-0 z-50 bg-gradient-to-b from-primary to-secondary h-16 flex justify-between items-center">
        
        <HamburgerIcon boxSize={"6"} onClick={onOpen} color="white" />
      </div>
      <MobileDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

      <Form />
      <ContactPlatform />
      <Divider />
      <Footer />
    </>
  );
}

export default index;
