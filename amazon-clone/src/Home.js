import React from 'react';
import Product from "./Product";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img className="home__image"    
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheBoysS2/THBY_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_3000x1200_PV_en-GB._CB406828669_.jpg" alt="" />
        

        {/* Product id, title, price, rating, image*/}
        <div className="home__row">
        <Product 
        id="12321" 
        title="The Lean Startup: How Constant Innovation Creates companys!"
        price= {11.96}
        rating= {5}
        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg" 
        />


    <Product 
        id="123212" 
        title="New Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Gray (Latest Model, 8th Generation)"
        price= {299}
        rating= {4}
        image="https://m.media-amazon.com/images/I/71UNqxJlGxL._AC_UL320_.jpg" 
        />
        {/* Product */}
        </div>

        <div className="home__row">

        <Product 
        id="123213" 
        title="Apple MacBook Air (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)"
        price= {899.99}
        rating= {5}
        image="https://m.media-amazon.com/images/I/71k3fJh5EwL._AC_UL320_.jpg" 
        />

        
    <Product 
        id="12321" 
        title="Apple iPad Mini (Wi-Fi, 64GB) - Space Gray (Latest Model)"
        price= {379}
        rating= {5}
        image="https://m.media-amazon.com/images/I/71Ha06XS-VL._AC_UL320_.jpg" 
        />

        
    <Product 
        id="12321" 
        title="HP Chromebook X360 14-Inch HD Touchscreen Laptop, Intel Celeron N4000, 4 GB RAM, 32 GB eMMC"
        price= {445}
        rating= {5}
        image="https://m.media-amazon.com/images/I/8173Or14LpL._AC_UL320_.jpg" 
        />

        </div>
        </div>
    );
}

export default Home
