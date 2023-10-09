import { useEffect, useState } from "react";
import Card from "./Card";


export default function Home() {

  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch('data.json')
    .then(res => res.json())
    .then(data => setEvents(data))
    .catch(err => {
      console.log(err)
    })
  }, [])
  return (
   <>
   
    <div className="grid grid-cols-4 gap-6">
      {
        events.map((event, idx) => <Card key={idx} event={event}/>)
      }
    </div>
   </>
  )
}
