import { Exhibition } from "../../pages/exhibitions";
import ExhibitionPostPreview from "./exhibition-post-preview";

interface Props {
	data: Exhibition[];
}

const ExhibitonsPostPreviewGrid: React.FC<Props> = (props) => {
	console.log(props);
	return (
		<>
			<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-10/12 mx-auto mt-16">
				{props.data &&
					props.data.map((node) => (
						<li key={node._id}>
							<ExhibitionPostPreview {...node} />
						</li>
					))}
			</ul>
		</>
	);
};

export default ExhibitonsPostPreviewGrid;
