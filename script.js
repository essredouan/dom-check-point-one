// Select all quantity-related elements
const quantityElements = document.querySelectorAll(".quantity");
const plusButtons = document.querySelectorAll(".fa-plus-circle");
const minusButtons = document.querySelectorAll(".fa-minus-circle");
const deleteButtons = document.querySelectorAll(".fa-trash-alt");
const heartButtons = document.querySelectorAll(".fa-heart");
const totalPriceElement = document.querySelector(".total");

// Function to update total price
function updateTotal() {
  let total = 0;
  document.querySelectorAll(".card-body").forEach((card) => {
    const price = parseFloat(card.querySelector(".unit-price").textContent);
    const quantity = parseInt(card.querySelector(".quantity").textContent);
    total += price * quantity;
  });
  totalPriceElement.textContent = `${total} $`;
}

// Increase quantity
plusButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const quantityElement = this.parentNode.querySelector(".quantity");
    let quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = quantity + 1;
    updateTotal();
  });
});

// Decrease quantity
minusButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const quantityElement = this.parentNode.querySelector(".quantity");
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 0) {
      quantityElement.textContent = quantity - 1;
      updateTotal();
    }
  });
});

// Delete item from cart
deleteButtons.forEach((button) => {
  button.addEventListener("click", function () {
    this.closest(".card-body").remove();
    updateTotal();
  });
});

// Toggle like button (heart)
heartButtons.forEach((button) => {
  button.addEventListener("click", function () {
    this.classList.toggle("liked"); // Apply a class to change color in CSS
  });
});

// Initial total update
updateTotal();
