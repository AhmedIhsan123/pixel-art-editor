import "../styles/Grid.css";

// grid size defined here too so the css grid columns match
const GRID_SIZE = 16;

export default function Grid({ grid, paintCell }) {
	return (
		<div
			className="pixel-grid"
			style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
		>
			{/* loop over each row, then each cell in that row */}
			{grid.map((row, r) =>
				row.map((color, c) => (
					<button
						key={`${r}-${c}`}
						className="pixel"
						style={{ backgroundColor: color }}
						onClick={() => paintCell(r, c)}
					/>
				))
			)}
		</div>
	);
}
