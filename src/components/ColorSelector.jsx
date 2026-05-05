import { useState } from "react";
import "../styles/ColorSelector.css";

export default function ColorSelector() {
	const [selectedColor, setSelectedColor] = useState("#000000");

	const colors = [
		"#000000",
		"#ffffff",
		"#ff0000",
		"#00ff00",
		"#0000ff",
		"#ffff00",
		"#ff00ff",
		"#00ffff",
		"#808080",
		"#ffa500",
	];

	return (
		<section className="selector-container">
			<p className="selector-title">COLOR</p>

			<div className="selected-color-container">
				<div
					className="selected-color-box"
					style={{ backgroundColor: selectedColor }}
				/>
			</div>

			<section className="colors-container">
				{colors.map((color) => (
					<button
						key={color}
						className={`color-box ${selectedColor === color ? "selected" : ""}`}
						style={{ backgroundColor: color }}
						onClick={() => setSelectedColor(color)}
						aria-label={`Select ${color}`}
					/>
				))}
			</section>

			<button
				className="clear-button"
				onClick={() => setSelectedColor("#000000")}
			>
				Clear
			</button>

			<p className="helper-text">
				Click any cell to paint it with the current color
			</p>
		</section>
	);
}
