import React from 'react';
import Product from "./Product";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img className="home__image"    
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheBoysS2/THBY_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_3000x1200_PV_en-GB._CB406828669_.jpg" alt="" />
        

        {/* Product id, title, price, rating, image*/}
        <Product 
        id="12321" 
        title="The Lean Startup: How Constant Innovation Creates companys!"
        price= {11.96}
        rating= {5}
        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg" 
        />
        {/* Product */}
        </div>
    );
}

export default Home
