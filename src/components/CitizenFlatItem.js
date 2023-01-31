import { Link } from "react-router-dom";

const CitizenFlatItem = ({
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
  };

  return (
    <div className="text-center col-lg-4 col-12 col-md-6 ">
      <div className="item">
        <div className="item-image">
          <img className="img-fluid" src={flatPic} alt="flat" />
        </div>
        <div className="item-description">
          <div className="d-flex justify-content-between mb-3">
            <span  className="item-title">
              {flatAd}
            </span>
            <span className="item-price">${flatCityzenPrice}</span>
          </div>
          <div className="item-icon d-flex alig-items-center justify-content-between">
            <div>
              <i className="fas fa-check-circle"></i>{" "}
              <span>{flatCity}</span>
            </div>
            <div>
              <i className="fas fa-check-circle"></i> <span> {flatCountry} </span>
            </div>
            <Link to={{pathname: "/citizenFlat/:slug", state: {thisFlatProps}}} className="item-title">
              <button className="btn btn-detail">View</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitizenFlatItem;
