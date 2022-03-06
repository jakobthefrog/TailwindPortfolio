import userProfile from '../images/profile.jpg';

const AboutMe = () => {
	return (
		<div className="mt-16">
			<span className="text-4xl font-semibold">About Me</span>
			<hr className=" w-80 border-2 rounded mt-2 mb-8 border-lime-700" />
			<div className="grid grid-cols-1 md:grid-cols-10 md:gap-10">
				<div className="md:col-span-6">
					<p className="mt-6">
						My name is Jakob Andersson and I'm a UI / UX Designer
						and Front-End Developer from Sweden. I'm currently
						working as the UI / UX Team Lead at
						<a
							className=" pl-1 text-lime-500 font-bold"
							href="http://virtusense.ai"
							target="_blank"
						>
							VirtuSense
						</a>
						, helping to create the world's foremost fall prevention
						technology. Here I get to use my skillset to help people
						across the world in a creative, and often challenging
						leadership role.
					</p>
					<p className="mt-6">
						After graduating college, I started a small business
						with a friend focused around aiding those with dementia
						navigate today's complex technology. Shortly after that,
						I worked as the head UI / UX Designer for a company
						leading the field in senior engagement technology.
						During this time I was able to greatly improve my user
						experience knowledge while focusing on creating
						intuitive, senior accessible applications. I always
						strive to seek roles where I can both grow as a
						professional, and help people at the same time.
					</p>
					<p className="mt-6">
						When I'm not at work, I spend my time fly fishing,
						restoring old cars, traveling, and exloring whichever
						coffee shops happen to be around me. I'm currenly
						restoring a 1969 MBG GT which has taught me that you can
						learn to do anything if you just spend enough time on
						YouTube. I'm a problem solver at heart, which means that
						a lot of my free-time also goes towards becoming a
						better front-end developer. I constantly seek out better
						ways to code my next projects and I'm fascinated by all
						the clever ways people solve complex problems through
						code.
					</p>
				</div>
				<div className="md:col-span-4">
					<img
						className=" rounded-xl mt-6"
						src={userProfile}
						alt="picture of me"
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
