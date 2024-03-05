import { filterArray } from "../filter/init-filter.js";
import CardList from './init-cards';

const ProductsRender = (container, array) => {
  const createCards = new CardList(container, array);
  createCards.render();
};

export const ProductsInit = (products, hash) => {

  let array = [...products];
  const containerList = document.querySelector("[data-project='parent'");
  const tabsProduct = [...document.querySelectorAll("[data-filter='link']")];
  if (hash) {
    if (hash === "#all") {
      ProductsRender(containerList, array);
    } else {
      ProductsRender(containerList, filterArray(array, hash));
    }
  } else {
    ProductsRender(containerList, array);
  }

  tabsProduct.forEach((link) => {
    if (link.getAttribute("href") === hash) {
      tabsProduct.forEach(item => item.classList.remove("is-active"))
      link.classList.add("is-active");
    } else {
      if (link.getAttribute("href") === "#all") {
        link.classList.add("is-active");
      } else {
        link.classList.remove("is-active");
      }
    }
  });

  tabsProduct.forEach((el) => {
    el.addEventListener("click", (e) => {
      const href = e.target.getAttribute("href");
      tabsProduct.forEach((el) => el.classList.remove("is-active"));
      e.target.classList.add("is-active");
      if (href === "#all") {
        ProductsRender(containerList, array);
      } else {
        ProductsRender(containerList, filterArray(array, href));
      }
    });
  });
};
