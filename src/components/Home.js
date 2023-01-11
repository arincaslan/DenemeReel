import FlatList from "./FlatList";
import React from "react";
import Search from "./Search";
import References from "./References";
import Head from "./Head";
import BestFlatList from "./BestFlatList";



const Home = () => {
  return (
    <React.Fragment>
      <Head />
      <Search />
      <BestFlatList />
    </React.Fragment>
  );
};

export default Home;
