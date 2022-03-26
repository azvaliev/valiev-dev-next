import styled from 'styled-components';
import Image from 'next/image';

interface Icon {
	img: string;
	alt: string;
}

interface Props {
	title: string;
	description: string;
	date: string;
	pos: string;
	buttonText: string;
	buttonLink: string;
	icons: Array<Icon>;
	left?: boolean,
}

const Main = styled.div`
	box-shadow: 0px 0px 8px 4px rgba(160,160,160,0.3);
`;

const TimelineBubble = styled.span`
	width: 2vw;
	height: 2vw;
	position: absolute;
	left: 48.5vw;
	margin-right: auto;
	border-radius: 999px;
	z-index: 20;
	border-width: 6px
`;

const ViewWorkButton = styled.button`
	width: fit-content;
	margin: 0 auto;
	padding: 0.5rem 1rem;
	border-width: 2px;
	border-radius: 0.375rem
`;

const TimelineItem = ({ title, description, date, pos, left, buttonText, buttonLink, icons} : Props) => {
	console.log(pos)
	return (
		<div className={`flex flex-row `} style={{marginTop: pos}}>
			{!left && <div className="flex flex-col">
				<TimelineBubble className="border-azure bg-white"/>
				<h6 className="mx-auto everett text-xl -mt-[1vw]">{date}</h6>
				<span className="block w-[20vw] h-[0.25vh] bg-azure"></span>
				
			</div>}
			<Main className={`flex flex-col text-center mt-auto mb-0 p-2 bg-gray-50 rounded-md ${left && "ml-auto"}`}>
				<h5 className="text-2xl underline everett-medium">{title}</h5>
				<p className="my-2">{description}</p>
				<a href={buttonLink} target="_blank" className="cursor-pointer">
					<ViewWorkButton className="everett-medium text-xl border-boldblue hover:bg-gradient-to-r hover:from-boldblue hover:to-azure hover:border-white hover:text-white">
						{buttonText}
					</ViewWorkButton>
				</a>
				<div className="flex flex-row mx-auto mt-4 mb-2">
					{icons.map((icon) => 
						<div className="relative h-[2.5vw] w-[2.5vw] mx-2">
							<Image src={icon.img} alt={icon.alt} layout="fill" objectFit="contain" />
						</div>
					)}
				</div>
			</Main>
			{left && <div className="flex flex-col">
				<TimelineBubble className="border-azure bg-white"/>
				<h6 className="mx-auto everett text-xl -mt-[1vw]">{date}</h6>
				<span className="block w-[20vw] h-[0.25vh] bg-azure"></span>
			</div>}	
		</div>
	)
}
export default TimelineItem;