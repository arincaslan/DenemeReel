import classes from "./Search.module.css";

const Search = () => {
  return (
    <div className={classes.backContainer}>
      <div className={classes.searchContainer}>
        <div className="row g-2">
          <div className="col-md-10">
            <div className="row g-2">
              <div className="col-md-4">
                <input
                  placeholder="Search"
                  type="text"
                  className={classes.searchInput}
                ></input>
              </div>
              <div className="col-md-4">
                <select className={classes.searchSelector}>
                  <option selected>Country Type</option>
                  <option value="1">Country 1</option>
                  <option value="2">Country 2</option>
                  <option value="3">Country 3</option>
                </select>
              </div>
              <div className="col-md-4">
                <select className={classes.searchSelector}>
                  <option selected>Location</option>
                  <option value="1">Location 1</option>
                  <option value="2">Location 2</option>
                  <option value="3">Location 3</option>
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
