import Image from "next/image";
import { Icon } from "../Timeline/TimelineData";
import { Mobile } from "../../pages/_app"
import { useContext } from "react";
import TechIconDisplay from "../TechIconDisplay";

export interface projectData {
	title: string;
	description: string;
	mockup: string;
	alt: string;
	icons: Array<Icon>;
	buttonText?: string;
	link?: string;
	github?: string;
	mobileImg?: boolean;
	left?: boolean;
	preload?: boolean;
}
interface projectProps extends projectData {
	key: number;
}

const Project = ({
	title,
	description,
	mockup,
	alt,
	icons,
	buttonText,
	link,
	github,
	mobileImg,
	left,
	preload,
	key
}: projectProps) => {

	const isMobile = useContext(Mobile);
	
	return (
		<div className="flex flex-col sm:flex-row max-w-[100vw] pt-2 sm:py-4 overflow-hidden" key={key}>
			{left && !isMobile ?
				<div className={`relative mx-auto transition-all hover:scale-110 hover:translate-x-2 ${mobileImg ? "h-[65vh] w-[40vw]": " h-[70vh] w-[40vw]"}`}>
					<Image src={mockup} alt={alt} layout="fill" objectFit="contain" priority={preload}/>
				</div>
			: null }
			<div className="flex flex-wrap flex-col mx-auto sm:ml-4 w-[90vw] sm:max-w-[75vw] max-h-[95vh] sm:max-h-[75vh] shadow-lg p-8">
				<h2 className="text-4xl text-center everett-medium border-b-2 border-gray-800">
					{title}
				</h2>
				<p className="text-lg md:text-xl my-4">{description}</p>
				<div className="flex flex-row mx-auto mt-4 mb-8">
					{github && 
						<a href={github} target="_blank" rel="noopener" className="flex flex-row hover:filter hover:invert">
								<button className="border-2 border-gray px-4 py-[0.4rem] rounded-md text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black font-bold scale-100 transition-all hover:bg-[#948D7E] hover:border-0 hover:text-black hover:scale-110 ">
									Github 
								<div className="relative inline-flex left-2 mr-2 w-[4vw] h-[4vw] sm:w-[2vw] sm:h-[2vw]">
									<Image src="/img/techicons/github.png" alt="Github" layout="fill" objectFit="contain" priority={preload} />
								</div>
								</button>
						</a>}
					{link &&
					<a href={link} target="_blank" rel="noopener" className={github && "ml-8"}>
						<button className="bg-azure px-4 py-2 rounded-md text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold scale-100 transition-transform hover:scale-110">
							{buttonText} 
						</button>
					</a>
					}
				</div>
				<h3 className="text-3xl mx-auto mt-8 mb-0 sm:mt-auto everett underline">Technologies Utilized</h3>
					<TechIconDisplay icons={icons} />
			</div>
			{!left || isMobile ?
				<div className={`relative mx-auto transition-all hover:scale-110 ${mobileImg ? "h-[50vh] sm:h-[65vh] w-[40vw]": "w-[80vw] h-[35vh] mt-[6vh] sm:mt-0 sm:h-[70vh] sm:w-[40vw]"}`}>
					<Image src={mockup} alt={alt} layout="fill" objectFit="contain" priority={preload}/>
				</div>
			: null }

		</div>
	);
}

export default Project;