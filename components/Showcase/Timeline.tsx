import TimelineItem from "./TimelineItem";

const standardPos = "12%"

const Timeline = () => {
	return (
		<div className="pb-20 pt-10">
			<h2 className="montserrat text-5xl font-extralight mb-16 text-center">EXPERIENCE</h2>
			<div className="flex flex-row w-[90%] mx-auto bg-white">
				<div className="flex flex-col w-[45vw]">
					<TimelineItem 
						title="A developer is born" 
						description={`I began my venture into the world of programming with Native Android Development, Udemy, and Youtube tutorials`}
						date="Late 2015"
						buttonText={"View My Apps"}
						buttonLink={"https://play.google.com/store/apps/dev?id=5613471573391791221"}
						icons={[{img: "/img/techicons/java.png", alt: "Java"}, {img: "/img/techicons/android.webp", alt: "Android"}, {img: "/img/techicons/xml.png", alt: "XML"}]}
						pos="0" left />

					<TimelineItem 
						title="New heights are reached" 
						description={`I released a soundboard featuring a popular political candidate, which amassed tens of thousands of downloads`}
						date="Late 2016"
						buttonText={"View on Google Play"}
						buttonLink={"https://play.google.com/store/apps/dev?id=5613471573391791221"}
						icons={[{img: "/img/techicons/java.png", alt: "Java"}, {img: "/img/techicons/android.webp", alt: "Android"}, {img: "/img/techicons/xml.png", alt: "XML"}, {img: "/img/techicons/audio.png", alt: "Audio"}]}
						pos={standardPos} left />

					<TimelineItem 
						title="Diving in the web"
						description={`Networking with local developers lead me to land a position with M2 Labs, working on a project that analyzed Git repositories and provided data about contributions`} 
						date="June 2018"
						buttonText={"Letter of Reccomendation"}
						buttonLink={""}
						icons={[{img: "/img/techicons/python.png", alt: "Python"}, {img: "/img/techicons/HTML.png", alt: "HTML"}, {img: "/img/techicons/CSS.png", alt: "CSS"}, {img: "/img/techicons/javascript.png", alt: "JavaScript"}, {img: "/img/techicons/git.png", alt: "Git"}]}
						pos="15%" left />

					<TimelineItem 
						title="The world of web3"
						description={`I'm currently working a few Web3 projects, such as a messaging app that allows for highly secure, encrypted communication between Solana addresses`} 
						date="Late 2021 - Present"
						buttonText={"Meta Message - WIP"}
						buttonLink={""}
						icons={[{img: "/img/techicons/react.png", alt: "React"}, {img: "/img/techicons/nextjs.png", alt: "Next JS"}, {img: "/img/techicons/node.png", alt: "Node JS"}, {img: "/img/techicons/redis.png", alt: "Redis"}, {img: "/img/techicons/solana.png", alt: "Solana"}]}
						pos={standardPos} left />

				</div>
				<span className="h-auto w-[0.25vh] mx-auto rounded-2xl bg-slate-400"/>
				<div className="flex flex-col w-[45vw] mb-auto">
					<TimelineItem 
						title="First app released"
						description={`An interest in Cybersecurity led me to release my first app, Wifi Manager. It let users easily see details about network connection, and accumulated several thousand downloads`} 
						date="March 2016"
						buttonText={"View on Google Play"}
						buttonLink={""}
						icons={[{img: "/img/techicons/java.png", alt: "Java"}, {img: "/img/techicons/android.webp", alt: "Android"}, {img: "/img/techicons/xml.png", alt: "XML"}, {img: "/img/techicons/wifi.png", alt: "Networking"}]}
						pos="25%" />
					
					<TimelineItem
						title="Getting my feet wet"
						description="Not being able to share my apps with anyone who didn't have Android was a bummer. So I started to explore the web, making a website for my local skate shop"
						date="Mid 2017"
						buttonText={"Asphalt Assault"}
						buttonLink={"https://asphalt-assault.glitch.me"}
						icons={[{img: "/img/techicons/HTML.png", alt: "HTML"}, {img: "/img/techicons/CSS.png", alt: "CSS"}, {img: "/img/techicons/javascript.png", alt: "JavaScript"}]}
						pos={standardPos}
						/>

					<TimelineItem 
						title="Freelance Begins" 
						description={`I network with business owners and helped them solve problems with the web using technologies like React & Next JS, Node, Express & MongoDB.`}
						date="September 2018 - Present"
						buttonText={"View recent projects"}
						buttonLink={"https://tclawnirrigation.com"}
						icons={[{img: "/img/techicons/react.png", alt: "React"}, {img: "/img/techicons/nextjs.png", alt: "Next JS"}, {img: "/img/techicons/node.png", alt: "Node JS"}, {img: "/img/techicons/mongodb.png", alt: "Mongo DB"}, {img: "/img/techicons/aws.png", alt: "AWS"}]}
						pos={standardPos} />

				</div>
			</div>
		</div>
	);
}

export default Timeline;