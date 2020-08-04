import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
           <img 
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
           />


           {/* Product id, title, price, rating,  */}
           <div className="home__row">
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image="https://upload.wikimedia.org/wikipedia/en/1/11/Lean_Startup.png"
                />
                <Product
                    id="12321344"
                    title="Kitchenaid Professional 600 Stand Mixer 6 quart, Empire Red "
                    price={30.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61V3VySfPWL._AC_UY436_FMwebp_QL65_.jpg"
                />
           </div>
           <div className="home__row">
                <Product
                    id="12321349"
                    title="Skoolzy Rainbow Counting Bears with Matching Sorting Cups"
                    price={22.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/P/B00W8FVMNO.01-17253176625.LXXXXXXX._AC_SY480_.jpg"
                />
                <Product
                    id="123444444"
                    title="SaltStick Caps, Bottle of 100 Electrolyte Replacement Capsules for Rehydration"
                    price={99.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41JD7kIo5VL._AC_.jpg"
                />
                <Product
                    id="12321349"
                    title="Qimiaobaby Diaper Bag Backpack"
                    price={7.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81UQJerhwbL._SX679_.jpg"
                />
           </div>

           <div className="home__row">
                <Product
                    id="12421341"
                    title="Algorithms Illuminated: Part 1: The Basics"
                    price={16.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51+cSP+PAIL._SX331_BO1,204,203,200_.jpg"
                />
           </div>
        </div>
    )
}

export default Home
