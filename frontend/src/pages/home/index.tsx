import { Link } from "react-router-dom";
import backgroundImage from "../../components/assets/cinematography.png";
import Galleries from "../galleries";
const Home = () => {
	return (
		<section>
			<article className="w-11/12 mx-auto justify-items-center grid lg:grid-cols-2 gap-6">
				<div className="h-full ">
					<h2 className=" text-3xl md:text-7xl">
						Project <br className="hidden lg:block xl:hidden" /> Title
					</h2>
					<p className="my-4 w-11/12 ">
						The goal of Verdiv is to provide the same type of water (taste,
						quality, price) as mainstream drinking water brands but without
						using single-use plastic bottles and using metal cans and paper
						cartons instead. This environment-friendly approach to drinking
						water will hopefully encourage people to take steps to change their
						consumption habits not just with water but with other goods. As more
						mainstream brands adapt more environment-friendly ways not just with
						their commercial products but with their production processes, our
						brand believes sustainable businesses will become more common and we
						would like to be a part of that transition.
					</p>
					<Link to="/galleries" className=" text-lg font-fahkwang font-bold">
						View
					</Link>
				</div>
				<div className="grid grid-cols-2 grid-rows-2 h-full gap-2 w-full row-start-1  lg:row-start-auto ">
					<figure className="h-full  ">
						<img
							src={backgroundImage}
							alt="home"
							className="aspect-w-1 aspect-w-1 h-full w-full object-cover object-center"
						/>
					</figure>
					<figure className=" h-[256px]">
						<img
							src={backgroundImage}
							alt="home"
							className="aspect-w-1 aspect-w-1 h-full w-full object-cover object-right"
						/>
					</figure>
					<figure className=" h-[256px]">
						<img
							src={backgroundImage}
							alt="home"
							className="aspect-w-1 aspect-w-1 h-full w-full object-cover object-right"
						/>
					</figure>
					<figure className=" h-[256px]">
						<img
							src={backgroundImage}
							alt="home"
							className="aspect-w-1 aspect-w-1 h-full w-full object-cover object-center"
						/>
					</figure>
				</div>
			</article>
			<div className="mx-auto w-11/12 my-12 h-full">
				<img
					src={backgroundImage}
					alt="home"
					className="  w-full h-[300px] object-cover"
				/>
			</div>
			<article className="w-11/12 mx-auto justify-items-center grid-rows-2 md:grid-rows-1 grid md:grid-cols-2 gap-6">
				<div className="h-full ">
					<h2 className=" text-3xl md:text-7xl">
						Project <br className="hidden md:block xl:hidden" /> Title
					</h2>
					<p className="my-4 w-11/12 ">
						The goal of Verdiv is to provide the same type of water (taste,
						quality, price) as mainstream drinking water brands but without
						using single-use plastic bottles and using metal cans and paper
						cartons instead. This environment-friendly approach to drinking
						water will hopefully encourage people to take steps to change their
						consumption habits not just with water but with other goods. As more
						mainstream brands adapt more environment-friendly ways not just with
						their commercial products but with their production processes, our
						brand believes sustainable businesses will become more common and we
						would like to be a part of that transition.
					</p>
					<Link to="/galleries" className=" text-lg font-fahkwang font-bold">
						View
					</Link>
				</div>
				<div className="grid  h-full gap-2 w-full row-start-1  md:row-start-auto ob ">
					<figure className="">
						<img
							src={backgroundImage}
							alt="home"
							className="  h-full w-full object-cover"
						/>
					</figure>
				</div>
			</article>{" "}
			<article className="w-11/12 mx-auto justify-items-center grid lg:grid-cols-2 grid-rows-1 gap-6 my-24">
				<div className="grid grid-cols-2 h-full gap-2 w-full row-start-1 grid-rows-1  md:row-start-auto ">
					<figure className=" h-[256px]">
						<img
							src={backgroundImage}
							alt="home"
							className="aspect-w-1 aspect-w-1 h-full w-full object-cover object-right"
						/>
					</figure>{" "}
					<figure className=" h-[256px]">
						<img
							src={backgroundImage}
							alt="home"
							className="aspect-w-1 aspect-w-1 h-full w-full object-cover object-center"
						/>
					</figure>{" "}
					<figure className=" h-[256px]">
						<img
							src={backgroundImage}
							alt="home"
							className="aspect-w-1 aspect-w-1 h-full w-full object-cover object-center"
						/>
					</figure>{" "}
					<figure className=" h-[256px]">
						<img
							src={backgroundImage}
							alt="home"
							className="aspect-w-1 aspect-w-1 h-full w-full object-cover object-right"
						/>
					</figure>
				</div>
				<div className="h-full ">
					<h2 className=" text-3xl md:text-7xl">
						Project <br className="hidden md:block xl:hidden" /> Title
					</h2>
					<p className="my-4 w-11/12 ">
						The goal of Verdiv is to provide the same type of water (taste,
						quality, price) as mainstream drinking water brands but without
						using single-use plastic bottles and using metal cans and paper
						cartons instead. This environment-friendly approach to drinking
						water will hopefully encourage people to take steps to change their
						consumption habits not just with water but with other goods. As more
						mainstream brands adapt more environment-friendly ways not just with
						their commercial products but with their production processes, our
						brand believes sustainable businesses will become more common and we
						would like to be a part of that transition.
					</p>
					<Link to="/galleries" className=" text-lg font-fahkwang font-bold">
						View
					</Link>
				</div>
			</article>
			<article className="w-11/12 mx-auto  grid gap-2 md:grid-cols-[1fr,1fr]   grid-rows-4  md:grid-rows-2   my-24">
				<figure className=" h-full ">
					<img
						src={backgroundImage}
						alt="home"
						className=" h-full w-full object-cover object-right"
					/>
				</figure>{" "}
				<figure className=" h-full">
					<img
						src={backgroundImage}
						alt="home"
						className=" h-full w-full object-cover object-right"
					/>
				</figure>
				<div className="h-full  row-start-2 sm:row-start-2 md:row-start-auto ">
					<h2 className=" text-3xl md:text-7xl">
						Project <br className="hidden md:block xl:hidden" /> Title
					</h2>
					<p className="my-4 w-11/12 ">
						The goal of Verdiv is to provide the same type of water (taste,
						quality, price) as mainstream drinking water brands but without
						using single-use plastic bottles and using metal cans and paper
						cartons instead. This environment-friendly approach to drinking
						water will hopefully encourage people to take steps to change their
						consumption habits not just with water but with other goods. As more
						mainstream brands adapt more environment-friendly ways not just with
						their commercial products but with their production processes, our
						brand believes sustainable businesses will become more common and we
						would like to be a part of that transition.
					</p>
					<Link to="/galleries" className=" text-lg font-fahkwang font-bold">
						View
					</Link>
				</div>
				<figure className=" h-full w-full">
					<img
						src={backgroundImage}
						alt="home"
						className="aspect-w-1 aspect-w-1 h-full w-full object-cover object-right"
					/>
				</figure>
			</article>
			<hr className="my-4" />
			<Galleries />
		</section>
	);
};
export default Home;
