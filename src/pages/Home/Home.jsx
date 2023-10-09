import { useEffect, useState } from "react";
import Card from "./Card";
import Slider from "./Slider";
import FAQ from "./FAQ";
import Leaderboard from "./Leaderboard";
import AOS from 'aos';
import 'aos/dist/aos.css';

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

  useEffect(() => {
    AOS.init();
  }, [])

  return (
   <>
   
   <div className="rounded mb-14 overflow-hidden" data-aos="fade-up"  data-aos-offset="200"
    data-aos-delay="50">
    <Slider />
   </div>
    <div className="grid grid-cols-4 gap-6 mb-24" data-aos="fade-up">
      {
        events.map((event, idx) => <Card key={idx} event={event}/>)
      }
    </div>

    <div className="mb-24" data-aos="fade-up">
      <div className="text-4xl font-medium mb-6"><span>Leaderboard</span></div>
      <Leaderboard />
    </div>

    <div data-aos="fade-up">
      <div className="text-4xl font-medium mb-6"><span>FAQ</span></div>
      <FAQ />
    </div>
   </>
  )
}
