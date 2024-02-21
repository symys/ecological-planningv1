import React from 'react'
import { useLocation } from 'react-router-dom';
import TitleCard from './TitleCard';

function SubTitlePage() {
    const location = useLocation();
    const subObj = location.state
  return (
    <div className="flex flex-col text-[#424A4F]">
      <div className=" font-poppins lg:text-5xl text-3xl leading-10">
        <h1 className="lg:ml-44 lg:mt-20 ml-10 sm:mr-10 md:mr-10 mt-10 text-black">
          {subObj.title}
        </h1>
      </div>
      <div className="text-3xl leading-10">
        <h3 className="lg:ml-44 lg:mt-12 ml-10 mt-2">{'Detayları görmek için bir başlık seçiniz'}</h3>
      </div>
      <div className=" ml-36 mt-[4em] mr-36">
        <div className="font-poppins flex flex-rows justify-items-center flex-wrap -m-6">
          {subObj.subTitles.map((subTitle, index) => {
            return (
              <TitleCard subTitle={subTitle} />
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default SubTitlePage