import './App.css';
import IntroSection from './components/IntroSection';
import TestComponent from './components/TestComponent';

function App() {
	return (
		<div className="bg-slate-800 text-white">
			<TestComponent />
			<div className="container relative z-30 mx-auto">
				<IntroSection />
			</div>
		</div>
	);
}

export default App;
