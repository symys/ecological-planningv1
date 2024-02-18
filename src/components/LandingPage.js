import React from 'react'
import logo from "../images/earth.png";
import "../App.css";
import {Link} from "react-router-dom";

const subTitle = [
    { title: "Topoğrafik Yapı", subTitles: ["Yükseklik", "Eğim", "Bakı"] },
    {
      title: "Jeolojik ve Morfolojik Yapı",
      subTitles: ["İstanbul Birliği", "Istıranca Birliği"],
    },
    {
      title: "Hidrolojik Yapı",
      subTitles: [
        "Doğal Dere",
        "Kapalı Kesit Dere",
        "Açık Kesit Dere",
        "Karma Sistem Kesit Dere",
      ],
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
      ],
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
      ],
    },
    {
      title: "Flora-Fauna Yapı",
      subTitles: ["Orman Varlığı", "Kuş Göç Yolları", "Flora Yapısı"],
    },
    {
      title: "Doğal ve Yapay Çevre Sorunları",
      subTitles: [
        "Hava Kalitesi",
        "Su Kalitesi",
        "Gürültü Kirliliği",
        "Işık Kirliliği",
      ],
    },
  ];

function LandingPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Link
          className="App-link"
          to="/mainTitles"
          state={"hello"}
        >
          <button>
            CONTINUE
          </button>
          
        </Link>
      </header>
    </div>
  )
}

export default LandingPage