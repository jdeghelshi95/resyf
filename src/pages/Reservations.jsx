import { data } from 'autoprefixer'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Reservations = () => {
  const token = localStorage.getItem('token')
  if (!token) {
    window.location = '/signin'
  }

  const [reservations, setData] = useState()

  useEffect(() => {
    fetch('https://seahorse-app-469qs.ondigitalocean.app/api/reservations/', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }).then(response => {
      response.json().then(data => {
  
        setData(data)
      })
    })
  }, [])
  console.log(reservations)

  const getCoverImage = (media) => {
    const coverImage = media.find(img => img.is_cover);
    return coverImage ? <img src={coverImage.file} alt={coverImage.description} /> : null
  }

  const deleteReservation = (reservation) => {
    axios.delete(`https://seahorse-app-469qs.ondigitalocean.app/api/reservations/${reservation.id}`, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    .then((res) => {
      console.log(res)
    })
  }

  return (
    <div className='w-full flex justify-center p-4 '>
      {reservations && reservations.length ? (
        <>
          {reservations.map((reservation) =>  (
            <div className="bg-black w-1/3">
            

            <div>
            {getCoverImage(reservation.reservation_item.media)}
            </div>

            <h2 className='text-white'>
              {reservation.id}
            </h2>
            <h3 className='text-white'>
             Start Date : {reservation.end_date}
             
            </h3>
            <h3 className='text-white'>
             End Date: {reservation.end_date}
            </h3>
            <h3 className='text-white'>
              <button className='text-white' type='button' onClick={() => deleteReservation(reservation)}>Delete</button>
            </h3>
            </div>
      ))}
        </>
      ) : <h4>No reservations</h4>}
    </div>
  )
}

export default Reservations