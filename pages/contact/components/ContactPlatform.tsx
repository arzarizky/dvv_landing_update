import { Button, Fade, Input, Textarea, useToast, Box } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useInViewport } from "react-in-viewport";
import Mail from "../../../assets/Mail_alt";
import Phone from "../../../assets/Phone";
import { sendContactForm } from "../../../lib/api";

function ContactPlatform() {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(false);
  const data = {
    email: email,
    name: name,
    message: message,
  };
  const clearForm = () => {
    setMessage("");
    setEmail("");
    setName("");
  };
  const sendEmail = () => {
    setLoading(true);
    sendContactForm(data)
      .then((res: any) => {
        console.log(res);
        if (res.status !== 200) {
          toast({
            title: "Failed",
            description: "Please fill all the field correctly",
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "bottom-right",
          });
        } else if (res.status === 200) {
          toast({
            title: "Email Sent",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "bottom-right",
          });
        }
      })
      .catch((err: any) => {
        toast({
          title: "Failed",
          description: "Please fill all the field correctly",
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "bottom-right",
        });
      })
      .finally(() => {
        setLoading(false), clearForm();
      });
  };
  const ref = useRef(null);
  const { inViewport } = useInViewport(
    ref,
    { rootMargin: "180px" },
    { disconnectOnLeave: false },
    {}
  );
  return (
    <div className="md:px-20 px-10 bg-gray-100 h-full py-10">
      <div className="px-8 py-8 bg-white rounded-md md:-translate-y-40 -translate-y-24">
        <h1 className="text-dvBlue text-4xl">Contact Us</h1>
        <div className="md:flex md:gap-x-10 mt-7">
          <div className="md:w-1/2 w-full">
            <text className="text-sm font-semibold">Name</text>
            <Input
              placeholder="Enter Your Name"
              mb={7}
              className="!h-11 mt-1"
              value={name}
              onChange={(ev: any) => setName(ev.target.value)}
            />
            <text className="text-sm font-semibold">Email</text>
            <Input
              placeholder="Enter Your Email"
              mb={7}
              className="!h-11 mt-1"
              value={email}
              onChange={(ev: any) => setEmail(ev.target.value)}
            />
          </div>
          <div className="md:w-1/2 w-full">
            <text className="text-sm font-semibold">Massage</text>
            <Textarea
              placeholder="Massege"
              className="!h-36 mt-1 md:mb-0 mb-7"
              onChange={(ev: any) => setMessage(ev.target.value)}
              value={message}
            />
          </div>
        </div>
        <Button
          onClick={sendEmail}
          className="!flex !justify-center !px-16 !py-3 !bg-maroon !rounded-md hover:!opacity-80 !transition-opacity !duration-100 text-white text-base font-['Poppins']"
          isLoading={isLoading}
        >
          Send
        </Button>
      </div>
      <Fade in={inViewport}>
        <Box ref={ref}>
          <div className="w-full bg-white rounded-md -translate-y-10">
            <div className="p-8">
              <h1 className="text-dvBlue text-3xl">Contact Platform</h1>
              <div className="flex gap-x-2 mt-5 items-center">
                <Phone />
                <text className="text-lg text-dvBlue">
                  Telephone : 6221-57944801
                </text>
              </div>
              <div className="flex gap-x-2 mt-5 items-center">
                <Phone />
                <text className="text-lg text-dvBlue">
                  Fax : 6221-57944802
                </text>
              </div>
              <div className="flex gap-x-2 mt-5 items-center">
                <Mail />
                <text className="text-lg text-dvBlue">
                  E-mail : dw@dwalaw.co.id
                </text>
              </div>
            </div>
            <div className="flex items-end transition-all delay-100 bg-maroon" />
          </div>
        </Box>
      </Fade>
    </div>
  );
}

export default ContactPlatform;
