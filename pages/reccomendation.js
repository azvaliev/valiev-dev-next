import { useEffect } from "react";
import pdfobject from "../components/pdfobject";

const config = {
	fallbackLink: `<div className="m-auto">
						<h1 className="text-5xl text-center">
							Your browser does not support PDF
						</h1>
						<h2 className="text-3xl text-center">
							Try
							<a href="https://drive.google.com/file/d/1r1xNGhvgc6Lb_1zK6qNAwe3FkU--P2_7/view?usp=sharing" 
								target="_blank" className="text-azure">
								this link
							</a>
						</h2>
					</div>`,
	pdfOpenParams: {
		zoom: 100,
	},
};

const Reccomendation = () => {
	useEffect(() => {
		pdfobject.embed("/pdf/letterofrec.pdf", "#letterofrec");
	}, []);
	return (
		<>
			<div className="h-[10vh] bg-white" />
			<div
				className="sm:h-[90vh] px-[25%] mx-auto sm:bg-coal"
				id="letterofrec"
			></div>
		</>
	);
};

export default Reccomendation;
