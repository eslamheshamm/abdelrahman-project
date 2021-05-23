import { Link } from "react-router-dom";
const NavBar: React.FC = () => {
	return (
		<header>
			<nav className="flex justify-between font-fahkwang text-base font-bold mt-6">
				<h1>
					<Link to="/">Abdelrahman Ibrahim</Link>
				</h1>
				<ul className="flex justify-between items-center  w-4/12 uppercase">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/galleries">Galleries +</Link>
					</li>
					<li>
						<Link to="/exhibition">Exhibition</Link>
					</li>
					<li>
						<Link to="/about">about</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
export default NavBar;
