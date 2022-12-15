import {Link} from "react-router-dom"
const BestFlatItem = ({flatState}) => {
    return (
        <div className="best-estate">
            <div className="best-estate-item">
                <div className="best-estate-img-area">
                    <Link to="/flat/:slug">
                        <img className="best-estate-img" src="/img/product1.jpeg" alt="flat" />
                    </Link>
                    <div className={`best-estate-state ${flatState ==="For Rent" ? "bg-green" : "bg-red" }`}>{flatState}</div>
                </div>
                <div className="best-estate-content">
                    
                    <span><Link to="/flat/:slug">İlan Adı</Link></span>
                </div>
                <div className="best-estate-features">
                    <div className="d-flex">
                        <div className="best-estate-feature">
                            <i className="fas fa-check-circle"></i>
                            <span>3 Beds</span>
                        </div>
                        <div className="best-estate-feature">
                            <i className="fas fa-check-circle"></i>
                            <span>2 Bathrooms</span>
                        </div>
                    </div>
                    <h5 className="best-estate-price">$650</h5>
                </div>
            </div>
        </div>
    )
}

export default BestFlatItem