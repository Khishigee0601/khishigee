
let cart = [];

function addToCart(name, price, image) {
    const product = { name, price, image };
    cart.push(product);
    alert(`${name} сагсанд нэмэгдлээ!`);
    updateCartDisplay();
}

function showCart(event) {
    event.preventDefault();
    const cartDisplay = document.getElementById("cart-display");
    cartDisplay.style.display = "block";
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = ""; 

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Сагс хоосон байна.</p>";
        return;
    }

    cart.forEach((item, index) => {
        cartItems.innerHTML += `
            <div style="display: flex; margin-bottom: 10px;">
                <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; margin-right: 10px;">
                <div>
                    <p>${item.name}</p>
                    <p>Үнэ: ${item.price}</p>
                </div>
                <button onclick="removeFromCart(${index})" style="margin-left: auto;">Устгах</button>
            </div>
        `;
    });
}

function removeFromCart(index) {
    cart.splice(index, 1); 
    updateCartDisplay();
     
}
