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
		<main
			className={`"mx-auto pt-6 pb-16 min-h-screen h-full relative overflow-hidden hide-content ${
				isOpen ? "overflow-hidden" : ""
			}"`}
		>
			<nav className="w-11/12 mx-auto flex flex-row  justify-between items-center font-fahkwang text-base font-bold z-10 ">
				<h1>
					<Link to="/">Abdelrahman Ibrahim</Link>
				</h1>
				<Hamburger toggled={isOpen} toggle={setOpen} />
			</nav>
			{isOpen && (
				<div className=" text-center font-fahkwang text-xl font-bold w-full ele  ">
					<ul className="flex justify-around  flex-col  uppercase bg-white">
						<li className="my-4 ">
							<Link to="/" onClick={() => setOpen(false)}>
								Home
							</Link>
						</li>
						<li className="my-4">
							<Link to="/galleries" onClick={() => setOpen(false)}>
								Galleries +
							</Link>
						</li>
						<li className="my-4">
							<Link to="/exhibition" onClick={() => setOpen(false)}>
								Exhibition
							</Link>
						</li>
						<li className="my-4">
							<Link to="/about" onClick={() => setOpen(false)}>
								about
							</Link>
						</li>
						<li className="my-4">
							<Link to="/contact" onClick={() => setOpen(false)}>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			)}
			<div className={`my-12  ${isOpen ? "hidden" : "visible "}`}>
				{props.children}
			</div>
			<Footer />
		</main>
	);
};
export default Layouts;
