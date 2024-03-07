import React from "react";
import { Link } from "react-router-dom";

function TitleCard({ subTitle }) {
  return (
    <Link to="/subTitlePage" state={subTitle}>
      <div className="bg-white rounded-[2em] shadow-md lg:max-w-[17em] mt-[4%] lg:mt-[0%] m-6 hover:cursor-pointer">
        <img
          className="object-cover w-full rounded-t-[2em] border-b-[0.5em] border-[#282c34] h-64"
          src={subTitle.image}
          alt="photoOfTeamMember"
        />
        <div className="p-4 flex flex-col items-center">
          <h4 className="text-lg font-semibold leading-5 text-[#424A4F] ">
            {subTitle.title}
          </h4>
          {/* <p className="text-lg mb-2 leading-10">{job}</p> */}
        </div>
      </div>
    </Link>
  );
}

export default TitleCard;
