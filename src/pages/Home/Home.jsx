import { useEffect, useState } from "react";
import Card from "./Card";
import Slider from "./Slider";
import FAQ from "./FAQ";
import Leaderboard from "./Leaderboard";


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
   
   <div className="rounded mb-14 overflow-hidden">
    <Slider />
   </div>
    <div className="grid grid-cols-4 gap-6 mb-24">
      {
        events.map((event, idx) => <Card key={idx} event={event}/>)
      }
    </div>

    <div className="mb-24">
      <div className="text-4xl font-medium mb-6"><span>Leaderboard</span></div>
      <Leaderboard />
    </div>

    <div>
      <div className="text-4xl font-medium mb-6"><span>FAQ</span></div>
      <FAQ />
    </div>
   </>
  )
}
