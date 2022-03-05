import './App.css';
import IntroSection from './components/IntroSection';
import TestComponent from './components/TestComponent';

function App() {
	return (
		<div className="">
			<TestComponent />
			<div className="container relative z-30 mx-auto">
				<IntroSection />
				<h3>Test</h3>
			</div>
		</div>
	);
}

export default App;
