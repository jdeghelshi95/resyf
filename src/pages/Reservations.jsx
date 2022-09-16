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
  return (
    <div className='w-full flex justify-center p-4 '>
      {reservations && reservations.length ? (
        <>
          {reservations.map((reservation) =>  (
            <div className="bg-black w-1/3">
            
            <h2 className='text-white'>
              {reservation.id}
            </h2>
            <h3 className='text-white'>
             Start Date : {reservation.end_date}
             
            </h3>
            <h3 className='text-white'>
             End Date: {reservation.end_date}
            </h3>
            </div>
      ))}
        </>
      ) : <h4>No reservations</h4>}
    </div>
  )
}

export default Reservations