import "../styles/Grid.css";

export default function Grid() {
	const GRID_SIZE = 16;

	return (
		<div
			className="pixel-grid"
			style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
		>
			{Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => (
				<div key={i} className="pixel" />
			))}
		</div>
	);
}
