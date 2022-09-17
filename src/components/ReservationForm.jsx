import { useState, useEffect } from "react";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon, TrashIcon } from "@heroicons/react/20/solid";
import 'react-calendar/dist/Calendar.css';
import Calender from 'react-calendar'
import { useParams } from "react-router-dom";
import axios from "axios";
import dayjs from 'dayjs'
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

  const dateDiff = () => {
    const date1 = dayjs(end_date)
    const date2 = dayjs(start_date)
    return date1.diff(date2, 'd')
  }

  const getTotal = () => {
    if (!start_date || !end_date) return 0

    return dateDiff() * item.base_price
  }

  console.log("datediff", dateDiff())


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
      "https://seahorse-app-469qs.ondigitalocean.app/api/reservations/",
      // "http://locahost:2002/api/reservations/",
      {
        start_date,
        end_date,
        reservation_item: id,
        reservation_user: 1,
      },
      {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token"),
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
                            src={coverImage.file}
                            alt={coverImage.description}
                          />                        
                      }
                    </div>
                    <dl className="space-y-6 border-t border-gray-200 py-6 px-4 sm:px-6">             
                     
                      <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                        <dt className="text-base font-medium">Total</dt>
                        <dd className="text-base font-medium text-gray-900">
                          ${getTotal()}
                        </dd>
                      </div>
                    </dl>
                </>
              }

              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <button
                  type="submit"
                  className="w-full rounded-md border border-transparent bg-orange-400 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Confirm Reservation
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
