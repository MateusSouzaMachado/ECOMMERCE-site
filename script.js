let cart = [];

// Adicionar ao carrinho
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const product = {
            id: this.dataset.id,
            name: this.dataset.name,
            price: parseFloat(this.dataset.price),
        };
        cart.push(product);
        updateCart();
    });
});

// Atualizar a interface do carrinho
function updateCart() {
    const cartButton = document.getElementById('cart-button');
    const cartModal = document.getElementById('cart-modal');
    const cartItems = document.getElementById('cart-items');

    // Atualizar contador do carrinho
    cartButton.textContent = `Carrinho (${cart.length})`;

    // Exibir itens no carrinho
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    // Exibir modal do carrinho
    cartModal.style.display = 'block';
}

// Finalizar compra (simulação com PayPal)
document.getElementById('finalize-button').addEventListener('click', function() {
    alert('Você será redirecionado para o PayPal para completar a compra.');

    // Exemplo de integração com o PayPal:
    // Aqui, você pode chamar a API do PayPal para criar uma transação real
    // Para fins de demonstração, estamos apenas simulando o redirecionamento
    window.location.href = 'https://www.paypal.com';
});
