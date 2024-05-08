/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Footer from "../components/core/Footer";
import Navbar from "../components/core/Navbar";
import ServiceList from "./components/ServiceList";
import Divider from "../about/components/Divider";
import { HamburgerIcon } from "@chakra-ui/icons";
import MobileDrawer from "../components/core/MobileDrawer";
import { useDisclosure } from "@chakra-ui/react";
import Head from "next/head";

function index() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Head>
        <title>Law Dvv - Our Service</title>
      </Head>
      <Navbar />
      {/* Mobile Navbar */}
      <div className="md:hidden px-10 sticky top-0 z-50 bg-gradient-to-b from-primary to-secondary h-16 flex justify-between items-center">
        <h1 className="text-xl text-white"></h1>
        <HamburgerIcon boxSize={"6"} onClick={onOpen} color="white" />
      </div>
      <MobileDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <ServiceList />
      <Divider />
      <Footer />
    </>
  );
}

export default index;
