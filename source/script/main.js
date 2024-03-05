import "../scss/style.scss";

import "./utils/prism.js";

import { iosVhFix } from "./utils/ios-vh-fix.js";
import { burgerInit } from "./modules/header/init-page-menu.js";
import { ProductsInit } from "./modules/productsList/init-products.js";
import { SliderInit } from "./modules/slider/init-slider.js";
import products from "../../public/projects.json";

window.addEventListener("DOMContentLoaded", () => {
  iosVhFix();
  window.addEventListener("load", () => {
    burgerInit();
    if (window.location.pathname === "/data.html")
      ProductsInit(products, window.location.hash);
    if (window.location.pathname === "/library.html") {
      SliderInit();
    }
  });
});
