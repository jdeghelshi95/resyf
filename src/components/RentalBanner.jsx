/* This example requires Tailwind CSS v2.0+ */
export default function RentalBanner() {
    return (
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://media4.giphy.com/media/LSkXhWgUjDMK87mGkW/giphy.gif?cid=790b76110d1b7ce8b0fc66ea0ee39925cc1685b326b8fd09&rid=giphy.gif&ct=g"
            alt=""
          />
          <div className="absolute inset-0 bg-orange-600 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Rentals</h1>
          <p className="mt-6 max-w-3xl text-xl text-indigo-100">
            Book a rental in truly amazing locations and best of all work direct with locals to support their communities
          </p>
        </div>
      </div>
    )
  }
  