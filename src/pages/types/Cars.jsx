import React, { useState, useEffect } from "react";
import CarBanner from "../../components/CarBanner";
const Rentals = () => {
  const [data, setData] = useState([]);
  const [fetched, setFetched] = useState(false);

  const createReservation = (id) => {
    fetch("http://localhost:2002/api/reservations/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: 2,
        start_date: "2022-09-15T13:02:00Z",
        end_date: "2022-09-01T13:02:00Z",
        status: "requested",
        reservation_item: 5,
        reservation_user: 2,
      }),
    })
      .then((resp) => resp.json())
      .then((json) => console.log("done"));
  };
  useEffect(() => {
    if (!fetched) {
      fetch("http://localhost:2002/api/reservable-items/?type=car")
        .then((resp) => resp.json())
        .then((json) => {
          setData(json);
          setFetched(true);
          console.log("im here sith lord jarjar");
        });
    }
  });
  return (
    <div className="w-full h-full ">
      <CarBanner/>
      <div className=" w-full h-200 flex flex-wrap p-6 ">
        {data.map((item) => (
          <>
            <div className="text-white text-center w-1/3  bg-orange-500 p-4 m-2 rounded-l drop-shadow">
               <a href={"/listing/" + item.id}>
                  <div className="bg-white text-black text-3xl">
                  <h1>
                  {item.id}: {item.name}
                  </h1>
                  </div>
                  { item.media.map(media => {
                    if(media.is_cover) {
                      return <img src={media.file} alt={media.description}/>

                    }
                    else {
                      return null
                    }
                  }) }
                </a>
              <div className="bg-white text-black text-2xl">{item.description}</div>
              <div>{item.host.first_name} {item.host.last_name}</div>
              <div className="p-2 text-4xl">Daily Rate: ${item.base_price}.00</div>
              <button
                key={item.id}
                href={"/listing/" + item.id}
                type="button"
                className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-black bg-white hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <a href={"/listing/" + item.id}>Details</a>
              </button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Rentals;
