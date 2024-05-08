import React, { useState } from "react";
import Mail from "../../../assets/Mail";

function AssociatesCard() {
  const [associates1, setAssociates1] = useState(false);
  const [associates2, setAssociates2] = useState(false);
  return (
    <div className="md:h-72">
      <div
        onMouseOver={() => setAssociates1(true)}
        onMouseOut={() => setAssociates1(false)}
        className="w-full bg-white rounded-md transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 mb-5 mt-5"
      >
        <div className="p-5">
          <h1 className="text-dvBlue text-3xl">Ragil Surya Septiantoro</h1>
          <text className="text-sm">Junior Partner</text>
          <div className="flex gap-x-2 mt-4 items-center">
            <Mail />
            <text className="text-sm">Email : ragil@dwalaw.co.id</text>
          </div>
        </div>
        <div
          className={`flex items-end transition-all delay-100 bg-maroon ${associates1 ? "h-1" : "h-0"
            }`}
        />
      </div>
    </div>
  );
}

export default AssociatesCard;
