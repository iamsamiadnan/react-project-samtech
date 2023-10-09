import React from "react";

export default function FAQ() {
	return (
		<div className="flex flex-col gap-6">
			<div className="collapse collapse-arrow bg-base-200">
				<input type="radio" name="my-accordion-2" />
				<div className="collapse-title text-xl font-medium">
                How can I purchase tickets for the event?
				</div>
				<div className="collapse-content">
					<p>Tickets can be purchased online through our website or at the door on the day of the event.</p>
				</div>
			</div>
			<div className="collapse collapse-arrow bg-base-200">
				<input type="radio" name="my-accordion-2" />
				<div className="collapse-title text-xl font-medium">
                Are there any age restrictions for attending the expo?
				</div>
				<div className="collapse-content">
					<p>No, the expo is open to attendees of all ages. However, children under 12 must be accompanied by an adult.</p>
				</div>
			</div>
			<div className="collapse collapse-arrow bg-base-200">
				<input type="radio" name="my-accordion-2" />
				<div className="collapse-title text-xl font-medium">
                What types of tech and gaming products will be showcased?
				</div>
				<div className="collapse-content">
					<p>The expo will feature the latest gadgets, gaming consoles, virtual reality experiences, and more.</p>
				</div>
			</div>
		</div>
	);
}
