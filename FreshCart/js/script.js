async function loadProducts() {
    const container = document.getElementById("productsRow");
    if (!container) return;

    try {
        const res = await fetch("https://ecommerce.routemisr.com/api/v1/products");
        const data = await res.json();
        const products = data.data;

        container.innerHTML = "";

        products.slice(0, 12).forEach(p => {
            container.innerHTML += `
  <div class="col-lg-3 col-md-4 col-sm-6">
    <div class="product-card" data-id="${p._id}">
      <img src="${p.imageCover}" class="product-img">
      <h6 class="mt-2 text-truncate">${p.title}</h6>
      <p class="text-success fw-bold mb-1">${p.price} EGP</p>
      <button class="btn btn-outline-success btn-sm w-100 view-btn" data-id="${p._id}">
        View
      </button>
    </div>
  </div>
`;

        });

      document.querySelectorAll(".product-card").forEach(card => {
  card.onclick = () => {

    document.getElementById("pageLoader").style.display = "flex";

    setTimeout(() => {
      localStorage.setItem("productId", card.getAttribute("data-id"));
      window.location.href = "details.html";
    }, 400); 
  };
});



  } catch (err) {
    container.innerHTML = `<p class="text-danger text-center">Failed to load products</p>`;
  }
}

async function loadProductDetails() {
    const id = localStorage.getItem("productId");
    if (!id) return;

    const slider = document.getElementById("imagesContainer");
    const name = document.getElementById("name");
    const price = document.getElementById("price");
    const desc = document.getElementById("desc");

    if (!slider || !name) return;

    try {
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
        const data = await res.json();
        const p = data.data;

        name.textContent = p.title;
        price.textContent = `${p.price} EGP`;
        desc.textContent = p.description;

        slider.innerHTML = "";

        p.images.forEach((img, i) => {
            slider.innerHTML += `
        <div class="carousel-item ${i === 0 ? 'active' : ''}">
          <img src="${img}" class="d-block w-100 detail-img">
        </div>
      `;
        });

    } catch (err) {
        console.log(err);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname.includes("details.html")) {
        loadProductDetails();
    } else {
        loadProducts();
    }
});
