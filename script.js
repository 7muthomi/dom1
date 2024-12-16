let products = document.querySelectorAll(".product");
let totalPriceElement = document.getElementById("total-price");

function updateTotalPrice() {
  let totalPrice = 0;
  products.forEach((product) => {
    let quantityElement = product.querySelector(".quantity-value");
    let priceElement = product.querySelector("p");

    let quantity = parseInt(quantityElement.textContent);
    let price = parseFloat(priceElement.textContent.replace("$", ""));

    totalPrice += quantity * price;
  });

  totalPriceElement.textContent = totalPrice.toFixed(2);
}

products.forEach((product) => {
  let plusButton = product.querySelector(".plus");
  let minusButton = product.querySelector(".minus");
  let deleteButton = product.querySelector(".delete");
  let heartButton = product.querySelector(".like");

  plusButton.addEventListener("click", () => {
    let quantityElement = product.querySelector(".quantity-value");
    let quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = quantity + 1;
    updateTotalPrice();
  });

  minusButton.addEventListener("click", () => {
    let quantityElement = product.querySelector(".quantity-value");
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 0) {
      quantityElement.textContent = quantity - 1;
      updateTotalPrice();
    }
  });

  deleteButton.addEventListener("click", () => {
    product.remove();
    updateTotalPrice();
  });

  heartButton.addEventListener("click", () => {
    heartButton.classList.toggle("liked");
  });
});

// Initial total price calculation
updateTotalPrice();
