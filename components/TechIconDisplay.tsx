import Image from "next/image";
import { Icon } from "./Timeline/TimelineData";

interface TechIconProps {
	icons: Icon[]
	isTimeline?: boolean;
}

const TechIconDisplay = ({icons, isTimeline} : TechIconProps) => { 

	const widths = isTimeline ? 
		"max-w-[90%] sm:max-w-[40%] lg:max-w-[80%] "
	:
		"max-w-[70%] sm:max-w-[40%] lg:max-w-[80%] "


	return (
		<div className={`flex flex-row ${widths} flex-wrap mx-auto justify-evenly`}>
			{icons.map((icon, idx) => 
				<div 
					key={idx} title={icon.alt} 
					className={`relative mt-4 h-[8.75vw] w-[8.75vw] md:h-[3.5vw] md:w-[3.5vw] lg:h-[2.5vw] lg:w-[2.5vw] mx-2 px-auto`}>
					<Image src={icon.img} alt={icon.alt} layout="fill" objectFit="contain" priority={icon.priority}/>
				</div>
			)}
		</div>
	)
}

export default TechIconDisplay;