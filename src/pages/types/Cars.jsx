import React, {useState, useEffect} from 'react'

const Cars = () => {
    const [data, setData] = useState([])
    const [fetched, setFetched] = useState(false)
 
    const createReservation = (id) => {
        fetch('http://localhost:2002/api/reservations/',
         {method: 'POST', headers: {'Content-Type': 'application/json'},
          body: 
          JSON.stringify(
            {
                "id": 2,
                "start_date": "2022-09-15T13:02:00Z",
                "end_date": "2022-09-01T13:02:00Z",
                "status": "requested",
                "reservation_item": 5,
                "reservation_user": 2
            })
        }
          ).then(resp => resp.json()).then(json => console.log('done'))
    }
    useEffect ( () =>  {
    
     if(! fetched) {
       fetch("http://localhost:2002/api/reservable-items/?type=car").then(resp => resp.json()
       ).then(json => {
         setData(json)
         setFetched(true)
         console.log('test here')
       })
     }
   })
  return (
    <div>
    <div>
    { data.map( item => <p onClick={ () => createReservation(item.id)} key={item.id}>{item.id } : { item.name }</p> )} 
    </div>
    </div>
  )
}

export default Cars