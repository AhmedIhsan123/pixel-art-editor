import ColorSelector from "./components/ColorSelector";
import Header from "./components/header";
import Footer from "./components/footer";

export default function App() {
	return (
		<>
			<main>
				<Header />
				<ColorSelector />
				<div className="board">THIS IS BOARD</div>
			</main>
			<Footer />
		</>
	);
}
