import React from "react";
import geo from "../images/geological.png";
import hill from "../images/hill.png";
import water from "../images/water.png";
import soil from "../images/soil-analysis.png";
import climate from "../images/climate-change.png";
import florafauna from "../images/biodiversity.png";
import naturalproblems from "../images/naturalproblems.png";
import TitleCard from "./TitleCard";

const subTitle = [
  {
    title: "Topoğrafik Yapı",
    subTitles: [
      {
        title: "Yükseklik",
        image: hill,
        explanation:"Yükseklik analizi ile çalışma alanının hangi yönden başlayıp ne yöne doğru yükseldiği ve rakımı göz önüne alınır ve bu sayede planlanacak alan hakkında 3 boyutlu bir fikir sahibi olunması amaçlanır.",
        subTitles: [
          { title: "Buraya yükseklik girişi alan input alanı eklenecek", image: hill },

        ],
      },
      {
        title: "Eğim",
        image: hill,
        explanation:"Bir arazi yüzünün yatay düzlemde yaptığı açının derece veya grad cinsinden değeri, o arazinin eğim derecesidir. Veya bir arazi yüzünün 100 metrelik yatay mesafede kaç metre alçaldığı veya yüksekldiğini ifade eden bir deyimdir. Böylece eğim ölçü birimi, “derece” veya “grad” ya da “yüzde = %” olarak ifade edilir (Çepel, N. s.89). Eğim bir alanda başta erozyon olmak üzere drenaj, infiltrasyon vb. birçok durumu etkilemektedir. Örneğin, eğimin fazlalaştığı alanlarda yüzey erozyonu riski artmakta, toprak geçirimsizliğiyle sellenme riski ortaya çıkmaktadır.",
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
        explanation:"Bakı, TDK’da, özellikle dağlık yörelerde bir yamacın güneş ışınlarına, güney veya kuzeye karşı konumunu belirleyen, bunun sonucu olarak da doğal şartlarını tespit eden durumu şeklinde tanımlanmaktadır. Necmettin Çepel ise Peyzaj Ekolojisi(s.88) kitabında bakıyı; “<Bakı> veya <Ekspozisyon> deyimi, bir arazi yüzünün 8 kısımlık rüzgar gülünün gösterdiği yönlerden hangisine baktığını ifade eder” şeklinde tanımlamaktadır. Yamaçların güneşe karşı konumu şeklinde özetlenebilen bakı, sıcaklıklar üzerinde oldukça etkilidir.",
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
    explanation:"İstanbul genelinin jeolojik yapısına bakıldığında 2 tür kaya topluluğunun bulunduğu görülmektedir. İstanbul Birliği ve Istranca Birliği olarak adlandırılan bu topluluklardan Tuzla’yı da kapsayan İstanbul Birliği, Paleozoyik ve Erken Mesozoyik dönem kayaçlarını içermektedir. Istranca Birliği Trakya yarımadasının kuzey kesiminde görülmektedir(İstanbul İl Alanı Jeolojisi Yönetici Özeti, 2013).",
    subTitles: [
      { title: "İstanbul Birliği", image: geo },
      { title: "Istıranca Birliği", image: geo },
    ],
    image: geo,
  },
  {
    title: "Hidrolojik Yapı",
    explanation:"İstanbul dereleri ve vadileriyle hareketli morfolojiye sahip bir şehirdir. Sanayileşme, aşırı göç ve plansız kentleşme ile birlikte su kaynakları olan derelerini yitirmeye başlayan kentte günümüzde fiziksel yapısı bakımından 6 tür derenin bulunduğu söylenebilir; kapalı kesit dereler, doğal dereler, doğal+kapalı+açık dereler, kapalı+açık dereler, doğal+kapalı dereler ve doğal+açık dereler. Yapılan çalışmalar sonucu günümüzde İstanbul’un derelerinin sadece %15’inin müdahaleden uzak kalıp doğal dere özelliğini taşıdığı saptanmıştır (Dinç, H. 2014).Tarihsel süreç olarak İstanbul derelerine bakıldığında 1950’li yıllardan sonra artan kentleşme ile birlikte dereler ve vadilerin kent fonksiyonlarında kullanımına geçtiği görülmektedir. Genelde kapalı sistem kanallar içerisine alınarak üzerinden yaya- araç yolu yapımı gerçekleştirilen dereler, denize veya Haliç’e dökülmektedir (Dinç, H. 2014)",
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
    explanation:"İstanbul için toprak yapısı ele alındığında toprak çeşidinin genellikle killi ve kumlu olduğu görülmektedir. Hidrojeolojik yapıda da bahsedildiği üzere 106 dere bulunmaktadır ve bu dereler sebebiyle şehrin bir kısmı alüvyonludur. Bölgede asıl topraklar Akdeniz iklimi toprağı olan kırmızı(terra-rossa) topraklardır (İBB-1/1000 Koruma Amaçlı UİP Raporu, 2016).",
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
    image: soil,
  },
  {
    title: "İklim Yapısı",
    explanation:"İstanbul’un ikliminde coğrafi konumu ve fiziki yapısı oldukça etkilidir. Köppen sınıflamasına göre yazın sıcak ve kurak, kışın ılık ve yağışlı olan Akdeniz iklim tipinin görüldüğü İstanbul’da, üç hakim rüzgar tipi bulunmaktadır. Kuzey ve güneyden sokulan hava tipleri ve sakin hava tipi olmak üzere üç hakim hava tipinden en fazla esme sayısını gösteren rüzgarın kuzey rüzgarları olduğu gözlemlenmektedir. Sıcak ve soğuk devreler ile bir uzun bir de kısa toplam da dört mevsimsel devrenin görüldüğü kentin kuzey kesimlerinde Batı Karadeniz iklim tipi görülmektedir. Kışları yağışların fazla olması ve yazları rüzgarların sabit esip yağışların oldukça az olmasının sebebinin şehirin depresyon, antisiklon ve siklon şeklinde tabir edilen alanlara sahip olduğu belirtilmektedir. Antisiklon ve siklon bölgeler kuru ve durağan hava sağlarken depresyonlar bulunduğu alanlara bol yağış getirmektedirler (İBB Validebağ Korusu 1/1000 Koruma Amaçlı UİP Raporu,2016).",
    subTitles: [
      { title: "Rüzgar Hızı", image: water },
      { title: "Rüzgar Yönü", image: water },
      { title: "Karlı Gün Dağılımı", image: water },
      { title: "Bulutlu Gün Dağılımı", image: water },
      { title: "Yağış Rejimi", image: water },
      { title: "Sıcaklık Dağılımı", image: water },
    ],
    image: climate,
  },
  {
    title: "Flora-Fauna Yapısı",
    explanation:"Ülkemiz ve İstanbul farklı ve çok sayıda flora ve fauna yapısına sahiptir. İstanbul için bakıldığında yerleşim alanlarının güney kısımda doğu – batı hattında uzandığı kuzeyinin ormanlık alan ve içme suyu havzaları gibi doğal yapılardan oluştuğu görülmektedir. Orman Bakanlığı’nın web sayfasında İstanbul’un orman varlığına bakıldığında sarı renkli alanların orman içi açıklık, yeşil alanların ise verimli orman olarak nitelendirildiği bir harita olduğu görülmektedir.",
    subTitles: [
      { title: "Orman Varlığı", image: water },
      { title: "Kuş Göç Yolları", image: water },
      { title: "Flora Yapısı", image: water },
    ],
    image: florafauna,
  },
  {
    title: "Doğal&Yapay Çevre Sorun",
    explanation:"Bu analiz ile çalışma alanı ve çevresinde var olan veya ortaya çıkması muhtemel olan sorunlar ele alınmanktadır. Örneğin hava kirliliğine sebebiyet veren partikül maddelerin kısaca zararlarına değinilecek olursa hepsinin başta solunum yolu rahatsızlıklarına yol açtığı sonucuna ulaşılmaktadır. SO2, solunum yolu hastalıklarını kötü yönde etkilemesinin yanında suyla teması halinde toprağın derinliklerine inip yeraltı sularına karışma tehlikesi içermektedir. Ayrıca suyla karışıp buharlaşması ve ardından yağmur şeklinde yeryüzüne tekrar inmesi halinde asit yağmurlarına sebebiyet vermekte canlı yaşamı etkileyip bitkilerin gelişmesine zarar vermekte, insan cildine de keza yıpratıcı etkilerde bulunmaktadır (cevrekorumadairesi.org). O3, yine solunum yolları hastalıklarına etki etmekte olup ozon artırıcı olması sebebiyle havada fazla olması ozonun artışına sebep olmaktadır. Ozonun fazlalığı bitkilerin fotosentezinde olumsuz etkiye sahip olduğundan tarım ürünlerinde ve diğer bitki gelişimlerinde yavaşlamalar, ürünlerde kalite düşmelerinin yaşanması söz konusu olmaktadır.CO, solunduğundan alyuvarlara etki etmekte olup hemoglobinin oksijen taşıma yetisini kaybettirir. Oksijen taşınamayınca hücrelere yeterli oksijen gitmeyeceğinden hücre ölümleri görülmeye başlanır ve insan vücudunda hücre ölümleriyle vücut direnci düşer, başka bir çok hastalığa yol açılır(cevrekorumadairesi.org). Gürültü analizi ile insan hayatını etkileme sınırı ve bu sınırı aşan yerlerin tesibiti yapılır. Işık kirliliği de başta fauna yapısı olmak üzere tüm canlıların üzerinde etkili olduğu için analizi yapılarak gerekli çözümlere ulaşmak hedeflenir.",
    subTitles: [
      { title: "Hava Kalitesi", image: water },
      { title: "Su Kalitesi", image: water },
      { title: "Gürültü Kirliliği", image: water },
      { title: "Işık Kirliliği", image: water },
    ],
    image: naturalproblems,
  },
];

function MainTitles() {
  return (
    <div className="flex flex-col text-[#424A4F] font-montserrat bg-[#282c34] text-white pb-20 items-center justify-center">
      <div className=" font-poppins lg:text-5xl text-3xl leading-10">
        <h1 className="sm:mr-10 md:mr-10 mt-10 text-whiter">
          {"DOĞAL YAPI"}
        </h1>
      </div>
      {/* <div className="text-3xl leading-10">
        <h3 className="lg:ml-44 lg:mt-12 ml-10 mt-2">
          {"Detayları görmek için bir başlık seçiniz"}
        </h3>
      </div> */}
      <div className=" ml-36 mt-[4em] mr-36">
        <div className="font-poppins flex flex-rows justify-center flex-wrap -m-6">
          {subTitle.map((subTitle, index) => {
            return <TitleCard subTitle={subTitle} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default MainTitles;
