import { Exhibition } from "../../pages/exhibition";
import ProjectPostPreview from "./project-post-preview";

interface Props {
	data: Exhibition[];
}

const ProjectPostPreviewGrid: React.FC<Props> = (props) => {
	console.log(props);
	return (
		<>
			<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto mt-16">
				{props.data &&
					props.data.map((node) => (
						<li key={node._id}>
							<ProjectPostPreview {...node} />
						</li>
					))}
			</ul>
		</>
	);
};

export default ProjectPostPreviewGrid;
