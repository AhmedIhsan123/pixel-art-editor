import ColorSelector from "./components/ColorSelector";
import Header from "./components/header";
import Footer from "./components/footer";
import Grid from "./components/Grid";
import "./styles/App.css";

export default function App() {
	return (
		<>
			<Header />
			<main>
				<ColorSelector />
				<Grid />
			</main>
			{/* <Footer /> */}
		</>
	);
}
