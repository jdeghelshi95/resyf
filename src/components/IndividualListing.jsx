import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import ImageGallery from 'react-image-gallery'


const InListing = () => {
    const [item, setData] = useState(null)
    const [fetched, setFetched] = useState(false)
    
// const images = [
//   {
//     original: 'https://picsum.photos/id/1018/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1018/250/150/',
//   },
//   {
//     original: 'https://picsum.photos/id/1015/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1015/250/150/',
//   },
//   {
//     original: 'https://picsum.photos/id/1019/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1019/250/150/',
//   },
// ];
    const [images, setImages] = useState([])

    let {id} = useParams();
    
    useEffect ( () =>  {
    
        if(! fetched) {
          fetch(`http://localhost:2002/api/reservable-items/${id}`).then(resp => resp.json()
          ).then(json => {
            setData(json)
            let imgs = json.media.map(img => { return {'original': img.file, 'thumbnail': img.file} })
            console.log(imgs)
            setFetched(true)
           setImages(imgs)
            
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
            <p>{item.host.first_name} {item.host.last_name}</p>
            <p>{item.base_price}</p>
            <p>{item.is_available} </p>
            <a href={ "/reserve/" + id}>Reserve</a>
            { item.media.map(media => {
                    return <img key={media.id}  src={media.file} alt={media.description}/>

                  }) }
           {/* <ImageGallery items={images} /> */}
          </div>)
    
        
    }
    else {
      return 'NOthing yet'
    }
}

export default InListing