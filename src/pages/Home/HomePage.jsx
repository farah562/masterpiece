import React from 'react';
import "./HomePage.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from '../../components/Footer/Footer';

export default function HomePage() {
  return (
    <div className='home-page__container'>
      <div className="app-navbar">
      <Navbar />
      </div>
      <div className="app-starter__container app_section">
        <div className="container">
        <div className="row mb-5">
          <div className="col-xs-12 col-lg-6">
            <h1 className='mb-4 fw-bold'>LET'S FIGHT FOOD WASTE TOGETHER</h1>
            <p>
              Food waste is a big problem, and we can be a solution. Good Mood! is the website that lets you rescue unsold food from an 
              untimely fate at your favorite spots.
            </p>
            <div className="app-features__conatainer mt-5">
              <div className='feature'>
              <img width="54" height="54" src="https://img.icons8.com/nolan/54/shop.png" alt="shop"/>
                <h6 className='mb-0 mt-2'>
                  Explore shops and resturants in your area
                </h6>
              </div>
              <div className='feature'>
              <img width="54" height="54" src="https://img.icons8.com/color/54/gift--v1.png" alt="gift--v1"/>
                <h6 className='mb-0 mt-2'>
                  Save surprise bags of food from wasting in good price
                </h6>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-lg-6 center">
          <lottie-player src="https://assets7.lottiefiles.com/temp/lf20_nXwOJj.json"  background="transparent"  speed="1"  style={{width: "400px", height: "400px"}}  loop autoplay></lottie-player>
          </div>
        </div>
        <div className="row w-100 mt-5">
          <div className="col-xs-12 center">
            <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_P4RBQZ.json"  background="transparent"  speed="1"  style={{width: "80px", height: "80px"}}  loop  autoplay></lottie-player>
          </div>
        </div>
        </div>
      </div>

      <div className="food-wasting__container app_section">
        <div className="container">
        <div className="row mb-5">
          <div className="col-xs-12 center">
          <h2 className='fw-bold'>More than 1/3 of all food is being wasted</h2>
          </div>
        </div>
        <div className="food-wasting__info row mt-4">
            <div className="fw-item col-lg-4">
              <img width="64" height="64" src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/external-tree-nature-flatart-icons-flat-flatarticons-1.png" alt="external-tree-nature-flatart-icons-flat-flatarticons-1"/>
              <h4>Environmental</h4>
              <p>
                Food waste is responsible of 10% of greenhouse gas emissions(that's more than the whole aviation industry)
              </p>
            </div>
            <div className="fw-item col-lg-4">
            <img width="64" height="64" src="https://img.icons8.com/ios/64/sad.png" alt="sad"/>
              <h4>Social</h4>
              <p>
                We waste 2.5 billion tonnes of food annualy, while 828 million people go hungry every day
              </p>
            </div>
            <div className="fw-item col-lg-4">
            <img width="64" height="64" src="https://img.icons8.com/fluency/64/money-bag.png" alt="money-bag"/>
              <h4>Economic</h4>
              <p>
                Wasting food costs us $1.2 trillion each year
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-foodgood__container app_section">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-lg-6">
            <lottie-player src="https://assets8.lottiefiles.com/private_files/lf30_a4mKwA.json"  background="transparent"  speed="1"  style={{width: "400px", height: "400px"}}  loop  autoplay></lottie-player>
            </div>
            <div className="col-xs-12 col-lg-6 center align-items-start">
              <h1 className='fw-bold mb-3'>DOING GOOD MADE TASTY</h1>
              <p>
                Feeling hungry? With the good food. Good Mood! website, you can eat well while making an impact. Save surprise bagsof good
                food at an even better price from resturants and shops near you.
              </p>
              <div className="gf-benefits">
              <div className="gf-item">
                <img width="38" height="38" src="https://img.icons8.com/fluency/38/applause.png" alt="applause"/>
                <h6 className='fw-bold'>Rescue good food from local favourites</h6>
              </div>
              <div className="gf-item">
                <img width="38" height="38" src="https://img.icons8.com/cotton/38/discount--v1.png" alt="discount--v1"/>
                <h6 className='fw-bold'>Enjoy for 1/2 of the original price</h6>
              </div>
              <div className="gf-item">
              <img width="38" height="38" src="https://img.icons8.com/fluency/38/earth-planet.png" alt="earth-planet"/>
                <h6 className='fw-bold'>Help the planet by preventing waste</h6>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
