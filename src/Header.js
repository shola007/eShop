import React from "react";
import { Link } from "react-router-dom";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const [{ basket }, dispatch] = useStateValue();

  console.log(dispatch);
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header_logo">
          <StorefrontIcon className="header_logoImage" fontSize="large" />
          <h2 className="header_logoname">eShop</h2>
        </div>
      </Link>

      <div className="header_search">
        <input type="text" className="search_input" />
        <SearchIcon className="header_searchicon" />
      </div>

      <div className="header_nav">
        <Link to="/login" style={{ textDecoration: "none" }}>
          <div className="nav_item">
            <span className="nav_itemlineOne">Hello Guest</span>
            <span className="nav_itemlineTwo">Sign in</span>
          </div>
        </Link>

        <div className="nav_item">
          <span className="nav_itemlineOne">Your</span>
          <span className="nav_itemlineTwo">Shop</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav_itemBasket">
            <ShoppingBasketIcon />
            <span className="nav_itemlineTwo nav_basketcount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Header;
