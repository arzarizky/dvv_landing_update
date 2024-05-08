import { Flex, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";
import adaro from "../../../assets/adaro123.png";
import pertamina from "../../../assets/pertamina.png";
import unilever from "../../../assets/unilever123.png";
import wika from "../../../assets/wika.png";

function sponsorship() {
  return (
    <Flex align="center" className="md:mb-0 mb-6">
      <SimpleGrid columns={{ xs: 2, md: 4 }} spacing={10}>
        <Image src={adaro} alt="wika" />
        <Image src={unilever} alt="unilever" />
        <Image src={pertamina} alt="pertamina" />
        <Image src={wika} alt="wika" />
      </SimpleGrid>
    </Flex>
  );
}

export default sponsorship;
