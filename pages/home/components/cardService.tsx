import { Card, CardBody } from "@chakra-ui/react";
import React from "react";
import Service1 from "../../../assets/Service1";
import Service2 from "../../../assets/Service2";
import Service3 from "../../../assets/Service3";
import Service4 from "../../../assets/Service4";
import Service5 from "../../../assets/Service5";
import Service6 from "../../../assets/Service6";

function cardService() {
  const serviceList = [
    {
      icon: <Service1 />,
      title: "Corporate & Investment",
      subTitle:
        "Our corporate and investment practices provide services to private, public, domestic and international companies in various business sectors.",
    },
    {
      icon: <Service2 />,
      title: "Bangking & Finance",
      subTitle:
        "DW provides assistance and advices related to banking, finance, insurance and restructuring, including lending and debt financing transaction involving bank.",
    },
    {
      icon: <Service3 />,
      title: "Mining Industries",
      subTitle:
        "DW assists foreign and domestic clients by providing sustainable legal solution, taking into account the clients’ commercial decision, in many related projects.",
    },
    {
      icon: <Service4 />,
      title: "Commercial Litigation",
      subTitle:
        "DW is able to assist and act as attorney in representing the client through necessary legal processes of settlement of dispute, by court or through other forms of settlement.",
    },
    {
      icon: <Service5 />,
      title: "Labour & Employment",
      subTitle:
        "DW provides the client with the solution for the structure of the employment regulations as well as in relation to the employment of the expatriate.",
    },
    {
      icon: <Service6 />,
      title: "Construction Industries",
      subTitle:
        "We counsel developers, borrowers, and lenders on all types of real estate transaction.",
    },
  ];
  return (
    <>
      {serviceList.map((item: any, index: any) => (
        <Card
          bg="white"
          maxW="md"
          p={4}
          key={index}
          className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 cursor-pointer"
        >
          {/* service 1 */}
          <CardBody>
            {item?.icon}
            <h1 className="text-dvBlue mt-5 text-3xl">{item?.title}</h1>
            <text className="text-sm font-normal text-justify">
              {item?.subTitle}
            </text>
          </CardBody>
        </Card>
      ))}
    </>
  );
}

export default cardService;
