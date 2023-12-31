import { Link } from "lucide-react";





export default function Form({handleSubmit} : any) {
    return (
        <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                    Naam
                    </label>
                    <div className="mt-2">
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary/90 sm:text-sm sm:leading-6 focus:bg-transparent"
                    />
                    </div>
                </div>

                <div>
                    <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                    Achternaam
                    </label>
                    <div className="mt-2">
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary/90 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>


                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email adres
                    </label>
                    <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary/90 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Wachtwoord
                    </label>
                    <div className="text-sm">
                        <Link href="#" className="font-semibold text-primary/90 hover:text-primary">
                        Wachtwoord Vergeten?
                        </Link>
                    </div>
                    </div>
                    <div className="mt-2">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary/90 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>

                <div>
                    <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                    Sign in
                    </button>
                </div>
                </form>
        </div>
    )
}