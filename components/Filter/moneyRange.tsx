

import Typography from "../ui/typography";
import { Range } from 'react-range';





export default function MoneyRange({selectedPrice, setSelectedPrice} : any) {
    return (
        <div>
        <Typography variant = 'muted' className="lg:text-xl text-dark/80 font-bold">Selecteer Prijs</Typography>
        <hr className="mt-2 border-none bg-muted h-[1px]"/>
        
        <Typography variant = 'muted' className="block text-sm lg:text-sm font-medium text-gray-700 my-5">
        Prijs: €{selectedPrice[0]} - €{selectedPrice[1]}
        </Typography>
        <Range
            step={1}
            min={0}
            max={150}
            values={selectedPrice}
            onChange={(values) => setSelectedPrice(values)}
            renderTrack={({ props, children }) => (
            <div

                {...props}
                style={{
                ...props.style,
                height: '6px',
                width: '80%',
                borderRadius: '4px',
                marginLeft: 10,
                backgroundColor: '#e2e2e2',
                }}
            >
                {children}
            </div>
            )}
            renderThumb={({ props }) => (
            <div
                {...props}
                style={{
                ...props.style,
                height: '20px',
                width: '20px',
                backgroundColor: '#333',
                borderRadius: '50%',
                cursor: 'pointer',
                }}
            />
            )}
        />
    </div>
    )
}