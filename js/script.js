function addToCart() {
  alert("Product added to cart!");
}

document.querySelector("form")?.addEventListener("submit", function(e) {
  const email = document.querySelector("#email").value;
  if (!email.includes("@")) {
    alert("Please enter a valid email.");
    e.preventDefault();
  }
});