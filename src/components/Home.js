import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
   return (
      <div className="home">
         <img
            className="home-image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
         />

         <div className="home-row">
            <Product
               id="12345"
               title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey"
               price={189905}
               rating={4.2}
               image="https://m.media-amazon.com/images/I/71L2iBSyyOL._AC_UY327_FMwebp_QL65_.jpg"
            />

            <Product
               id="12345"
               title="Skullcandy Venue ANC Over-Ear Headphones Wireless (Moab/Red/Black) with Active Noise Cancellation "
               price={11999}
               rating={4.3}
               image="https://m.media-amazon.com/images/I/71wKgrmIk2L._AC_UY327_FMwebp_QL65_.jpg"
            />
         </div>

         <div className="home-row">
            <Product
               id="12345"
               title="Apple AirPods with Wireless Charging Case"
               price={23900}
               rating={4.2}
               image="https://m.media-amazon.com/images/I/71IPFP9WJIL._AC_UY327_FMwebp_QL65_.jpg"
            />
            <Product
               id="12345"
               title="Samsung Galaxy S10 Plus (Blue, 8GB RAM, 128GB Storage)"
               price={55999}
               rating={4.3}
               image="https://m.media-amazon.com/images/I/61fv4VZRQ7L._AC_UY327_FMwebp_QL65_.jpg"
            />
            <Product
               id="12345"
               title="GoPro Hero 8 Black CHDHX-801 12 MP Action Camera"
               price={34191}
               rating={4.3}
               image="https://m.media-amazon.com/images/I/71UAtd5yS5L._AC_UY327_FMwebp_QL65_.jpg"
            />
         </div>

         <div className="home-row">
            <Product
               id="12345"
               title="Samsung 163 cm (65 Inches) Wondertainment Series Ultra HD LED Smart TV UA65TUE60AKXXL (Titan Gray) (2020 model)"
               price={89999}
               rating={4}
               image="https://m.media-amazon.com/images/I/81644xBqdyL._AC_UY327_FMwebp_QL65_.jpg"
            />
         </div>
      </div>
   );
}

export default Home;
