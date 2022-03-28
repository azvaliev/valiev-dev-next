import Image from "next/image";
import { Icon } from "./Timeline/TimelineData";

const TechIconDisplay = ({icons} : {icons: Array<Icon>}) => { 
	return (
		<>
			{icons.map((icon, idx) => 
				<div 
					key={idx} title={icon.alt} 
					className={`relative mt-4 h-[8.75vw] w-[8.75vw] md:h-[3.5vw] md:w-[3.5vw] lg:h-[2.5vw] lg:w-[2.5vw] mx-2 px-auto 
						${[0,4].includes(idx) && "ml-auto "} 
						${[3,7].includes(idx) && "mr-auto "}
						${icons.length === 6 ? idx === 4 ? " ml-auto" : idx === 5 ? " mr-auto" : null : null}
						`}>
					<Image src={icon.img} alt={icon.alt} layout="fill" objectFit="contain" priority={icon.priority}/>
				</div>
			)}
		</>
	)
}

export default TechIconDisplay;