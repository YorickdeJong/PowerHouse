import { useState } from "react";
import Typography from "../ui/typography";



function addToCart(item: any, selectedColor: string, selectedSize: any, quantity: any) {
    const cartData = localStorage.getItem('cart');
    let cart = cartData ? JSON.parse(cartData) : [];

    // Find the variant based on the selected color and size
    const selectedVariant = item.variants.edges.find((variant: any) => {
        const colorOption = variant.node.selectedOptions.find((option: any) => option.name === "Color" && option.value.toLowerCase() === selectedColor);
        const sizeOption = variant.node.selectedOptions.find((option: any) => option.name === "Size" && option.value.toLowerCase() === selectedSize.name);
        return colorOption && sizeOption;
    });

    if (!selectedVariant) {
        console.error("Variant not found for selected color and size.");
        return;
    }

    console.log('selectedVariant', selectedVariant)
    const variantId = selectedVariant.node.id;
    const image = selectedVariant.node.image.src;
    const alt = selectedVariant.node.image.altText;

    const existingItem = cart.find((object: any) => object.variantId === variantId && 
    object.selectedColor === selectedColor && object.selectedSize.name === selectedSize.name);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ item, quantity, selectedColor, selectedSize, variantId, image, alt });
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    if (window.location.href.includes('#cart-aside')) {
        return
    }
    window.location.href = window.location.href + '#cart-aside';
}


function QuantityButton({setQuantity, quantity} : any) {
   
    return (
        <div className="mt-10 flex w-full justify-between rounded-full bg-neutral px-8 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
            <button 
                className='text-dark/80 '
                onClick={(e) => {
                    e.preventDefault();
                    setQuantity((prev : any) => Math.max(prev - 1, 1));
                }} // Decrement quantity, but ensure it doesn't go below 1
            >
                <Typography variant="muted" className="lg:text-2xl text-dark/60 hover:text-dark">
                    -
                </Typography>
            </button>
            <Typography variant='muted' className='text-dark/80'>
                {quantity}
            </Typography>
            
            <button 
                className='text-dark/80 '
                onClick={(e) => {
                    e.preventDefault();
                    setQuantity((prev : any) => prev + 1);
                }} // Increment quantity
            >
                <Typography variant="muted" className="lg:text-2xl text-dark/60 hover:text-dark">
                    +
                </Typography>
            </button>
        </div>
    );
}


export default function ButtonsComponents({item, selectedColor, selectedSize} : any) {
    const [quantity, setQuantity] = useState(1); // Initial quantity set to 1

    return (
        <>
            <QuantityButton 
            setQuantity={setQuantity}
            quantity={quantity}
            />

            <button
                onClick={(e)=> {
                    e.preventDefault();
                    addToCart(item, selectedColor, selectedSize, quantity)
                }}
                className="mt-4 flex w-full items-center justify-center rounded-full  bg-primary px-8 py-3 text-base font-medium text-white hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
                Aan winkelwagen toevoegen
            </button>
        </>
    )
}