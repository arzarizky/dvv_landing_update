/* eslint-disable react-hooks/rules-of-hooks */
import { HamburgerIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Footer from "../components/core/Footer";
import MobileDrawer from "../components/core/MobileDrawer";
import Navbar from "../components/core/Navbar";
import Bioadata from "./components/Bioadata";
import Header from "./components/Header";

function index() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Head>
        <title>Law Dvv - Our Team</title>
      </Head>
      <Navbar />
      {/* Mobile Navbar */}
      <div className="md:hidden px-10 sticky top-0 z-50 bg-gradient-to-b from-primary to-secondary h-16 flex justify-between items-center">
        <h1 className="text-xl text-white"></h1>
        <HamburgerIcon boxSize={"6"} onClick={onOpen} color="white" />
      </div>
      <MobileDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

      <Header />
      <Bioadata />
      <Footer />
    </>
  );
}

export default index;
