import './App.css';
import IntroSection from './components/IntroSection';
import TopNavbar from './components/TopNavbar';

function App() {
	return (
		<div className="bg-slate-800 text-white">
			<TopNavbar />
			<div className="container relative z-30 mx-auto">
				<IntroSection />
			</div>
		</div>
	);
}

export default App;
