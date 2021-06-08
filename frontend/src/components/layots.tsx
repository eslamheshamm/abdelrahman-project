import Footer from "./footer";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";

type LayoutsProps = {
	isOpen?: boolean;
};
const Layouts: React.FC<LayoutsProps> = (props) => {
	const [isOpen, setOpen] = useState(false);

	return (
		<main className="w-11/12 mx-auto pt-6 pb-16 min-h-screen relative">
			<nav className="flex flex-row  justify-between items-center font-fahkwang text-base font-bold">
				<h1>
					<Link to="/">Abdelrahman Ibrahim</Link>
				</h1>
				<Hamburger toggled={isOpen} toggle={setOpen} />
			</nav>
			{isOpen && (
				<div className=" text-center font-fahkwang text-xl font-bold w-full ele">
					<ul className="flex justify-around  flex-col transition duration-900 ease-in-out delay-300 transform  translate-y-7   uppercase bg-white">
						<li className="my-4 ">
							<Link to="/">Home</Link>
						</li>
						<li className="my-4">
							<Link to="/galleries">Galleries +</Link>
						</li>
						<li className="my-4">
							<Link to="/exhibition">Exhibition</Link>
						</li>
						<li className="my-4">
							<Link to="/about">about</Link>
						</li>
						<li className="my-4">
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</div>
			)}
			<section className={`my-12  relative ${isOpen ? "hidden" : "block"}`}>
				{props.children}
			</section>
			<Footer />
		</main>
	);
};
export default Layouts;
