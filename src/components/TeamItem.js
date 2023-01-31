const TeamItem = ({ propsName, propsPhoto, propsPosition, propsFaceBook, propsLinkedIn, propsInsta }) => {
    return (
        <div className="col-lg-4">
            <div className="team">
                <div className="team-img">
                    <img src={propsPhoto} alt="team" />
                </div>
                <div className="team-info">
                    <h5 className="team-name">{propsName}</h5>
                    <h6 className="team-position">{propsPosition}</h6>
                    <div className="social-links">
                        <div className="social-item">
                            <a href={propsFaceBook}>
                                <i className="fab fa-facebook"></i>
                            </a>
                        </div>
                        <div className="social-item">
                            <i className="fab fa-twitter"></i>
                        </div>
                        <div className="social-item">
                            <a href={propsInsta}>
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                        <div className="social-item">
                            <a href={propsLinkedIn}>
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamItem