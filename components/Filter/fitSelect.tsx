import Typography from "../ui/typography";




export default function FitSelect({fits, selectedFit, setSelectedFit} : any) {
    const handleFitChange = (fit : any) => {
        setSelectedFit((prev: any ) => (prev.includes(fit) ? prev.filter((f : any) => f !== fit) : [...prev, fit]));
      };

    return (
        <div>
        <Typography variant = 'title' className="lg:text-xl text-dark/80 font-bold">Fit</Typography>
        <hr className="mt-2 border-none bg-muted h-[1px]"/>
        {fits.map((fit : any) => (
            <div className="flex items-center mt-4 ">
            <input 
            type="checkbox" 
            className="custom-checkbox" 
            checked={selectedFit.includes(fit)}
            onChange={() => handleFitChange(fit)}
            />
            <span className="ml-4 lg:text-md text-dark">{fit}</span>
        </div>
        ))}
    </div>
    )
}