import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'


const InListing = () => {
    const [item, setData] = useState(null)
    const [fetched, setFetched] = useState(false)
    let {id} = useParams();
    console.log("ID ", id)
    useEffect ( () =>  {
    
        if(! fetched) {
          fetch(`http://localhost:2002/api/reservable-items/${id}`).then(resp => resp.json()
          ).then(json => {
            setData(json)
            setFetched(true)
            console.log('im here sith lord jarjar', id)
          })
        }
      })

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


    if(item) {
      return (<div onClick={ () => createReservation(item.id)} key={item.id}>
            <p>{item.id } : { item.name }</p>
            <p>{item.description}</p>
            <p>{item.host}</p>
            <p>{item.base_price}</p>
            <p>{item.is_available} </p>
            <a href={ "/reserve/" + id}>Reserve</a>
          </div>)
    
        
    }
    else {
      return 'NOthing yet'
    }
}

export default InListing