import React, { useRef } from "react";
import TeamCard from "../../components/core/TeamCard";
import founder from "../../../assets/founder_alt.png";
import Image from "next/image";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Box,
  Fade,
} from "@chakra-ui/react";
import Mail from "../../../assets/Mail";
import Associates from "./Associates";
import { useInViewport } from "react-in-viewport";
Image;

function Bioadata() {
  const ref = useRef(null);
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "180px" },
    { disconnectOnLeave: false },
    {}
  );
  return (
    <div className="md:p-20 p-12 bg-gray-100">
      <h1 className="text-dvBlue text-4xl mb-2">Founder and Managing Partner</h1>
      <hr className="border border-maroon w-founderUnderline mb-4" />
      <h1 className="text-dvBlue mt-4 text-2xl">Destivano Wibowo, S.H., LL.M</h1>
      <text className="text-sm">Founder and Managing Partner</text>
      <div className="md:flex gap-x-40 mt-3">
        <div className="md:w-3/4">
          <Fade in={inViewport}>
            <Box ref={ref}>
              <text className="font-semibold text-2xl">Introduction</text>
              <p className="text-base font-normal text-justify mt-1 mb-4">
                Mr. Wibowo obtained his law degree from University of Trisakti,
                Faculty of Law, Jakarta, in 1993 and Master of Law (LL.M) from
                Boston University School of Law, Graduate International Banking
                Program in January 1997. <br /> <br /> Prior to establishing DW,
                Mr. Wibowo was a Senior Lawyer in a major Law Firm in Jakarta.
                Mr. Wibowo”s practice involved complex banking and leasing
                transactions, negotiated and drafted various loan documents and
                debt restructuring documentation for clients, advising clients
                in establishing limited liability companies, (within the
                framework of foreign investment and/or domestic investment),
                general corporate, anti-trust, aircraft lease financing, labor,
                joint venture, mergers and acguisitions, alternative dispute
                resolution, plantation, forestry, commercial litigation,
                bankruptey matter, mining and energy related project.
              </p>
            </Box>
          </Fade>
          <Fade in={inViewport}>
            <Box ref={ref}>
              <text className="font-semibold text-2xl">
                Professional Affiliation:
              </text>
              <UnorderedList mt={4} mb={4}>
                <ListItem>
                  <text className="text-base font-normal text-justify">
                    Member of Indonesian Advocates Association (Perhimpunan
                    Advokat Indonesia -PERADI)
                  </text>
                </ListItem>
                <ListItem>
                  <text className="text-base font-normal text-justify">
                    Registered lawyer in Indonesia Financial Services Authority
                    (Otoritas Jasa Keuangan RI)
                  </text>
                </ListItem>
                <ListItem>
                  <text className="text-base font-normal text-justify">
                    Registered as Administrator and Curator in Ministry of Law
                    and Human Rights
                  </text>
                </ListItem>
              </UnorderedList>
            </Box>
          </Fade>
          <text className="font-semibold text-2xl">
            Professional Affiliation:
          </text>
          <UnorderedList mt={4} mb={4}>
            <ListItem>
              <text className="text-base font-normal text-justify">
                The Business Competition Law Practice and its problems, Journal
                concerning Business Competition, published by the Research
                Institution for Business Competition, Faculty of Law, University
                of Indonesia, Volume 1, May 2004,
              </text>
            </ListItem>
            <ListItem>
              <text className="text-base font-normal text-justify">
                Author of the Anti-Trust Law Practice Book (“Hukum Acara
                Persaingan Usaha”), a book discussing the procedures for
                anti-trust law practice in the Indonesian Civil Court and
                Supreme Court, published in January 2005.
              </text>
            </ListItem>
          </UnorderedList>
          <text className="font-semibold text-2xl">Contact</text>
          <div className="flex gap-x-2  items-center">
            <Mail />
            <text className="text-lg text-dvBlue">
              Email : ivan@dwalaw.co.id
            </text>
          </div>
        </div>
      </div>
      <Associates />
    </div>
  );
}

export default Bioadata;
