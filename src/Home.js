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
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image="https://upload.wikimedia.org/wikipedia/en/1/11/Lean_Startup.png"
                />
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image="https://upload.wikimedia.org/wikipedia/en/1/11/Lean_Startup.png"
                />
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image="https://upload.wikimedia.org/wikipedia/en/1/11/Lean_Startup.png"
                />
           </div>

           <div className="home__row">
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image="https://upload.wikimedia.org/wikipedia/en/1/11/Lean_Startup.png"
                />
           </div>
        </div>
    )
}

export default Home
