
'use client'
import { cn } from "@/lib/utils";
import { RadioGroup } from "@headlessui/react";


function classNames(...classes : any) {
    return classes.filter(Boolean).join(' ')
}


export default function Sizes({sizeObjects, selectedSize, setSelectedSize, card} : any){
    return (
    <div className={cn("mt-10", {
        'mt-2' : card
    })}>
        <div className="flex items-center justify-between">
        {!card && <h3 className="text-sm font-medium text-gray-900">Maat</h3>}
        {!card && <a href="#" className="text-sm font-medium text-secondary hover:text-tertairy">
            Hulp bij maatkeuze
        </a>}
        </div>

        <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
        <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
        <div className={cn("grid grid-cols-5 gap-4", {
                'h-[40px]' : card
        })}>
            {sizeObjects.slice(0,5).map((size : any) => (
            <RadioGroup.Option
                key={size.name}
                value={size}
                disabled={!size.inStock}
                className={({ active }: any) =>
                classNames(
                    size.inStock
                    ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                    : 'cursor-not-allowed bg-gray-50 text-gray-200',
                    active ? 'ring-2 ring-primary' : '',
                    'group relative flex items-center justify-center rounded-md border px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 ',
                    card ? 'py-0 sm:py-0' : 'sm:py-6  py-3'
                )
                }
            >
                {({ active, checked }: any) => (
                <>
                    <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                    {size.inStock ? (
                    <span
                        className={classNames(
                        active ? 'border' : 'border-2',
                        checked ? 'border-primary' : 'border-transparent',
                        'pointer-events-none absolute -inset-px rounded-md'
                        )}
                        aria-hidden="true"
                    />
                    ) : (
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                    >
                        <svg
                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        stroke="currentColor"
                        >
                        <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                        </svg>
                    </span>
                    )}
                </>
                )}
            </RadioGroup.Option>
            ))}
        </div>
        </RadioGroup>
    </div>
    )   
}