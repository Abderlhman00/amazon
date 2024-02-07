import React from 'react';
import './Home.css';
import Product from '../Product/Product';

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__images"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />

        <div className="home__row">
          {/* product */}
          <Product
            id="12321341"
            title="The lean startup: How Constant Innovation Creates Radically Successful Businesses"
            price={11.96}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4} //0,1,2,3,4
          />
          {/* product */}
          <Product
          id="49538094"
          title="Kenwood kmix stand mixer for
          baking, stylish kitchen mixer with
          k-beater, dough hook and whisk, 5 litre
          glass"
          price={239.0}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          rating={3} //0,1,2,3
          />


        </div>

        <div className="home__row">
          {/* product */}
          <Product
          id="4903850"
          title="Samsung LE49RG90SSUXEN 49' Curved
           LED Gaming Monitor"
          price={199.99}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          rating={2} //0,1,2
          />

          {/* product */}
          <Product
          id="23445930"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          rating={3} //0,1,2
          />
          {/* product */}
          <Product
          id="3254354345"
          title="New Apple ipad pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation"
          price={598.99}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          rating={4} //0,1,2,3,4
          />
        </div>
        <div className="home__row">
          {/* product */}
          <Product
          id="90829332"
          title="Samsung LE49RG90SSUXEN 49' Curved
           LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          price={1094.98}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          rating={4} //0,1,2,3,4
          />
        </div>
      </div>
    </div>
  );
};

export default Home;