import { Box } from "@chakra-ui/react";

function Footer() {
  return (
    <div className="p-20 bg-gradient-to-b from-dvBlue to-darkerBlue">
      <div className="md:flex justify-between mb-3">
        <div>
          <h1 className="text-3xl text-white mb-3">Address</h1>
          <text className="text-lg text-white">
            Menara Karya 7th Floor Unit B&C <br />H.R. Rasuna Said Block X-5 Kav.1-2<br />
            Jakarta 12950 - Indonesia
          </text>
          <hr className="border border-white w-1/4 mt-3 mb-12" />
        </div>
        <div className="md:flex gap-x-20">
          <Box className="md:mt-0 mt-8">
            <div className="mb-3">
              <text className="text-xl text-white font-semibold !mb-2">
                Contact Us
              </text>
            </div>
            <div className="mb-2">
              <text className="text-base text-white font-normal">
                Telephone : 6221-57944801
              </text>
            </div>
            <div className="mb-2">
              <text className="text-base text-white font-normal">
                Fax : 6221-57944802
              </text>
            </div>
            <div className="mb-2">
              <text className="text-base text-white font-normal">
                E-mail : dw@dwalaw.co.id
              </text>
            </div>
          </Box>
        </div>
      </div>
      <text className="text-white text-xs font-light">
        ©All rights reserved DW Law
      </text>
    </div>
  );
}

export default Footer;
