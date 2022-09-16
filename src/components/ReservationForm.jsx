import { useState, useEffect } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon, TrashIcon } from "@heroicons/react/20/solid";
import 'react-calendar/dist/Calendar.css';
import Calender from 'react-calendar'
import { useParams } from "react-router-dom";
import axios from "axios";
/*const listing = [
  {
    id: 1,
    title: "Basic Tee",
    href: "#",
    price: "$32.00",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
];*/

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ReservationForm() {
  const [start_date, setStartDate] = useState();
  const [end_date, setEndDate] = useState();
  const [reservation_item] = useState();
  const [reservation_user] = useState();

  const [item, setData] = useState();
  const [fetched, setFetched] = useState(false);
  const [coverImage, setCoverImage] = useState(null);

  const { id } = useParams();


  useEffect(() => {
    if (!fetched) {
      fetch(`https://seahorse-app-469qs.ondigitalocean.app/api/reservable-items/${id}`)
        .then((resp) => resp.json())
        .then((json) => {
          setData(json);
          setFetched(true);
          setCoverImage(json.media.find(img => img.is_cover))
        });
    }
  }, [fetched, id]);

  console.log(item)


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(start_date, end_date);

    /*fetch("https://seahorse-app-469qs.ondigitalocean.app/api/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        start_date,
        end_date,
        reservation_item: id,
        reservation_user,
      }),
    });*/

    axios.post(
      "https://seahorse-app-469qs.ondigitalocean.app/api/reservations",
      {
        start_date,
        end_date,
        reservation_item: id,
        reservation_user,
      },
      {
        headers: {
          'Authorization': localStorage.getItem("token"),
        }
      }
    )
  };

  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Checkout</h2>

        {item && 
          <>
            <div>Name: {item.name}</div>
            <div>Description: {item.description}</div>
            <div>Available: {item.is_available ? 'Yes' : 'No'}</div>
            <div>Price: {item.base_price}</div>
            <br />
            <div>HOST</div>
            <div>{item.host.first_name} {item.host.last_name}</div>
          </>

        }

        <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16" onSubmit={handleSubmit}>
          <div>
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                Date Entries
              </h2>

              
{/* calender entries */}
              <div className="mt-4">
                <h1>Start Date</h1>
                <input type="date" className="w-fit h-fit shadow-lg" onChange={(e) => setStartDate(e.target.value)}  value={start_date}/>
                </div>
               <div className="mt-1">
               <h1>End Date</h1>
               <input type="date" className="w-fit h-fit shadow-lg" value={end_date} onChange={(e) => setEndDate(e.target.value)}/>
              
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div className="mt-10 lg:mt-0">
            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

            <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
              <h3 className="sr-only">Items in your cart</h3>
              {item && <>
                   <div className="flex-shrink-0">
                      {coverImage && 
                          <img
                            className="w-3/4 mix-blend-normal"
                            key={coverImage.id}
                            src={coverImage.file}
                            alt={coverImage.description}
                          />                        
                      }
                    </div>

                    <div className="ml-6 flex flex-1 flex-col">
                      <div className="flex">
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm">
                            <a
                              href={item.href}
                              className="font-medium text-gray-700 hover:text-gray-800"
                            >
                              {item.title}
                            </a>
                          </h4>
                          <p className="mt-1 text-sm text-gray-500">{}</p>
                          <p className="mt-1 text-sm text-gray-500">{}</p>
                        </div>

                        <div className="ml-4 flow-root flex-shrink-0">
                          <button
                            type="button"
                            className="-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Remove</span>
                            <TrashIcon className="h-5 w-5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-1 items-end justify-between pt-2">
                        <p className="mt-1 text-sm font-medium text-gray-900">
                          {}
                        </p>

                        <div className="ml-4">
                          <label htmlFor="quantity" className="sr-only">
                            Quantity
                          </label>
                          <select
                            id="quantity"
                            name="quantity"
                            className="rounded-md border border-gray-300 text-left text-base font-medium text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                          >
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <dl className="space-y-6 border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <dt className="text-sm">Subtotal</dt>
                        <dd className="text-sm font-medium text-gray-900">$64.00</dd>
                      </div>
                      <div className="flex items-center justify-between">
                        <dt className="text-sm">Shipping</dt>
                        <dd className="text-sm font-medium text-gray-900">$5.00</dd>
                      </div>
                      <div className="flex items-center justify-between">
                        <dt className="text-sm">Taxes</dt>
                        <dd className="text-sm font-medium text-gray-900">$5.52</dd>
                      </div>
                      <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                        <dt className="text-base font-medium">Total</dt>
                        <dd className="text-base font-medium text-gray-900">
                          $75.52
                        </dd>
                      </div>
                    </dl>
                </>
              }

              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <button
                  type="submit"
                  className="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Confirm order
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
