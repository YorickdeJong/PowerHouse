import { cn } from "@/lib/utils";
import { RadioGroup } from "@headlessui/react";


function classNames(...classes : any) {
    return classes.filter(Boolean).join(' ')
}

const colors = [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ]

export default function ColorsComponent({selectedColor, setSelectedColor, colorObjects} : any) {

    console.log('colorObjects', colorObjects)
    return (
        <div>
        <h3 className="text-sm font-medium text-gray-900">Color</h3>

            <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
            <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
            <div className="flex items-center space-x-3">
                {colorObjects.map((color: {name: string, class: string, selectedClass: string}) => (
                <RadioGroup.Option
                    key={color.name}
                    value={color}
                    className={({ active, checked }) =>
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
                        'h-8 w-8 rounded-full border border-black border-opacity-10'
                    )}
                    />
                </RadioGroup.Option>
                ))}
            </div>
            </RadioGroup>
      </div>
    )
}