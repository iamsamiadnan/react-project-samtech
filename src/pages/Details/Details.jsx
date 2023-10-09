import { useLoaderData, useParams } from "react-router-dom"


export default function Details() {
    const data = useLoaderData();
    const {id} = useParams()

    
  return (
    <div>Details</div>
  )
}
