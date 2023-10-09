export default function Card({event}) {
    const {title, description, event_categories} = event

	return (
		<div className="card w-full bg-base-100 shadow-xl">
			<figure>
				<img
					src="https://daisyui.com//images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
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
