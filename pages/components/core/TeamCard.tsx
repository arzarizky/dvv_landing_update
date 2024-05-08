import React from "react";
import Mail from "../../../assets/Mail";

function TeamCard({ image, name, position, email }: any) {
  return (
    <div className="h-full mt-10">
      <div className=" bg-gray-300 rounded-sm">
        <div className="flex justify-center z-0">{image}</div>
        <div className="bg-white rounded-md md:px-4 px-2 py-2 max-w-xs md:translate-x-7 -translate-x-4 backdrop-blur-sm bg-opacity-90 -translate-y-32 md:w-auto w-60 absolute">
          <h1 className="text-dvBlue text-2xl">{name}</h1>
          <text className="text-sm">{position}</text> 
          {/* <div className="flex gap-x-2 mt-4 items-center">
            <Mail />
            <text className="text-sm">{email}</text>
          </div>  */}
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
 