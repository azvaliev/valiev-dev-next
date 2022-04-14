import Link from "next/link";

const Button = (props) => {
	return (
		<Link className="z-10 mx-auto" href={props.link} passHref>
			<button
				className={`p-2 pb-1 px-4 text-2xl font-normal text-black transtoblack everett-light z-10 hover:text-white border-black border-1 w-fit mx-auto mt-4 rounded-md ${props.className}`}
			>
				{props.text}
			</button>
		</Link>
	);
};

export default Button;
