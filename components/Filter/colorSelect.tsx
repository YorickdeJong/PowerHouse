import { RadioGroup } from "@headlessui/react";
import Typography from "../ui/typography";



function classNames(...classes : any) {
    return classes.filter(Boolean).join(' ')
}



export default function ColorSelect({ colors, selectedColor, setSelectedColor }: any) {
    return (
        <div>
            <Typography variant='title' className="lg:text-xl text-dark/80 font-bold"> Selecteer Kleur</Typography>

            <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                <div className="grid grid-cols-2 gap-y-5 "> {/* Changed from flex to grid with 4 columns */}
                    {colors.map((color: any) => (
                        <div className="flex flex-row">
                            <RadioGroup.Option
                                key={color.name}
                                value={color}
                                className={({ active, checked }: any) =>
                                    classNames(
                                        color.selectedClass,
                                        active && checked ? 'ring ring-offset-1' : '',
                                        !active && checked ? 'ring-2' : '',
                                        'relative -m-0.5 h-8 w-8 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none shadow'
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
                                        'h-7 w-7 rounded-full border border-black border-opacity-10'
                                    )}
                                />
                            </RadioGroup.Option>
                             <Typography variant='muted' className="text-sm lg:text-sm ml-3 mt-1">
                                {colorNamesMap[color.name as keyof typeof colorNamesMap]}
                             </Typography>
                        </div>
                    ))}
                </div>
            </RadioGroup>
        </div>
    )
}
type ColorNames = 'white' | 'black' | 'silver' | 'gold' | 'blue' | 'brown' | 'green' | 'red' | 'yellow' | 'purple' | 'pink' | 'orange' | 'gray' | 'beige';

const colorNamesMap: Record<ColorNames, string> = {
    'white': 'wit',
    'black': 'zwart',
    'silver': 'zilver',
    'gold': 'goud',
    'blue': 'blauw',
    'brown': 'bruin',
    'green': 'groen',
    'red': 'rood',
    'yellow': 'geel',
    'purple': 'paars',
    'pink': 'roze',
    'orange': 'oranje',
    'gray': 'grijs',
    'beige': 'beige'
    
}