import Project from "../components/Showcase/Project";
import { ProjectValues } from "../components/Showcase/ProjectValues";


const Projects = () => {
	return (
		<>
			<div className="h-[10vh]"/>
			<div className="flex flex-col h-[90%] w-full">
				<h1 className="mx-auto my-4 text-center everett-medium text-4xl sm:text-6xl underline">Recent Projects</h1>
				{ProjectValues.map((project, idx) => 
					<Project {...project} key={idx}/>	
				)}
			</div>
		</>
	)
}

export default Projects;