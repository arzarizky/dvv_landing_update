/* eslint-disable react-hooks/rules-of-hooks */
import { Card, CardBody } from "@chakra-ui/react";
import Service1 from "../../../assets/Service1";
import Service2 from "../../../assets/Service2";
import Service3 from "../../../assets/Service3";
import Service4 from "../../../assets/Service4";
import Service5 from "../../../assets/Service5";
import Service6 from "../../../assets/Service6";
import Service7 from "../../../assets/Service7";
import Service8 from "../../../assets/Service8";
import Service9 from "../../../assets/Service9";

function cardService() {
  const serviceList = [
    {
      icon: <Service1 />,
      title: "Corporate & Investment",
      subTitle:
        "Our corporate and investment practices provide services to private, public, domestic and international companies in various business sectors. DW provides a comprehensives range of services for establishment and operation of a company in Indonesia. DW provides advice and assistance regarding all corporate regulatory matters, including merger and acguisition and restructuring transaction. We also assist foreign and domestic investors regarding the documentation related to their investment, including providing advises relating to the entire legal process which covers the application, licensing, and establishment of the companies.",
    },
    {
      icon: <Service2 />,
      title: "Banking, Finance, Insurance and Restructuring",
      subTitle:
        "DW provides assistance and advices related to banking, finance, insurance and restructuring, including lending and debt financing transaction involving bank, non-bank lenders and borrowers in Indonesia. Our services include project finance, structured finance, and other financing. DW also provides advices on the formation and licensing of new banks, financial service companies, insurances, and other financial institutions in every legal aspect of the entities” operations and regulatory compliance.",
    },
    {
      icon: <Service3 />,
      title: "Mining, Oil and Gas Projects",
      subTitle:
        "Mining, Oil and Gas sectors in Indonesia are open for investment activities. DW assists foreign and domestic clients by providing sustainable legal solution, taking into account the clients” commercial decision, in many related projects. We assist and advice clients for every legal matter relating to Sale and Purchase Agreements, PSC contract, the Joint Operating Agreement, the Farm-Out Agreement, the Off Take Agreement and other related agreements in Mining, Oil and Gas sectors.",
    },
    {
      icon: <Service5 />,
      title: "Labour and Employment",
      subTitle:
        "Labour and employment issue were always become daily issues in most of the company in Indonesia, especially due to the rapid change of the regulations in the labour sector. DW provides the client with the solution for the structure of the employment regulations as well as in relation to the employment of the expatriate. DW also provides assistance in relation to dispute which occurs with respect to the employee, thus providing the most suitable resolution to settle the labour issue to meet the interest of the client",
    },
    {
      icon: <Service6 />,
      title: "Real Estate and Construction",
      subTitle:
        "We counsel developers, borrowers, and lenders on all types of real estate transaction.",
    },
    {
      icon: <Service7 />,
      title: "Infrastructures and Utilities",
      subTitle:
        "Infrastructure and utilities has always been one of the backbone areas of practice in Indonesia. We provide advices and assistances to clients in every legal matter of infrastructures and utilities.",
    },
    {
      icon: <Service8 />,
      title: "Financial Technology",
      subTitle:
        "Financial Technology has become an emerging market in Indonesia. DW can provide assistance and advise domestic and foreign clients to implement every regulation, legal matters and also the operations related to their business in the respected field of business.",
    },
    {
      icon: <Service4 />,
      title: "Commercial Litigation & Alternative Dispute Resolution.",
      subTitle:
        "DW is able to assist and act as attorney in representing the client through necessary legal processes of settlement of dispute, whether by court or through other forms of settlement. DW is also able to represent clients in handling any dispute settled through arbitration, nationally or internationally.",
    },
    {
      icon: <Service9 />,
      title: "Projects and Energy Resources",
      subTitle:
        "DW also provides legal services related to energy resources, including assisting and advising clients for every legal matter related to the establishment of new companies to all aspects of their operation, including drafting the EPC contract, obtaining government facilities on capital investment in energy resources sector.",
    },
  ];
  return (
    <>
      {serviceList.map((item: any, index: any) => (
        <Card
          bg="white"
          maxW="full"
          p={4}
          key={index}
          className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 cursor-pointer"
        >
          {/* service 1 */}
          <CardBody>
            {item?.icon}
            <h1 className="text-dvBlue mt-5 text-3xl">{item?.title}</h1>
            <p className="text-sm font-normal text-justify">{item?.subTitle}</p>
          </CardBody>
        </Card>
      ))}
    </>
  );
}

export default cardService;
