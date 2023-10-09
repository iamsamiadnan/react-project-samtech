import { useNavigate } from "react-router-dom";

export default function Card({event}) {
    const {id, title, description, event_categories, thumbnail_image, ticket_price} = event
	const navigate = useNavigate()

	return (
		<div className="card w-full bg-base-100 shadow-xl " >
			<figure>
				<img className="object-cover"
					src={thumbnail_image}
					alt="Shoes"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{title}
					<div className="badge badge-secondary">${ticket_price}</div>
				</h2>
				<p>
                    {description.substring(0, 80)} ...
                </p>
		
				<div className="flex justify-center my-2">
					<a href={`/details/${id}`} className="btn btn-sm btn-primary">See Details</a>
				</div>
				<div className="card-actions justify-end">
					
                    {
                        event_categories.map((event_category, idx) => <div key={idx} className="badge badge-outline">{event_category}</div>)
                    }


				</div>
				
			</div>
		</div>
	);
}
