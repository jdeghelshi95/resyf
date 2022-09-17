import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import ReactLoading from 'react-loading';

import "react-image-gallery/styles/css/image-gallery.css";

const imagesTest = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];


const InListing = () => {
  const [item, setData] = useState(null);
  const [fetched, setFetched] = useState(false);

  
  const [images, setImages] = useState([]);

  let { id } = useParams();
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (!fetched) {
      fetch(`https://seahorse-app-469qs.ondigitalocean.app/api/reservable-items/${id}`)
        .then((resp) => resp.json())
        .then((json) => {
          setData(json);
          let imgs = json.media.map((img) => {
            return { original: img.file, thumbnail: img.file };
          });
          console.log(imgs);
          setFetched(true);
          setImages(imgs);
        });
    }
  }, [fetched, id]);

  const createReservation = (id) => {
    fetch("https://seahorse-app-469qs.ondigitalocean.app/api/reservations/", {
      method: "POST",
      headers: { "Content-Type": "application/json", 'Authorization': 'Bearer ' + token },
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

  if (item) {
    return (
      <div className=" husky-stare">
        <div className="flex justify-center " aria-hidden="true">
          <div className="bg-orange-400 bg-opacity-90  w-1/2 h-full text-center p-2 ">
            <div
              classname=" flex justify-center w-full bg-red-400"
              onClick={() => createReservation(item.id)}
              key={item.id}
            >
            <div className="flex justify-center">
            <div className="w-3/4">
            <div className="bg-white text-black p-2 text-2xl">
              <p>
                {item.host.first_name} {item.host.last_name}
              </p>
            </div>
              <p>{item.is_available} </p>
              <div className="flex justify-center p-2">
                {/* <ImageGallery items={images} /> */}
                {/*item.media.map((media) => {
                  return (
                    <img
                      className="w-3/4 mix-blend-normal"
                      key={media.id}
                      src={media.file}
                      alt={media.description}
                    />
                  );
                })*/}
                </div>
                <ImageGallery items={images} showThumbnails={false} showPlayButton={false} />
              </div>
              </div>

              {/* item Data */}
              <div className="flex justify-center">
                <div className="w-3/4">
                  <div className="bg-white">
                    <p>
                      {item.id} : {item.name}
                    </p>
                  </div>
                  <div className="bg-white  h-fit">
                    <p>{item.description}</p>
                  </div>
                  <div className="bg-white">
                    <p>{item.base_price}</p>
                  </div>
                </div>
              </div>
              {/* reserve button */}
              <div className="p-2">
                <button className="  p-2 btn btn-primary text-white shadow-lg bg-red-400 hover:bg-orange-700 hover:text-white hover:shadow-xl rounded-xl">
                  <a className="text-2xl " href={"/reserve/" + id}>
                    Reserve
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return "Loading...";
  }
};

export default InListing;
