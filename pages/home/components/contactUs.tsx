/* eslint-disable react-hooks/rules-of-hooks */
import { Button, Input, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";
import { sendContactForm } from "../../../lib/api";
import { useToast } from "@chakra-ui/react";

function contactUs() {
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
            description: res?.message || "Error while sending email",
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
          description: err?.message || "Error while sending email",
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
  return (
    <>
      <div className="px-8 py-8 bg-white rounded-md md:translate-y-44 translate-y-32">
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
            <text className="text-sm font-semibold">Message</text>
            <Textarea
              placeholder="Message"
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
    </>
  );
}

export default contactUs;
