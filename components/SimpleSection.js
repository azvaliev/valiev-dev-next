const SimpleSection = (props) => {
	return (
		<div
			className={`flex max-w-[100%] ${props.gray && "bg-gray-100"}`}
			id={props.id}
		>
			<div className=" my-10 md:my-16 text-center ml-2">
				<h2 className="montserrat text-5xl font-extralight">
					{props.title}
				</h2>
				<p className="text-xl md:text-3/2xl ml-8 mr-6 mt-8 md:mx-72 font-light">
					{props.text}
					<br />
					<br />
					{props.contact ? (
						<>
							<a
								href="mailto:valiev.dev@gmail.com"
								target="_blank"
								rel="noopener"
								className="underline font-bold"
							>
								Email me
							</a>{" "}
							at{" "}
							<span className="font-bold">
								valiev.dev@gmail.com
							</span>
							<br />
							Alternatively, I am also available on{" "}
							<a
								href="https://www.linkedin.com/in/azatvaliev/"
								target="_blank"
								rel="noopener"
								className="font-bold underline"
							>
								LinkedIn
							</a>
						</>
					) : (
						props.textf
					)}
				</p>
			</div>
		</div>
	);
};
export default SimpleSection;
