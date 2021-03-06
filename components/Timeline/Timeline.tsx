import { useContext } from "react";
import TimelineItem from "./TimelineItem";
import { TimelineData, standardPos } from "./TimelineData";
import { Mobile } from "../../pages/_app";

const Timeline = () => {
	const isMobile = useContext(Mobile);

	return (
		<div className="pb-20 pt-10">
			<h2 className="montserrat text-5xl font-extralight mb-16 text-center">
				EXPERIENCE
			</h2>
			<div className="relative flex flex-row w-[90%] mx-auto bg-white">
				{!isMobile && (
					<div className="flex flex-col w-[45vw]">
						{TimelineData.filter((data) => data.left === true).map(
							(data, idx) => (
								<TimelineItem
									title={data.title}
									key={idx}
									description={data.description}
									date={data.date}
									current={data.current}
									buttonText={data.buttonText}
									buttonLink={data.buttonLink}
									// internalLink={data.internalLink}
									icons={data.icons}
									pos={data.pos}
									left
								/>
							)
						)}
					</div>
				)}
				<span className="h-auto w-[0.25vh] mx-auto rounded-2xl bg-slate-400" />
				<div className="flex flex-col w-[90vw] lg:w-[45vw] mb-auto">
					{isMobile
						? TimelineData.map((data, idx) => (
								<TimelineItem
									title={data.title}
									key={idx}
									description={data.description}
									date={data.date}
									current={data.current}
									buttonText={data.buttonText}
									buttonLink={
										idx === 4
											? "https://drive.google.com/file/d/1r1xNGhvgc6Lb_1zK6qNAwe3FkU--P2_7/view?usp=sharing"
											: data.buttonLink
									}
									// internalLink={data.internalLink}
									icons={data.icons}
									pos={idx === 0 ? "0" : standardPos}
								/>
						  ))
						: TimelineData.filter((data) => !data.left).map(
								(data, idx) => (
									<TimelineItem
										title={data.title}
										key={idx}
										description={data.description}
										date={data.date}
										current={data.current}
										buttonText={data.buttonText}
										buttonLink={data.buttonLink}
										// internalLink={data.internalLink}
										icons={data.icons}
										pos={data.pos}
									/>
								)
						  )}
				</div>
			</div>
		</div>
	);
};

export default Timeline;
