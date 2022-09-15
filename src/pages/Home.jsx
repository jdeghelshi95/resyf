import React, {useState, useEffect} from 'react'


/* This example requires Tailwind CSS v2.0+ */
import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Connect with Locals',
    description:
      'By working directly with local providers, we make the experiance more seemless and cost effective for you',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'No hidden fees we support the local communities with our 5% fee and give the rest to our local providers',
    icon: ScaleIcon,
  },

]

export default function Home() {
   const [data, setData] = useState([])
   const [fetched, setFetched] = useState(false)

   useEffect ( () =>  {
   
    if(! fetched) {
      fetch("http://localhost:2002/api/reservable-items/").then(resp => resp.json()
      ).then(json => {
        setData(json)
        setFetched(true)
        console.log('aaaa')
      })
    }
  })

  return (
    <div className='main-sky w-full height-full'>
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-orange-400">Transactions</h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            An Easier way to Travel and Connect with Locals
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            This app is designed for you to connect more seemlessly with your Rentals, Cars, and activities you normally do 
            on vacation. This app is designed for you to work more closely with locals and allow for locals to build on their business
            by retaining more profits and providing new sources of income.   
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-orange-400 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </div>
  )
}

    