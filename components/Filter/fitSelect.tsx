import Sizes from "../productDetails/Sizes";
import Typography from "../ui/typography";




export default function FitSelect({selectedFit, setSelectedFit} : any) {
    const handleFitChange = (fit : any) => {
        setSelectedFit(fit);
      };

    const sizeObjects = [
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
            name: 'xL',
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