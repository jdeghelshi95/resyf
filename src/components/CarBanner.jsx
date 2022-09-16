/* This example requires Tailwind CSS v2.0+ */
export default function Carbanner() {
    return (
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://media3.giphy.com/media/sBdWHqqulBUIki3zUh/giphy.gif?cid=790b7611269f1795c2204e2ccdd46702fdd268cbb8234ef3&rid=giphy.gif&ct=g"
            alt="car driving in mountain video"
          />
          <div className="absolute inset-0 bg-orange-600 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Car Listings</h1>
          <p className="mt-6 max-w-3xl text-xl text-indigo-100">
          Choose from various unique availible cars from our hosts
          </p>
        </div>
      </div>
    )
  }
  