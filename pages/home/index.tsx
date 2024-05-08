import Navbar from "../components/core/Navbar";
import Main from "./components/main";
import Modal from "./components/modal";
import About from "./components/about";
import Service from "./components/service";
import Quote from "./components/quote";
import Divider from "./components/divider";
import Footer from "../components/core/Footer";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import MobileDrawer from "../components/core/MobileDrawer";
import Head from "next/head";

function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Head>
        <title>Law Dvv - Home</title>
      </Head>
      <Navbar />
      {/* Mobile Navbar */}
      <div className="md:hidden px-10 sticky top-0 z-50 bg-gradient-to-b from-primary to-secondary h-16 flex justify-between items-center">
        <h1 className="text-xl text-white"></h1>
        <HamburgerIcon boxSize={"6"} onClick={onOpen} color="white" />
      </div>
      <MobileDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

      {/* main section */}
      <Main />

      {/* Modal */}
      <Modal />

      {/* About content */}
      <About />

      {/* Service */}
      <Service />

      {/* Team */}
      <Quote />
      <Divider />

      <Footer />
    </>
  );
}

export default Home;
