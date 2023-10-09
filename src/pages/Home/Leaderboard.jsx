

export default function Leaderboard() {
	return (
		<div>
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th>Rank</th>
							<th>Player Name</th>
							<th>Score</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						<tr className="bg-base-200">
							<th>1</th>
							<td>Cy Ganderton</td>
							<td>5000</td>
						</tr>
						{/* row 2 */}
						<tr>
							<th>2</th>
							<td>Hart Hagerty</td>
							<td>4500</td>
						</tr>
						{/* row 3 */}
						<tr>
							<th>3</th>
							<td>Brice Swyre</td>
							<td>4200</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
