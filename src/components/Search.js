import classes from "./Search.module.css";
import instance from "./FireAxios";
import { useState, useEffect } from "react";

const Search = () => {
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



  return (
    <div className={classes.backContainer}>
      <div className={classes.searchContainer}>
        <div className="row g-2">
          <div className="col-md-10">
            <div className="row g-2">
              <div className="col-md-8">
                <input
                  placeholder="Search"
                  type="text"
                  className={classes.searchInput}
                ></input>
              </div>
              <div className="col-md-4">
                <select
                  className={classes.searchSelector}
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\")",
                  }}
                >
                  <option selected>Purpose</option>
                  <option>Buy</option>
                  <option>Buy For Turkish Citizenship</option>
                </select>
              </div>

            </div>
          </div>
          <div className="col-md-2">
            <button className={classes.searchButton}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
