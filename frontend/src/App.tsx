import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Galleries from "./pages/galleries";
import Exhibition from "./pages/exhibition";
import About from "./pages/about";
import Contact from "./pages/contact";
import Layouts from "./components/layots";
const App: React.FC = () => {
	return (
		<Router>
			<Layouts>
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/galleries">
						<Galleries />
					</Route>
					<Route path="/exhibition">
						<Exhibition />
					</Route>
					<Route path="/about">
						<About />
					</Route>

					<Route path="/contact">
						<Contact />
					</Route>
				</Switch>
			</Layouts>
		</Router>
	);
};

export default App;
