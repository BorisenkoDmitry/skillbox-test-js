export default class CardList {
    constructor(container, array) {
      this.container = container;
      this.array = array;
    }
    createCard = (obj) => {
      const card = document.createElement("li");
      card.classList.add("courses__item");
      card.setAttribute("data-template", "element");
      card.innerHTML = `
      <div class="product-card ${obj.classes.join(" ")}">
      <div class="product-card__inner">
        <div class="product-card__box">
          <span class="product-card__label">${obj.label}</span>
          <span class="product-card__hit">
            <svg width="12" height="12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path xmlns="http://www.w3.org/2000/svg" d="M10 5H7.149l.867-5L1 7h2.851l-.867 5L10 5z"
                    fill="currentColor"/>
            </svg>
            <span class="product-card__hit-text">Хит продаж</span>
          </span>
        </div>
        <h2 class="product-card__title">${obj.title}</h2>
        <img class="product-card__img" src="${obj.src}" height="${
        obj.height
      }" width="${obj.width}"
             alt="${obj.alt}">
      </div>
      <span class="product-card__date">${obj.date}</span>
      <a href="${obj.href}" class="product-card__shadow-link" target="_blank"></a>
    </div>
      `;
      return card;
    };
    render = () => {
      this.container.innerHTML = "";
      this.array.map((obj) => this.container.append(this.createCard(obj)));
    };
  }