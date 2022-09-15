
export default function Categories() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">what type of listing are you looking for</h2>
          <a href="all-lists" className="hidden text-sm font-semibold text-orange-400 hover:text-indigo-500 sm:block">
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <img
              src="https://i.imgur.com/JzhSSUc.jpg"
              alt="famly of 4 walking into a rental excitingly."
              className="object-cover object-center group-hover:opacity-75"
            />
            <div aria-hidden="true" className="bg-gradient-to-b from-transparent to-black opacity-50" />
            <div className="flex items-end p-6">
              <div>
                <h3 className="font-semibold text-black">
                  <a href="categories/rentals">
                    <span className="absolute inset-0" />
                    Rentals
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-black">
                  See Listings 
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <img
              src="https://i.imgur.com/h4T6A81.jpg"
              alt="Two huskies sticking their heads outside of a car window."
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="/categories/cars">
                    <span className="absolute inset-0" />
                    Cars
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  See Listings
                </p>
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-none sm:relative sm:h-full">
            <img
              src="https://i.imgur.com/XUQWaAK.jpg"
              alt="Boat with divers underneath perspective shows above and under water."
              className="object-cover object-center group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
            />
            <div className="flex items-end p-6 sm:absolute sm:inset-0">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="/categories/activities">
                    <span className="absolute inset-0" />
                    Activities
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  See Listings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
