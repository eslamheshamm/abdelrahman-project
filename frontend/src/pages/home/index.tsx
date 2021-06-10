import React, { lazy, Suspense } from "react";
import backgroundImage from "../../components/assets/cinematography.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import SectionTwo from "./sectionTwo";
import SectionOne from "./sectionOne";
import SectionThree from "./sectionThree";
import SectionFour from "./sectionFour";
const GallaryComponent = lazy(() => import("../galleries"));

const renderLoader = () => (
	<p className="text-3xl w-11/12 mx-auto">Loading..</p>
);

const Home: React.FC = () => {
	return (
		<section>
			<Suspense fallback={renderLoader()}>
				<SectionOne />
				<div className="mx-auto w-11/12 my-12 h-full">
					<figure className="h-full">
						<LazyLoadImage
							src={backgroundImage}
							alt="home"
							effect="blur"
							width="100%"
							height="100%"
							className="aspect-w-1 aspect-w-1 h-[300px] object-cover object-center"
						/>
					</figure>
				</div>
				<SectionTwo />
				<SectionThree />
				<SectionFour />
				<hr className="my-4 w-11/12 mx-auto" />
				<GallaryComponent />
			</Suspense>
		</section>
	);
};
export default Home;
