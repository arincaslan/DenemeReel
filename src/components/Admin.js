

const Admin = () => {
    return (
    <div className="container" style={{"padding": "50px"}}>
        <div className="row">
            <div className="col-lg-12" style={{"display": "flex", "justify-content": "center", "align-items": "center"}}>
                <text>Admin Formu</text>
                
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="col-lg-12" style={{"border": "1px solid black"}}> 
                <div className="col-lg-6">
                    <text>İlan Adı</text>
                    <br></br>
                    <input type="text" className="inp-contact"></input>
                </div>
                <div className="col-lg-6">
                    <text>İlan Oda Sayısı</text>
                    <br></br>
                    <input type="text" className="inp-contact"></input>
                </div>
                <div className="col-lg-6">
                    <text>İlan m2</text>
                    <br></br>
                    <input type="text" className="inp-contact"></input>
                    
                </div>
                <div className="col-lg-6">
                    <text>İlan Fiyat</text>
                    <br></br>
                    <input type="text" className="inp-contact"></input>
                </div>
                <div className="col-lg-6">
                    <text>İlan Ülke</text>
                    <br></br>
                    <input type="text" className="inp-contact"></input>
                </div>
                <div className="col-lg-6">
                    <text>İlan İl</text>
                    <br></br>
                    <input type="text" className="inp-contact"></input>
                </div>
                <div className="col-lg-6">
                    <text>İlan İlçe</text>
                    <br></br>
                    <input type="text" className="inp-contact"></input>
                </div>
                <div className="col-lg-12">
                    <text>İlan Açıklaması</text>
                    <br></br>
                    <textarea type="text" class="ta-contact" rows="4"></textarea>
                </div>
                <div className="col-lg-6">
                    <text>Vatandaşlık için uygunmu radio button</text>
                    <input type="checkbox"></input>
                </div>
                <div className="col-lg-6">
                    <text>İlan Fotoğraflar Eklemek için picture box</text>
                    <br></br>
                    <input type="file"></input>
                </div>
                <div className="col-lg-6">
                    <text>Vatandaşlık radio true ise Vatandaşlıklı Fiyat</text>
                    <br></br>
                    <input type="text" className="inp-contact"></input>
                </div>
                <div className="col-lg-12">
                    <text>İlan Ekle</text>
                    <br></br>
                    <button class="btn-contact">İlan Ekle</button>
                </div>
            </div>
        </div>           
    </div>
    )
}

export default Admin;