import { useNavigate } from "react-router-dom";

export default function Card({event}) {
    const {id, title, description, event_categories, thumbnail_image} = event
	const navigate = useNavigate()

	return (
		<div className="card w-full bg-base-100 shadow-xl hover:cursor-pointer" onClick={() => navigate(`/details/${id}`)}>
			<figure>
				<img className="object-cover"
					src={thumbnail_image}
					alt="Shoes"
				/>
			</figure>
			<div className="card-body">
				<h2 className="card-title">
					{title}
					<div className="badge badge-secondary">NEW</div>
				</h2>
				<p>
                    {description.substring(0, 80)} ...
                </p>
				<div className="card-actions justify-end">
					
                    {
                        event_categories.map((event_category, idx) => <div key={idx} className="badge badge-outline">{event_category}</div>)
                    }


				</div>
			</div>
		</div>
	);
}
