const productsGrid = document.querySelector(".products-grid");
const loadMore = document.querySelector(".main-products__more");
let quantityProducts = 5;
let dataLength = "";

if (productsGrid) {
  const fetchProducts = (quantity = 5) => {
    productsGrid.innerHTML = "";
  
    fetch("./products.json")
      .then(response => response.json())
      .then(data => {
        dataLength = data.length;
        for (let i = 0; i < data.length; i++) {
          if (i < quantity) {
            productsGrid.innerHTML += `
                    <li class="products-grid__item">
                      <article class="product">
                        <div class="product__image">
                          <img src=${data[i].image} alt=${data[i].title}>
                        </div>
                  
                        <span class="product-prop product__prop best">
                          Best Seller
                        </span>
                  
                        <h3 class="product__title">
                          <a href="#">
                            ${data[i].title}
                          </a>
                        </h3>
                  
                        <span class="product__price">
                        ${data[i].price}
                        </span>
                      </article>
                    </li>`;
          }
        }
      });
  };
  
  fetchProducts(quantityProducts);
  
  loadMore.addEventListener("click", (e) => {
    e.preventDefault();
  
    quantityProducts = quantityProducts + 5;
    fetchProducts(quantityProducts);
  
    if (quantityProducts >= dataLength) {
      loadMore.style.display = "none";
    }
  });
}
