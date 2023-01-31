import classes from "./Search.module.css";
import instance from "./FireAxios";
import { useState, useEffect } from "react";
import BestFlatItem from "./BestFlatItem";
import '@splidejs/react-splide/css';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
// or other themes
import '@splidejs/splide/css/skyblue';
import '@splidejs/splide/css/sea-green';
// or only core styles
import '@splidejs/splide/css/core';

import { Collapse, useDisclosure } from "@chakra-ui/react";


const Search = () => {
  const [results, setResults] = useState([]);
  const [filterThis, setFilterThis] = useState([]);
  const fetchedResults = [];
  const citizenResults = [];
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const { isOpen, onToggle } = useDisclosure();
 




  const getFilterValues = () => {
    setFilterThis({
      PurposeFilter: document.getElementById("PurposeSelect").value,
    });
  };
  results.map((x) => {
    if (x.VatandaşlıkDahilFiyat.length > 0) {
      citizenResults.push(x);
    }
  });

  const search_parameters = Object.keys(Object.assign({}, ...data));

  const searchFilter = (a) => {
    return data.filter((item) =>
      search_parameters.some((parameter) =>
        item[parameter].toString().toLowerCase().includes(query)
      )
    );
  };

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
    if (filterThis.PurposeFilter === "Buy") {
      setData(results);
    }
    if (filterThis.PurposeFilter === "Buy For Turkish Citizenship") {
      setData(citizenResults);
    }
    if (filterThis.PurposeFilter === "Purpose") {
      setData([]);
    }
  }, [filterThis]);

console.log(searchFilter(data));


  return (
    <div>
      <div className={classes.backContainer}>
        <div className={classes.searchContainer}>
          <div className="row g-2">
            <div className="col-md-10">
              <div className="row g-2">
                <div className="col-md-6">
                  <select
                    onChange={getFilterValues}
                    placeholder="Purpose"
                    id="PurposeSelect"
                    className={classes.searchSelector}
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\")",
                    }}
                  >
                    <option selected>Purpose</option>
                    <option >Buy</option>
                    <option>Buy For Turkish Citizenship</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <input
                    placeholder="Search"
                    id="search-form"
                    type="search"
                    className={classes.searchInput}
                    onChange={(e) => {
                      setQuery(e.target.value);

                    }}
                  ></input>
                </div>

              </div>
            </div>
            {isOpen ?
              <div className="col-md-2">
                <button onClick={() => {onToggle()}} className={classes.searchButton}>
                  Hide Search Results
                </button>
              </div>
              :
              <div className="col-md-2">
                <button onClick={onToggle} className={classes.searchButton}>
                  Show Search Results
                </button>
              </div>
            }
          </div>
        </div>
      </div>
      <section className={classes.sectionContainer}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Collapse animateOpacity in={isOpen}>
                <Splide
                  options={{
                    type:"loop",
                    autoWidth: true,
                    gap: "5px",
                    rewind: true,                
                    clones: false,
                  }}
                  className="my-carousel"
                >

                  {searchFilter(data).map((item) => (
                    
                    <SplideSlide hasTrack={false} >
                      <BestFlatItem className={classes.flatCard}
                        flatBath={item.BanyoSayısı}
                        flatChecked={item.VatandaşlıkCheck}
                        flatCityzenPrice={item.VatandaşlıkDahilFiyat}
                        flatM2={item.EvM2}
                        flatCountry={item.Ulke}
                        flatCity={item.Sehir}
                        flatSite={item.Ilce}
                        flatInfo={item.Açıklama}
                        flatAd={item.IlanAdı}
                        flatRoom={item.OdaSayısı}
                        flatState={
                          item.VatandaşlıkDahilFiyat.length > 0
                            ? "Citizenship"
                            : "For Sale"
                        }
                        flatPrice={item.Fiyat}
                        flatPic={item.EvResimleri[0]}
                        flatAllPics={item.EvResimleri}
                      >
                      </BestFlatItem>
                    </SplideSlide>
                    
                  ))}

                </Splide>


              </Collapse>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;
