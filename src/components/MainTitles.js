import React from "react";
import geo from "../images/geological.png";
import hill from "../images/hill.png";
import water from "../images/water.png";
import TitleCard from "./TitleCard";

const subTitle = [
  {
    title: "Topoğrafik Yapı",
    subTitles: [
      {
        title: "Yükseklik",
        image: hill,
        subTitles: [
          { title: "Buraya yükseklik girişi alan input alanı eklenecek", image: hill },

        ],
      },
      {
        title: "Eğim",
        image: hill,
        subTitles: [
          { title: "0-5", image: hill },
          { title: "6-10", image: hill },
          { title: "11-15", image: hill },
          { title: "16-20", image: hill },
          { title: "21-25", image: hill },
          { title: "26-30", image: hill },
          { title: "31-35", image: hill },
          { title: "36-40", image: hill },
          { title: "41-45", image: hill },
        ],
      },
      {
        title: "Bakı",
        image: hill,
        subTitles: [
          { title: "Kuzey", image: hill },
          { title: "Kuzeydoğu", image: hill },
          { title: "Doğu", image: hill },
          { title: "Güneydoğu", image: hill },
          { title: "Güney", image: hill },
          { title: "Güneybatı", image: hill },
          { title: "Batı", image: hill },
          { title: "Kuzeybatı", image: hill },
        ],
      },
    ],
    image: hill,
  },
  {
    title: "Jeolojik ve Morfolojik Yapı",
    subTitles: [
      { title: "İstanbul Birliği", image: geo },
      { title: "Istıranca Birliği", image: geo },
    ],
    image: geo,
  },
  {
    title: "Hidrolojik Yapı",
    subTitles: [
      { title: "Doğal Dere", image: water },
      { title: "Kapalı Kesit Dere", image: water },
      { title: "Açık Kesit Dere", image: water },
      { title: "Karma Sistem Kesit Dere", image: water },
    ],
    image: water,
  },
  {
    title: "Toprak Yapısı",
    subTitles: [
      { title: "Büyük Toprak Grupları", image: water },
      { title: "Eğim-Derinlik Kombinasyonu", image: water },
      { title: "Drenaj-Bünye Kombinasyonu", image: water },
      { title: "Drenaj-Tuz-Alkali Kombinasyonu", image: water },
      { title: "Eğim-Bünye-Derinlik Kombinasyonu", image: water },
      { title: "Tuz-Alkali-Bünye Kombinasyonu", image: water },
      { title: "Arazi Tipleri", image: water },
      { title: "Şimdiki Arazi Kullanım Şekli", image: water },
      { title: "Erozyon Derecesi", image: water },
      { title: "Diğer Toprak Özellikleri", image: water },
    ],
    image: geo,
  },
  {
    title: "İklim Yapısı",
    subTitles: [
      { title: "Rüzgar Hızı", image: water },
      { title: "Rüzgar Yönü", image: water },
      { title: "Karlı Gün Dağılımı", image: water },
      { title: "Bulutlu Gün Dağılımı", image: water },
      { title: "Yağış Rejimi", image: water },
      { title: "Sıcaklık Dağılımı", image: water },
    ],
    image: geo,
  },
  {
    title: "Flora-Fauna Yapı",
    subTitles: [
      { title: "Orman Varlığı", image: water },
      { title: "Kuş Göç Yolları", image: water },
      { title: "Flora Yapısı", image: water },
    ],
    image: geo,
  },
  {
    title: "Doğal ve Yapay Çevre Sorunları",
    subTitles: [
      { title: "Hava Kalitesi", image: water },
      { title: "Su Kalitesi", image: water },
      { title: "Gürültü Kirliliği", image: water },
      { title: "Işık Kirliliği", image: water },
    ],
    image: geo,
  },
];

function MainTitles() {
  return (
    <div className="flex flex-col text-[#424A4F]">
      <div className=" font-poppins lg:text-5xl text-3xl leading-10">
        <h1 className="lg:ml-44 lg:mt-20 ml-10 sm:mr-10 md:mr-10 mt-10 text-black">
          {"DOĞAL YAPI"}
        </h1>
      </div>
      <div className="text-3xl leading-10">
        <h3 className="lg:ml-44 lg:mt-12 ml-10 mt-2">
          {"Detayları görmek için bir başlık seçiniz"}
        </h3>
      </div>
      <div className=" ml-36 mt-[4em] mr-36">
        <div className="font-poppins flex flex-rows justify-items-center flex-wrap -m-6">
          {subTitle.map((subTitle, index) => {
            return <TitleCard subTitle={subTitle} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default MainTitles;
