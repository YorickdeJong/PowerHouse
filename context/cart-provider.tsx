function addToCart(variantId: any, quantity: any) {
    const cartData = localStorage.getItem('cart');
    let cart = cartData ? JSON.parse(cartData) : [];

    const existingItem = cart.find((item: any) => item.variantId === variantId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ variantId, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}