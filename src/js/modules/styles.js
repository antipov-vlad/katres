//Коллекция  элементов products__item
// const productsItems = document.querySelector('.product__list')
const productsItem = document.querySelector(".products__item");

const coloringFirstWord = (collectionElement) => {
  const firstWorld = productsItem.textContent.split(" ")[0];

  // firstWorld.style.color = '#FFDA00'
};

coloringFirstWord();

export default coloringFirstWord;
