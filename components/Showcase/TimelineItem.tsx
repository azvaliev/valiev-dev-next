import Image from 'next/image';
import { TimelinePoint } from "./TimelineData";
import { Main, TimelineBubble, ViewWorkButton } from "./StyledTimeline";

const TimelineItem = ({
	title,
	description,
	date,
	current,
	pos,
	left,
	buttonText, 
	buttonLink, 
	icons
} : TimelinePoint) => {

	return (
		<div className={`flex flex-row `} style={{marginTop: pos}}>
			{!left && <div className="flex flex-col">
				<TimelineBubble className="border-azure bg-white"/>
				<h6 className="mx-auto everett text-lg sm:text-xl -mt-[3vh] sm:mt-0 lg:-mt-[1.75vw] xl:-mt-[1vw] text-center">{date}</h6>
				<span className="block w-[25vw] sm:w-[15vw] xl:w-[20vw] h-[0.25vh] bg-azure"></span>
				{current && <h6 className="mx-auto everett text-xl text-center">Present</h6>}	
			</div> }
			<Main className={`flex flex-col text-center mt-auto mb-0 p-2 bg-gray-50 rounded-md ${left && "ml-auto"}`}>
				<h5 className="text-2xl underline everett-medium">{title}</h5>
				<p className="my-2">{description}</p>
				<a href={buttonLink} target="_blank" className="cursor-pointer">
					<ViewWorkButton className="everett-medium text-xl border-boldblue hover:bg-gradient-to-r hover:from-boldblue hover:to-azure hover:border-white hover:text-white">
						{buttonText}
					</ViewWorkButton>
				</a>
				<div className="flex flex-wrap mx-auto w-fit mt-2 mb-4 max-w-[45vw]">
					{icons.map((icon, idx) => 
						<div 
							key={idx} 
							className={`relative mt-4 h-[9.5vw] w-[9.5vw] sm:h-[2.5vw] sm:w-[2.5vw] mx-2 px-auto ${[0,3].includes(idx) && "ml-auto"}  ${[2,5].includes(idx) && "mr-auto"}`}>
							<Image src={icon.img} alt={icon.alt} layout="fill" objectFit="contain" />
						</div>
					)}
				</div>
			</Main>
			{left && <div className="flex flex-col">
				<TimelineBubble className="border-azure bg-white"/>
				<h6 className="mx-auto everett text-xl lg:-mt-[1.5vw] xl:-mt-[1vw] text-center">{date}</h6>
				<span className="block md:w-[15vw] xl:w-[20vw] h-[0.25vh] bg-azure"></span>
				{current && <h6 className="mx-auto everett text-xl text-center">Present</h6>}
			</div>}	
		</div>
	)
}
export default TimelineItem;