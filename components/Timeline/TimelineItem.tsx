import Image from "next/image";
import { TimelinePoint } from "./TimelineData";
import { Main, TimelineBubble, ViewWorkButton } from "./StyledTimeline";
import TechIconDisplay from "../TechIconDisplay";
import Link from "next/link";

const TimelineItem = ({
	title,
	description,
	date,
	current,
	pos,
	left,
	buttonText,
	buttonLink,
	internalLink,
	icons,
}: TimelinePoint) => {
	return (
		<div className={`flex flex-row `} style={{ marginTop: pos }}>
			{!left && (
				<div className="flex flex-col">
					<TimelineBubble className="border-azure bg-white" />
					<h5 className="mx-auto everett text-lg sm:text-xl -mt-[3vh] lg:-mt-[1.75vw] xl:-mt-[1vw] text-center">
						{date}
					</h5>
					<span className="block w-[25vw] sm:w-[15vw] md:w-[30vw] lg:w-[15vw] xl:w-[20vw] h-[0.25vh] bg-azure"></span>
					{current && (
						<h5 className="mx-auto everett text-xl text-center">
							Present
						</h5>
					)}
				</div>
			)}
			<Main
				className={`flex flex-col text-center mt-auto mb-0 p-2 bg-gray-50 rounded-md ${
					left && "ml-auto"
				}`}
			>
				<h4 className="text-2xl underline everett-medium">{title}</h4>
				<p className="my-2">{description}</p>
				{internalLink ? (
					<Link href={buttonLink} passHref>
						<ViewWorkButton className="cursor-pointer everett-medium text-xl border-boldblue hover:bg-gradient-to-r hover:from-boldblue hover:to-azure hover:border-white hover:text-white">
							{buttonText}
						</ViewWorkButton>
					</Link>
				) : (
					<a
						href={buttonLink}
						target="_blank"
						className="cursor-pointer"
						rel="noopener"
					>
						<ViewWorkButton className="everett-medium text-xl border-boldblue hover:bg-gradient-to-r hover:from-boldblue hover:to-azure hover:border-white hover:text-white">
							{buttonText}
						</ViewWorkButton>
					</a>
				)}
				<TechIconDisplay icons={icons} isTimeline />
			</Main>
			{left && (
				<div className="flex flex-col">
					<TimelineBubble className="border-azure bg-white" />
					<h5 className="mx-auto everett text-xl lg:-mt-[1.5vw] xl:-mt-[1vw] text-center">
						{date}
					</h5>
					<span className="block md:w-[15vw] xl:w-[20vw] h-[0.25vh] bg-azure"></span>
					{current && (
						<h5 className="mx-auto everett text-xl text-center">
							Present
						</h5>
					)}
				</div>
			)}
		</div>
	);
};
export default TimelineItem;
