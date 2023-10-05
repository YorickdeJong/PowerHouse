import Sizes from "../productDetails/Sizes";
import Typography from "../ui/typography";




export default function FitSelect({selectedFit, setSelectedFit} : any) {
    const handleFitChange = (fit : any) => {
        setSelectedFit(fit);
      };

    const sizeObjects = [
        {
            name: 'XXS',
            inStock: true
        },
        {
            name: 'XS',
            inStock: true
        },
        {
            name: 'S',
            inStock: true
        },
        {
            name: 'M',
            inStock: true
        },
        {
            name: 'L',
            inStock: true
        },
        {
            name: 'XL',
            inStock: true
        },
        {
            name: 'XXL',
            inStock: true
        },
    ]   
    return (
        <div>
        <Typography variant = 'title' className="lg:text-xl text-dark/80 font-bold mb-[-10px]">Fit</Typography>
        <Sizes 
            sizeObjects={sizeObjects}
            selectedSize={selectedFit}
            setSelectedSize={handleFitChange}
            card
        />
    </div>
    )
}