import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home_container">
          <img
            src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"
            alt="ecommerce"
            className="home_image"
          />

          <div className="home_row">
            <Product
              id="1dfhjjkgkk"
              title="Bennet Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag ,
            Water Repellent fabric for Men and Women (Blue)"
              price={30}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000.jpg"
            />

            <Product
              id="2shdnfkkfk"
              title="6th Ave Electronics U2422H UltraSharp 24 Full HD 1080p, 16:9 IPS Monitor (U2422H) + HDMI Cable + LCD Cleaning Kit"
              price={310.49}
              rating={5}
              image="https://m.media-amazon.com/images/I/711EnCYUx8L._AC_SX679_.jpg"
            />
          </div>

          <div className="home_row">
            <Product
              id="3hdhfhjdjo"
              title="Brother Typewriter Daisy Wheel Blue Am 10 Brougham10JE (573423001)"
              price={32.27}
              rating={6}
              image="https://m.media-amazon.com/images/I/91fOpLm43bL._AC_UY218_.jpg"
            />

            <Product
              id="4mndhdiusy"
              title="LG QHD 32-Inch Computer Monitor 32QN600-B, IPS with HDR 10 Compatibility and AMD FreeSync, Black"
              price={239.99}
              rating={3}
              image="https://m.media-amazon.com/images/I/81-lVaD1rAL._AC_UY218_.jpg"
            />

            <Product
              id="5asjfeflud"
              title="AirTrack Light Industrial Printer, Thermal Transfer Printing, LCD Color Touchscreen; USB, Serial, Ethernet, and USB Host Interfaces, Real-Time Clock."
              price={650}
              rating={2}
              image="https://m.media-amazon.com/images/I/31Z8Mp9cVEL._AC_UY218_.jpg"
            />
          </div>

          <div className="home_row">
            <Product
              id="6injsiehcy"
              title="The Children's Place Baby Girls' and Toddler Long Sleeve Printed Graphic T-Shirt"
              price={2.3}
              rating={4}
              image="https://m.media-amazon.com/images/I/912etGYQtiL._AC_UL320_.jpg"
            />

            <Product
              id="7alijeicbe"
              title="Simple Joys by Carter's Baby 4-Pack Fleece Pants"
              price={17.1}
              rating={3}
              image="https://m.media-amazon.com/images/I/91mfR+1GNkL._AC_UL320_.jpg"
            />

            <Product
              id="8quwodncsyu"
              title="Total by Verizon Samsung Galaxy A03s, 32GB, Black - Prepaid Smartphone (Locked)"
              price={45.0}
              rating={3}
              image="https://m.media-amazon.com/images/I/812woqv69CL._AC_UY218_.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
