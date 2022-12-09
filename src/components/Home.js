import FlatList from "./FlatList"
import Banner from "./Banner"
import React from "react"

import References from "./References"

import BestFlatList from "./BestFlatList"

const Home=()=>{
    return (
        <React.Fragment>
            <Banner/>

            <BestFlatList/>

            <References/>
        </React.Fragment>
    )
}

export default Home;