  /* This example requires Tailwind CSS v2.0+ */
  export default function ActivityBanner() {
    return (
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://media1.giphy.com/media/qkA9YM25e2K3FIqftL/giphy.gif?cid=790b7611af65ed7f32df721e301a423a4937503a0bd1b737&rid=giphy.gif&ct=g"
            alt="Boat tour video"
          />
          <div className="absolute inset-0 bg-orange-600 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Activities Listings</h1>
          <p className="mt-6 max-w-3xl text-xl text-indigo-100">
            Choose from various unique availible cars from our hosts.
          </p>
        </div>
      </div>
    )
  }