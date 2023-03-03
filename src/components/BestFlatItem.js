import { Link } from "react-router-dom";


const BestFlatItem = (
    {
        flatState,
        flatRoom,
        flatAd,
        flatBath,
        flatPrice,
        flatPic,
        flatChecked,
        flatCityzenPrice,
        flatM2,
        flatCountry,
        flatCity,
        flatSite,
        flatInfo,
        flatAllPics,
        flatContactName,
        flatContactGSM,
        flatFurnished
    }) => {

    const thisFlatProps = {
        propsRoom: flatRoom,
        propsName: flatAd,
        propsBath: flatBath,
        propsPrice: flatPrice,
        propsPics: flatAllPics,
        propsChecked: flatChecked,
        propsCityzenPrice: flatCityzenPrice,
        propsM2: flatM2,
        propsCountry: flatCountry,
        propsCity: flatCity,
        propsSite: flatSite,
        propsInfo: flatInfo,
        propsContactName: flatContactName,
        propsContactGSM: flatContactGSM,
        propsFurnished: flatFurnished,
    }

    return (
        <div className="best-estate">
            <div className="best-estate-item">
                <div className="best-estate-img-area">
                    <Link >
                        <img className="best-estate-img" src={flatPic} alt="flat" />
                    </Link>
                    <div className={`best-estate-state ${flatState === "For Sale" ? "bg-green" : "bg-red"}`}>{flatState}</div>
                </div>
                <div className="best-estate-content">
                    {flatState === "For Sale" ?
                        <span><Link to={{ pathname: "/flat/:slug", state: { thisFlatProps } }}>{flatAd}</Link></span>
                        : <span><Link to={{ pathname: "/citizenflat/:slug", state: { thisFlatProps } }}>{flatAd}</Link></span>
                    }
                </div>
                <div className="best-estate-features">
                    <div className="d-flex">
                        <div className="best-estate-feature">
                            <i className="fas fa-check-circle"></i>

                            <span>{flatRoom} Rooms</span>
                        </div>
                        <div className="best-estate-feature">
                            <i className="fas fa-check-circle"></i>
                            <span>{flatBath} Baths</span>
                        </div>
                    </div>
                    <h5 className="best-estate-price">${flatState === "For Sale" ? flatPrice : flatCityzenPrice}</h5>
                </div>
            </div>
        </div>
    )
}


export default BestFlatItem;