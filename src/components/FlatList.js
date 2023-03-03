import Title from "./Title";
import FlatItem from "./FlatItem";
import instance from "./FireAxios";
import { useState, useEffect } from "react";
import {
  Flex,
  Text,
  Box,
  Select,
  Input,
  Spinner,
  Icon,
  Button,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";
import classes from "./Flatlist.module.css";

const FlatList = () => {

  const { isOpen, onToggle } = useDisclosure();
  const [results, setResults] = useState([]);
  const fetchedResults = [];
  const [filterThis, setFilterThis] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [filterToggle, setFilterToggle] = useState(false);
  const countries = [];
  const cities = [];

console.log(results);

  results.map((x) => {
    countries.push(x.Ulke);
  }
  );
  let uniqueCountries = [...new Set(countries)];

  results.map(x => {
    if (document.getElementById("countrySelect").value === x.Ulke) {
      cities.push(x.Sehir);
    }
  })
  let uniqueCities = [...new Set(cities)];

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

  const getFilterValues = () => {
    setFilterThis({
      countryFilter: document.getElementById("countrySelect").value,
      cityFilter : document.getElementById("citySelect").value,
      roomFilter: document.getElementById("roomSelect").value,
      bathFilter: document.getElementById("bathSelect").value,
      propertyFilter: document.getElementById("propertySelect").value,
      furnishFilter: document.getElementById("furnishSelect").value,
      sortFilter: document.getElementById("sortSelect").value,
      minPriceFilter: document.getElementById("MinPrice").value,
      maxPriceFilter: document.getElementById("MaxPrice").value,
      minAreaFilter: document.getElementById("MinArea").value,
      maxAreaFilter: document.getElementById("MaxArea").value,
    });
  };
  const resetFilterValues = () => {
    setFilteredResults([]);
    setFilterToggle(false)
  };
  const applyFilterValues = () => {
    const filterCountry = filterThis.countryFilter.length > 0 ? results.filter((item) => item.Ulke == filterThis.countryFilter) : results;
    const filterCity = filterThis.cityFilter.length > 0 ? filterCountry.filter((item) => item.Sehir == filterThis.cityFilter) : filterCountry;
    const filterRooms = filterThis.roomFilter.length > 0 ? filterCountry.filter((item) => item.OdaSayısı == filterThis.roomFilter) : filterCity;
    const filterBaths = filterThis.bathFilter.length > 0 ? filterRooms.filter((item) => item.BanyoSayısı == filterThis.bathFilter) : filterRooms;
    const filterType = filterThis.propertyFilter.length > 0 ? filterBaths.filter((item) => item.PropertyType == filterThis.propertyFilter) : filterBaths;
    const filterFurnish = filterThis.furnishFilter.length > 0 ? filterType.filter((item) => item.FurnishedState == filterThis.furnishFilter) : filterType;
    const filterMinPrice = filterThis.minPriceFilter.length > 0 ? filterFurnish.filter((item) => item.Fiyat > filterThis.minPriceFilter) : filterFurnish;
    const filterMaxPrice = filterThis.maxPriceFilter.length > 0 ? filterMinPrice.filter((item) => item.Fiyat < filterThis.maxPriceFilter) : filterMinPrice;
    const filterMinArea = filterThis.minAreaFilter.length > 0 ? filterMaxPrice.filter((item) => item.EvM2 > filterThis.minAreaFilter) : filterMaxPrice;
    const filterResult = filterThis.maxAreaFilter.length > 0 ? filterMaxPrice.filter((item) => item.EvM2 < filterThis.maxAreaFilter) : filterMinArea;
    const sortedResultToHigh = filterThis.sortFilter.length > 0 && filterThis.sortFilter == "Lowest Price" ? filterResult.sort((a, b) => a.Fiyat - b.Fiyat) : filterResult;
    const sortedResultToLow = filterThis.sortFilter.length > 0 && filterThis.sortFilter == "Highest Price" ? filterResult.sort((a, b) => a.Fiyat - b.Fiyat).reverse() : sortedResultToHigh;
    setFilteredResults(sortedResultToLow);


  };


  return (
    <section className="section-all-re">
      <div className="container">
        <Flex
          style={{ "margin-bottom": "50px", backgroundColor: "#00B98E" }}
          cursor="pointer"
          bg="gray.100"
          borderBottom="1px"
          borderColor="gray.200"
          p="2"
          fontWeight="black"
          fontSize="lg"
          justifyContent="center"
          alignItems="center"
        >
          <div style={{ "display": "flex", "flexDirection": "column", "alignItems": "center" }}>
            <div>
              <Text >Search & Filter Property</Text>
            </div>
          </div>
          <Icon onClick={onToggle} right="140px"  fontSize="50px" paddingLeft="2" w="10" as={BsFilter} />
        </Flex>

        <Collapse animateOpacity in={isOpen}>
          <div className={classes.SelectBox} style={{ "margin-bottom": "10px", display: "flex" }}>
            <Box onChange={() => { getFilterValues(); }} className={classes.selectClass} p="2">
              <Select id="countrySelect" placeholder="Select Country">
                {uniqueCountries.map(x =>
                  <option value={x}>{x}</option>
                )}
              </Select>
            </Box>
            <Box onChange={getFilterValues} className={classes.selectClass} p="2">
              <Select id="citySelect" placeholder="Select City">
                {uniqueCities.map(x =>
                  <option value={x}>{x}</option>
                )}
              </Select>
            </Box>
            <Box className={classes.selectClass} p="2">
              <Select onChange={getFilterValues} id="roomSelect" placeholder="Rooms">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </Select>
            </Box>
            <Box className={classes.selectClass} p="2">
              <Select onChange={getFilterValues} id="bathSelect" placeholder="Baths">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </Select>
            </Box>
            <Box className={classes.selectClass} p="2">
              <Select onChange={getFilterValues} id="propertySelect" placeholder="Property Type">
                <option>Apartment</option>
                <option>Townhouse</option>
                <option>Villa</option>
                <option>Penthouse</option>
                <option>Hotel Apartment</option>
                <option>Residential Floor</option>
                <option>Residential Building</option>
              </Select>
            </Box>
            <Box className={classes.selectClass} p="2">
              <Select onChange={getFilterValues} id="furnishSelect" placeholder="Furnish Status">
                <option>Furnished</option>
                <option>Not Furnished</option>
              </Select>
            </Box>
            <Box className={classes.selectClass} p="2">
              <Select onChange={getFilterValues} id="sortSelect" placeholder="Sort">
                <option>Lowest Price</option>
                <option>Highest Price</option>
              </Select>
            </Box>
          </div>
          <div style={{ "margin-bottom": "10px" }}>
            <Box p="1">
              <Input
                marginBottom="10px"
                type="number"
                p="1"
                id="MinPrice"
                placeholder="Minimum Price ($)"
              ></Input>
              <Input
                marginBottom="10px"
                type="number"
                p="1"
                id="MaxPrice"
                placeholder="Maximum Price ($)"
              ></Input>
              <Input
                marginBottom="10px"
                type="number"
                p="1"
                id="MinArea"
                placeholder="Minimum Area (m2)"
              ></Input>
              <Input
                marginBottom="10px"
                type="number"
                p="1"
                id="MaxArea"
                placeholder="Maximum Area (m2)"
              ></Input>
            </Box>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "30px",
            }}
          >
            <Box className="col-md-3" p="1">
              <button
                onClick={() => {
                  applyFilterValues();
                  setFilterToggle(true)
                }}
  
                className={classes.applyButton}
              >
                Apply Filters
              </button>
              </Box>
              <Box className="col-md-3" p="1">
              <button
                onClick={() => resetFilterValues()}
                className={classes.resetButton}
              >
                Reset Filters
              </button>
            </Box>
          </div>
        </Collapse>

        <div className="row">
          {filterToggle ?
            filteredResults.map((x) => {
              return (
                <FlatItem
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
                  flatPrice={x.Fiyat}
                  flatPic={x.EvResimleri[0]}
                  flatAllPics={x.EvResimleri}
                  flatContactName={x.ContactAd}
                  flatContactGSM={x.ContactPhone}
                  flatFurnished={x.FurnishedState}
                />
              );
            })
            :
            results.map((x) => {
              return (
                <FlatItem
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
                  flatPrice={x.Fiyat}
                  flatPic={x.EvResimleri[0]}
                  flatAllPics={x.EvResimleri}
                  flatContactName={x.ContactAd}
                  flatContactGSM={x.ContactPhone}
                  flatFurnished={x.FurnishedState}
                />
              );
            })
          }
        </div>
      </div>
    </section>
  );
};

export default FlatList;
