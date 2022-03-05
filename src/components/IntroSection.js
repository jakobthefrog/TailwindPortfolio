import ReactTypingEffect from 'react-typing-effect';

const IntroSection = () => {
	return (
		<main className={`flex-col flex h-screen`} id="home">
			<div className="container relative flex flex-col items-start justify-center flex-grow px-0 mx-auto md:px-20 lg:px-24 section">
				<div className="w-full">
					<span className="text-2xl font-semibold text-lime-600">
						Hi! My name is
					</span>
					<h1 className="mb-4 text-5xl md:text-7xl">
						Jakob Andersson
					</h1>
					<h2 className="mb-4 text-3xl md:text-4xl text-light">
						<ReactTypingEffect
							typingDelay={200}
							speed={30}
							eraseSpeed={30}
							eraseDelay={1500}
							text={[
								`UI / UX Designer`,
								`Front-End Developer`,
								`Coffee Enthusiast`,
								`Hobby Mechanic`,
							]}
						/>
					</h2>
					<p className="w-4/5 text-xl md:w-full">
						I make products that people love to use!
					</p>
					{/* <button className="mt-4 btn-brand btn-lg">
                    See my Work
                </button> */}
				</div>
			</div>
		</main>
	);
};

export default IntroSection;
