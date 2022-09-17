import React, { useState, useEffect } from "react";
import ActivityBanner from "../../components/ActivityBanner";
const Activities = () => {
  const [data, setData] = useState([]);
  const [fetched, setFetched] = useState(false);

  const createReservation = (id) => {
    fetch("https://seahorse-app-469qs.ondigitalocean.app/api/reservations/", {
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
      fetch("https://seahorse-app-469qs.ondigitalocean.app/api/reservable-items/?type=activity")
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
      <ActivityBanner/>
      <h1 className="text-center ">Activities</h1>
      <div className=" w-full h-200 flex flex-wrap p-6 ">
        {data.map((item) => (
          <>
            <div className="text-white text-center w-1/3  bg-orange-500 p-4 m-2 rounded-l drop-shadow">
              <p key={item.id}>
                <a href={"/listing/" + item.id}>
                  {item.id}: {item.name}

                  { item.media.map(media => {
                    if(media.is_cover) {
                      return <img src={media.file} alt={media.description}/>

                    }
                    else {
                      return null
                    }
                  }) }
                </a>
              </p>
              <div>{item.description}</div>
              <div>{item.host.first_name} {item.host.last_name}</div>
              <div>{item.base_price}</div>
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

export default Activities;
