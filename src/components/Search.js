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
                <select
                  className={classes.searchSelector}
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\")",
                  }}
                >
                  <option selected>Country Type</option>
                  <option value="1">Country 1</option>
                  <option value="2">Country 2</option>
                  <option value="3">Country 3</option>
                </select>
              </div>
              <div className="col-md-4">
                <select
                  className={classes.searchSelector}
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\")",
                  }}
                >
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
