import React from "react";
import Search from "./Search";
import Head from "./Head";
import WhyUs from "./WhyUs";
import TeamList from "./TeamList";


const Home = () => {
  return (
    <React.Fragment>
      <Head />
      <Search />
      <WhyUs/>
      <TeamList/>
    </React.Fragment>
  );
};

export default Home;
