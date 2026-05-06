import "../styles/ColorSelector.css";

// preset swatches defined outside the component so they don't rebuild every render
const PRESET_COLORS = [
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

export default function ColorSelector({ selectedColor, setSelectedColor, clearGrid }) {
	return (
		<section className="selector-container">
			<p className="selector-title">COLOR</p>

			{/* shows a preview box of the current selected color */}
			<div className="selected-color-container">
				<div
					className="selected-color-box"
					style={{ backgroundColor: selectedColor }}
				/>
			</div>

			{/* native color picker input — wired as a controlled input */}
			<input
				type="color"
				value={selectedColor}
				onChange={(e) => setSelectedColor(e.target.value)}
			/>

			{/* preset color swatches */}
			<section className="colors-container">
				{PRESET_COLORS.map((color) => (
					<button
						key={color}
						className={`color-box ${selectedColor === color ? "selected" : ""}`}
						style={{ backgroundColor: color }}
						onClick={() => setSelectedColor(color)}
						aria-label={`Select ${color}`}
					/>
				))}
			</section>

			{/* clear button now clears the grid, not the selected color */}
			<button className="clear-button" onClick={clearGrid}>
				Clear
			</button>

			<p className="helper-text">
				Click any cell to paint it with the current color
			</p>
		</section>
	);
}
