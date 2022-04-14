import Image from "next/image";
import { Icon } from "./Timeline/TimelineData";

interface TechIconProps {
	icons: Icon[];
	isTimeline?: boolean;
}

const TechIconDisplay = ({ icons, isTimeline }: TechIconProps) => {
	const widths = isTimeline
		? "max-w-[90%] sm:max-w-[55%] md:max-w-[50%] lg:max-w-[65%] xl:max-w-[75%]"
		: "max-w-[70%] sm:max-w-[75%] md:max-w-[65%] lg:max-w-[55%]";

	const iconSizes = isTimeline
		? "h-[8.75vw] w-[8.75vw] sm:w-[6vw] sm:h-[6vw] md:h-[4.5vw] md:w-[4.5vw] lg:h-[2.5vw] lg:w-[2.5vw]"
		: "h-[8.75vw] w-[8.75vw] sm:w-[6vw] sm:h-[6vw] md:h-[4.5vw] md:w-[4.5vw] lg:h-[3.5vw] lg:w-[3.5vw] xl:h-[4vw] xl:w-[4vw]";

	return (
		<div
			className={`flex flex-row ${widths} flex-wrap mx-auto justify-evenly`}
		>
			{icons.map((icon, idx) => (
				<div
					key={idx}
					title={icon.alt}
					className={`relative mt-4 ${iconSizes} mx-2 xl:mx-3 px-auto`}
				>
					<Image
						src={icon.img}
						alt={icon.alt}
						layout="fill"
						objectFit="contain"
						priority={icon.priority}
					/>
				</div>
			))}
		</div>
	);
};

export default TechIconDisplay;
