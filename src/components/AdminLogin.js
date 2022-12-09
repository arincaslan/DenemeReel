import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

const AdminLogin = () => {
    const kullanıcıAdı = "a";
    const parola = "123456";

    const [loggedIn, setLoggedIn] = useState(false);

   const Validate = () => {
    const girilenAd = document.getElementById('inpKullanıcı').value;
    const girilenParola = document.getElementById('inpParola').value;
    if (girilenAd === kullanıcıAdı && girilenParola === parola) {
        setLoggedIn(true);
    }
    else{
        alert('Tekrar Giriş Yapınız Yanlış Girdiniz...');
    }

   }



    return (
    <div className="container" style={{"padding": "50px"}}>
        <div className="row">
            <div className="col-lg-12" style={{"display": "flex", "justify-content": "center", "align-items": "center"}}>
                <text>Login Formu</text>
                
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="col-lg-12" style={{"border": "1px solid black"}}> 
                <div className="col-lg-6">
                    <text>Kullanıcı Adı</text>
                    <br></br>
                    <input id="inpKullanıcı" type="text" className="inp-contact"></input>
                </div>
                <div className="col-lg-6">
                    <text>Parola</text>
                    <br></br>
                    <input id="inpParola" type="text" className="inp-contact"></input>
                </div>
                    <br></br>
                     
                </div>
                {
                    loggedIn 
                    ? 
                    <Redirect onClick={()=>{
                        Validate();
                     
                     }}
                     to='/admin'
                     style={{"display": "inline-block","cursor": "pointer"}} className="btn-search"
                     > Giriş Yapınız                 
                    </Redirect>
                    
                 :
                 <Link onClick={()=>{
                    Validate();
                 
                 }}
                 to='./adminLogin'
                 style={{"display": "inline-block","cursor": "pointer"}} className="btn-search"
                 > Giriş Yapınız                 
                </Link>                
                }
                   
                </div>
            </div>
           
    )
}

export default AdminLogin;