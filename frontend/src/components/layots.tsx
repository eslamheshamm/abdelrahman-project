import Footer from "./footer";
import NavBar from "./navbar";

type LayoutsProps = {
	children: any;
};
const Layouts: React.FC<LayoutsProps> = (props) => {
	return (
		<main className="w-11/12 mx-auto pt-6 pb-16 min-h-screen relative ">
			<NavBar />
			<section className="my-12">{props.children}</section>
			<Footer />
		</main>
	);
};
export default Layouts;
