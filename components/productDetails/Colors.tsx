import { cn } from "@/lib/utils";
import { RadioGroup } from "@headlessui/react";
import Typography from "../ui/typography";
import colorMapping from "@/lib/colorMap";


function classNames(...classes : any) {
    return classes.filter(Boolean).join(' ')
}

export default function ColorsComponent({selectedColor, setSelectedColor, colorObjects, card} : any) {


    console.log('COLORS', colorObjects)
    const colors = colorObjects.map((color:any) => {
        const colorLowerCase = color.toLowerCase()
        return (
            colorLowerCase
        )
    })

    console.log('colors LOwer', colors)
    return (
        <div>
        {!card && <h3 className="text-sm font-medium text-gray-900">Color</h3>}

            <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
            <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
            <div className="flex items-center space-x-3">
                {colors.map((color: string) => {
                    const bgColorHex = colorMapping[color];
                    return (
                        <RadioGroup.Option
                            key={color}
                            value={color}
                            style={{ '--tw-ring-color': bgColorHex === '#FFFFFF' ? '' : bgColorHex } as React.CSSProperties}
                            className={({ active, checked }) =>
                            classNames(
                                // color.selectedClass,
                                active && checked ? 'ring ring-offset-1' : '',
                                !active && checked ? 'ring-2' : '',
                                'relative  flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                            )
                            }
                        >
                            <RadioGroup.Label as="span" className="sr-only">
                            {bgColorHex}
                            </RadioGroup.Label>
                            <span
                                aria-hidden="true"
                                className="h-8 w-8 rounded-full border border-black border-opacity-10"
                                style={{ backgroundColor: bgColorHex }}
                            />
                            {/* <Typography variant='muted'>{color.bg_color}</Typography> */}
                        </RadioGroup.Option>
                        )}
                    )
                }
            </div>
            </RadioGroup>
      </div>
    )
}