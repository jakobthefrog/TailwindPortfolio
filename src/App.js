import './App.css';
import AboutMe from './components/AboutMe';
import IntroSection from './components/IntroSection';
import TopNavbar from './components/TopNavbar';

function App() {
	return (
		<div className="bg-slate-800 text-white">
			<div className="container relative z-30 mx-auto">
				<div id="intro">
					<IntroSection />
				</div>
				<div id="aboutMe">
					<AboutMe />
				</div>
			</div>
		</div>
	);
}

export default App;
