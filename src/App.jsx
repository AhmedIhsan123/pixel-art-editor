import { useState } from "react";
import ColorSelector from "./components/ColorSelector";
import Header from "./components/header";
import Footer from "./components/footer";
import Grid from "./components/Grid";
import "./styles/App.css";

// grid size and default cell color defined once up here
const GRID_SIZE = 16;
const DEFAULT_COLOR = "#ffffff";

// helper that builds a fresh empty grid
function makeEmptyGrid() {
	return Array.from({ length: GRID_SIZE }, () =>
		Array.from({ length: GRID_SIZE }, () => DEFAULT_COLOR)
	);
}

export default function App() {
	// grid state: 2d array where each cell holds a color string
	const [grid, setGrid] = useState(makeEmptyGrid());

	// currently selected color state
	const [selectedColor, setSelectedColor] = useState("#000000");

	// paints one cell at row r, column c with the selected color
	function paintCell(r, c) {
		// copy every row into a new outer array
		const next = grid.map((row) => row.slice());
		// set the new color at the clicked cell
		next[r][c] = selectedColor;
		setGrid(next);
	}

	// resets every cell back to the default empty color
	function clearGrid() {
		setGrid(makeEmptyGrid());
	}

	return (
		<>
			<Header />
			<main>
				<ColorSelector
					selectedColor={selectedColor}
					setSelectedColor={setSelectedColor}
					clearGrid={clearGrid}
				/>
				<Grid grid={grid} paintCell={paintCell} />
			</main>
			{/* <Footer /> */}
		</>
	);
}
