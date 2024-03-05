export const burgerInit = () => {
  const elements = {
    burgerName: "[data-sandwich='data-sandwich']",
    menuName: "[data-main-nav='nav']",
    logoName: "[data-header-logo='data-header-logo']",
    itemsName: "[data-nav-item='item']",
  };

  class BurgerOpen {
    constructor({ burgerName, menuName, logoName, itemsName }) {
      this.burgerBtn = document.querySelector(burgerName);
      this.burgerMenu = document.querySelector(menuName);
      this.logo = document.querySelector(logoName);
      this.items = [...document.querySelectorAll(itemsName)];
      this.isOpen = false;
      this.classActive = "is-active";
    }

    toggleClassItems = (trigger) => {
      let array = [...this.items];
      if (this.isOpen) {
        array = array.reverse();
      }
      let delay = 0;
      array.forEach((item) => {
        delay += 200;
        trigger === "add"
          ? setTimeout(() => {
              item.classList.add(this.classActive);
            }, delay)
          : item.classList.remove(this.classActive);
      });
    };

    onOpen = () => {
      [this.burgerBtn, this.burgerMenu, this.logo].forEach((el) =>
        el.classList.add(this.classActive)
      );
      this.toggleClassItems("add");
      document.body.style.overflow = "hidden";
      this.logo.style.zIndex = "1000";
      this.isOpen = true;
    };
    onClose = () => {
      [this.burgerBtn, this.burgerMenu, this.logo].forEach((el) =>
        el.classList.remove(this.classActive)
      );
      this.toggleClassItems("remove");
      document.body.style.overflow = "visible";
      this.logo.style.zIndex = "auto";
      this.isOpen = false;
    };
  }

  const BurgerOptions = new BurgerOpen(elements);
  BurgerOptions.burgerBtn.addEventListener("click", () => {
    BurgerOptions.isOpen ? BurgerOptions.onClose() : BurgerOptions.onOpen();
  });
  document.addEventListener("keydown", (e) => {
    e.code === "Escape" && BurgerOptions.onClose();
  });
  const resizeObserver = new ResizeObserver((entries, observer) => {
    for (let entry of entries) {
      const size = entry.contentBoxSize[0].inlineSize;
      size >= 1024 && BurgerOptions.onClose();
    }
  });
  resizeObserver.observe(document.body);
};
