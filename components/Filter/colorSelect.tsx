import { RadioGroup } from "@headlessui/react";
import Typography from "../ui/typography";



function classNames(...classes : any) {
    return classes.filter(Boolean).join(' ')
}



export default function ColorSelect({ colors, selectedColor, setSelectedColor }: any) {
    return (
        <div>
        <Typography variant = 'title' className="lg:text-xl text-dark/80 font-bold"> Selecteer Kleur</Typography>

        <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
            <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
            <div className="flex items-center space-x-3">
            {colors.map((color : any) => (
                <RadioGroup.Option
                key={color.name}
                value={color}
                className={({ active, checked } : any) =>
                    classNames(
                    color.selectedClass,
                    active && checked ? 'ring ring-offset-1' : '',
                    !active && checked ? 'ring-2' : '',
                    'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                    )
                }
                >
                <RadioGroup.Label as="span" className="sr-only">
                    {color.name}
                </RadioGroup.Label>
                <span
                    aria-hidden="true"
                    className={classNames(
                    color.class,
                    'h-6 w-6 rounded-full border border-black border-opacity-10'
                    )}
                />
                </RadioGroup.Option>
            ))}
            </div>
        </RadioGroup>
    </div>
    )
}


