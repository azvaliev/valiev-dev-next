import Link from "next/link";
import { Link as SamePageLink } from "react-scroll";

const NavItem = (props) => {
	return (
		<div
			className={`flex h-fit nav-width md:w-fit text-2xl my-auto md:mx-4 ${props.className}`}
		>
			{props.link ? (
				<Link href={props.link} className="text-center ">
					<h2 className="mx-auto">{props.name}</h2>
				</Link>
			) : (
				<h2 className="mx-auto">
					<SamePageLink
						to={props.name}
						className="text-center"
						smooth={true}
						duration={750}
					>
						{props.name}
					</SamePageLink>
				</h2>
			)}
		</div>
	);
};

export default NavItem;
