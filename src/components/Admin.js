import { storage } from "./FireImage";
import { useEffect, useState } from "react";
import results from "./FireAxios";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const Admin = () => {
  const [toBackEnd, setToBackEnd] = useState({});
  const [imageUpload, setImageUpload] = useState([]);
  const [urls, setUrls] = useState([]);


  const handleChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImageUpload((prev) => [...prev, newImage])

    }
  }

  const uploadImage = () => {
    imageUpload.map((image) => {
      if (imageUpload == null) return;
      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      const uploadTask = uploadBytesResumable(imageRef, image);
      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUrls((prev) => [...prev,downloadURL]);
          });
        }
      );

    })
  }
  


  const postToBackEnd = (e) => {
    e.preventDefault();
    setToBackEnd(
      {
        IlanAdı: document.getElementById("ad").value,
        OdaSayısı: document.getElementById("oda").value,
        BanyoSayısı: document.getElementById("banyo").value,
        EvM2: document.getElementById("m2").value,
        Fiyat: document.getElementById("price").value,
        Ulke: document.getElementById("country").value,
        Sehir: document.getElementById("city").value,
        Ilce: document.getElementById("ilce").value,
        EvResimleri: urls,
        Açıklama: document.getElementById("acıkla").value,
        VatandaşlıkCheck: document.getElementById("checkCityzen").value,
        VatandaşlıkDahilFiyat: document.getElementById("cityzenPrice").value,
        ContactAd: document.getElementById("contactAd").value,
        ContactPhone: document.getElementById("contactPhone").value,
        FurnishedState: document.getElementById("furnished").value,
        Purpose: document.getElementById("purpose").value,
        PropertyType: document.getElementById("propertyType").value,
      },
    );


    results.post("./houses.json", toBackEnd).then((response) => {
      console.log(response);
    });
  };



  return (
    <div className="container" style={{ padding: "50px" }}>
      <div className="row">
        <div
          className="col-lg-12"
          style={{
            display: "flex",
            "justify-content": "center",
            "align-items": "center",
          }}
        >
          <text>Admin Formu</text>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="col-lg-12" style={{ border: "1px solid black" }}>
          <div className="col-lg-6">
            <text>İlan Adı</text>
            <br></br>
            <input id="ad" type="text" style={{"border" : "1px solid black"}} className="inp-contact"></input>
          </div>
          <div className="col-lg-6">
            <text>Contact Name</text>
            <br></br>
            <input id="contactAd" style={{"border" : "1px solid black"}} type="text" className="inp-contact"></input>
          </div>
          <div className="col-lg-6">
            <text>Contact Phone Cv</text>
            <br></br>
            <input id="contactPhone" type="tel" style={{"border" : "1px solid black"}} className="inp-contact"></input>
          </div>
          <div className="col-lg-6">
            <text>Furnished</text>
            <br></br>
            <select id="furnished"  style={{"border" : "1px solid black"}} className="inp-contact">
              <option>Furnished</option>
              <option>Not Furnished</option>
            </select>
          </div>
          <div className="col-lg-6">
            <text>Purpose</text>
            <br></br>
            <select id="purpose"  style={{"border" : "1px solid black"}} className="inp-contact">
              <option>Buy</option>
              <option>Buy for Citizenship</option>
            </select>
          </div>
          <div className="col-lg-6">
            <text>Property Type</text>
            <br></br>
            <select id="propertyType" style={{"border" : "1px solid black"}}  className="inp-contact">
              <option>Apartment</option>
              <option>Townhouse</option>
              <option>Villa</option>
              <option>Penthouse</option>
              <option>Hotel Apartment</option>
              <option>Residential Floor</option>
              <option>Residential Building</option>
            </select>
          </div>
          <div className="col-lg-6">
            <text>İlan Oda Sayısı</text>
            <br></br>
            <input style={{"border" : "1px solid black"}} id="oda" type="text" className="inp-contact"></input>
          </div>
          <div className="col-lg-6">
            <text>İlan Banyo Sayısı</text>
            <br></br>
            <input style={{"border" : "1px solid black"}} id="banyo" type="text" className="inp-contact"></input>
          </div>
          <div className="col-lg-6">
            <text>İlan m2</text>
            <br></br>
            <input style={{"border" : "1px solid black"}} id="m2" type="text" className="inp-contact"></input>
          </div>
          <div className="col-lg-6">
            <text>İlan Fiyat</text>
            <br></br>
            <input style={{"border" : "1px solid black"}} id="price" type="text" className="inp-contact"></input>
          </div>
          <div className="col-lg-6">
            <text>İlan Ülke</text>
            <br></br>
            <input style={{"border" : "1px solid black"}} id="country" type="text" className="inp-contact"></input>
          </div>
          <div className="col-lg-6">
            <text>İlan İl</text>
            <br></br>
            <input style={{"border" : "1px solid black"}} id="city" type="text" className="inp-contact"></input>
          </div>
          <div className="col-lg-6">
            <text>İlan İlçe</text>
            <br></br>
            <input style={{"border" : "1px solid black"}} id="ilce" type="text" className="inp-contact"></input>
          </div>
          <div className="col-lg-12">
            <text>İlan Açıklaması</text>
            <br></br>
            <textarea
              id="acıkla"
              type="text"
              class="ta-contact"
              rows="4"
            ></textarea>
          </div>
          <div className="col-lg-6">
            <text>Vatandaşlık için uygunmu radio button</text>
            <input style={{"border" : "1px solid black"}} id="checkCityzen" type="checkbox"></input>
          </div>
          <div className="col-lg-6">
            <text>İlan Fotoğraflar Eklemek için picture box</text>
            <br></br>
            <input
              onChange={handleChange}
              id="pictures"
              multiple
              type="file"
            ></input>
            <button style={{"border" : "1px solid black"}} onClick={uploadImage}>Resim Yükle</button>
          </div>
          <div className="col-lg-6">
            <text>Vatandaşlık radio true ise Vatandaşlıklı Fiyat</text>
            <br></br>
            <input
            style={{"border" : "1px solid black"}}
              id="cityzenPrice"
              type="text"
              className="inp-contact"
            ></input>
          </div>
          <div className="col-lg-12">
            <br></br>
            <button style={{"border" : "1px solid black"}} onClick={postToBackEnd} class="btn-contact">
              İlan Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
