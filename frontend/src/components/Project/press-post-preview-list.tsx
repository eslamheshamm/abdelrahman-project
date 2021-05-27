import PressPostPreview from "./project-post-preview";

const ProjectPostPreviewGrid = (props: any) => {
	return (
		<>
			<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 h-auto">
				{props.data &&
					props.data.map((node: any) => (
						<li key={node.id}>
							<PressPostPreview {...node} />
						</li>
					))}
			</ul>
		</>
	);
};

export default ProjectPostPreviewGrid;
