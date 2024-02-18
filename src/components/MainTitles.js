import React from 'react'
import geo from '../images/geological.png'
import hill from '../images/hill.png'
import water from '../images/water.png'
import TitleCard from './TitleCard';

const subTitle = [
  { title: "Topoğrafik Yapı", subTitles: ["Yükseklik", "Eğim", "Bakı"], image: hill },
  {
    title: "Jeolojik ve Morfolojik Yapı",
    subTitles: ["İstanbul Birliği", "Istıranca Birliği"], image: geo
  },
  {
    title: "Hidrolojik Yapı",
    subTitles: [
      "Doğal Dere",
      "Kapalı Kesit Dere",
      "Açık Kesit Dere",
      "Karma Sistem Kesit Dere",
    ],image: water
  },
  {
    title: "Toprak Yapısı",
    subTitles: [
      "Büyük Toprak Grupları",
      "Eğim-Derinlik Kombinasyonu",
      "Drenaj-Bünye Kombinasyonu",
      "Drenaj-Tuz-Alkali Kombinasyonu",
      "Eğim-Bünye-Derinlik Kombinasyonu",
      "Tuz-Alkali-Bünye Kombinasyonu",
      "Arazi Tipleri",
      "Şimdiki Arazi Kullanım Şekli",
      "Erozyon Derecesi",
      "Diğer Toprak Özellikleri",
    ],image: geo
  },
  {
    title: "İklim Yapısı",
    subTitles: [
      "Rüzgar Hızı",
      "Rüzgar Yönü",
      "Karlı Gün Dağılımı",
      "Bulutlu Gün Dağılımı",
      "Yağış Rejimi",
      "Sıcaklık Dağılımı",
    ],image: geo
  },
  {
    title: "Flora-Fauna Yapı",
    subTitles: ["Orman Varlığı", "Kuş Göç Yolları", "Flora Yapısı"],image: geo
  },
  {
    title: "Doğal ve Yapay Çevre Sorunları",
    subTitles: [
      "Hava Kalitesi",
      "Su Kalitesi",
      "Gürültü Kirliliği",
      "Işık Kirliliği",
    ],image: geo
  },
];


function MainTitles() {
  return (
    <div className="flex flex-col text-[#424A4F]">
      <div className=" font-poppins lg:text-5xl text-3xl leading-10">
        <h1 className="lg:ml-44 lg:mt-20 ml-10 sm:mr-10 md:mr-10 mt-10 text-black">
          {'DOĞAL YAPI'}
        </h1>
      </div>
      <div className="text-3xl leading-10">
        <h3 className="lg:ml-44 lg:mt-12 ml-10 mt-2">{'Detayları görmek için bir başlık seçiniz'}</h3>
      </div>
      <div className=" ml-36 mt-[4em] mr-36">
        <div className="font-poppins flex flex-rows justify-items-center flex-wrap -m-6">
          {subTitle.map((subTitle, index) => {
            return (
              <TitleCard subTitle={subTitle} />
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default MainTitles