import React from "react";
import Slider from "react-slick";
import Title from "./Title";
import BestFlatItem from "./BestFlatItem";
import instance from "./FireAxios";
import { useEffect, useState } from "react";


const BestFlatList = () => {
  const [results, setResults] = useState([]);
  const fetchedResults = [];


  useEffect(() => {
    instance.get("houses.json").then((response) => {
      for (let key in response.data) {
        fetchedResults.unshift({
          ...response.data[key],
          id: key,
        });
      }

      setResults(fetchedResults);
    });
  }, []);



  const title = {
    text: "Sample Houses",
    description: "Sneak peak of our real estate portfolio!!!",
  };
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoPlay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <section className="section-best-estate">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 ">
            <Title title={title.text} description={title.description} />
            <Slider style={{ "display": "flex!important", "justifyContent": "center!important" }} {...settings}>
              {results.map((x) => {
                return (
                  <BestFlatItem
                    flatBath={x.BanyoSayısı}
                    flatChecked={x.VatandaşlıkCheck}
                    flatCityzenPrice={x.VatandaşlıkDahilFiyat}
                    flatM2={x.EvM2}
                    flatCountry={x.Ulke}
                    flatCity={x.Sehir}
                    flatSite={x.Ilce}
                    flatInfo={x.Açıklama}
                    flatAd={x.IlanAdı}
                    flatRoom={x.OdaSayısı}
                    flatState={x.VatandaşlıkDahilFiyat.length > 0 ? "Citizenship" : "For Sale"}
                    flatPrice={x.Fiyat}
                    flatPic={x.EvResimleri[0]}
                    flatAllPics={x.EvResimleri}
                    flatContactName={x.ContactAd}
                    flatContactGSM={x.ContactPhone}
                    flatFurnished={x.FurnishedState}
                  />

                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestFlatList;
