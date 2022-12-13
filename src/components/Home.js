import FlatList from "./FlatList"
import Banner from "./Banner"
import React from "react"
import Search from "./Search"
import References from "./References"

import BestFlatList from "./BestFlatList"

const Home=()=>{
    return (
        <React.Fragment>
            <Banner/>
            <Search/>
            <BestFlatList/>

            <References/>
        </React.Fragment>
    )
}

export default Home;