import { useLoaderData, useParams } from "react-router-dom"
import { BiCalendar, BiMapPin, BiSolidDiamond, BiSolidDiscount, BiTimeFive } from "react-icons/bi";
import { useEffect, useState } from "react";

export default function Details() {

    const [event, setEvent] = useState({})
    const data = useLoaderData();
    const {id} = useParams()

    

    const {title, posted_date, event_date, thumbnail_image, description, ticket_price, event_categories, location} = event

    useEffect(() => {
      const event = data.find(ev => ev.id === parseInt(id))
      setEvent(event)
    } , [id, data])
 
  
  return (
   
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2">
        <div className="rounded overflow-hidden mb-6">
          <img className="w-full" src={thumbnail_image} alt="" />
        </div>
        <div className="mb-4">
          <h1 className="font-medium text-4xl">{title}</h1>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
      <div>
        <div className="rounded border border-gray-500">
          <div className="p-6 border-b border-gray-500">Event Details</div>
          <div className="p-6">
            <h3 className="mb-2">{title}</h3>
            <ul className="flex gap-2 flex-col">
              <li className="flex gap-2 items-center"><BiTimeFive /> {posted_date}</li>
              <li className="flex gap-2 items-center"><BiCalendar /> {event_date}</li>
              <li className="flex gap-2 items-center"><BiMapPin /> {location}</li>
              <li className="flex gap-2 items-center"><BiSolidDiscount /> ${ticket_price}</li>
            </ul>
            
          </div>
          <div className="divider m-0">Tags</div>
          <div className="p-6 flex gap-2">
            {
              event_categories.map((ec, idx) => <div key={idx} className="badge badge-primary badge-outline">{ec}</div>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}
