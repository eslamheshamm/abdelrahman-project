import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Galleries from "./pages/galleries";
import Exhibition from "./pages/exhibition";
import About from "./pages/about";
import Contact from "./pages/contact";
import Layouts from "./components/layots";
import ProjectPost from "./components/Project/project-post";
import ProjectPostPreview from "./components/Project/project-post-preview";
import PortraitScreen from "./components/galleries/portrait";
import { GallerImagePreview } from "./pages/galleries";
const App: React.FC = () => {
	return (
		<Router>
			<Layouts>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/galleries/" component={Galleries} />
					<Route path="/gallery/" component={GallerImagePreview} />
					<Route path="/gallery/:id" component={PortraitScreen} />
					<Route path="/exhibition" component={Exhibition} />
					<Route path="/project/" component={ProjectPostPreview} />
					<Route path="/project/:slug" component={ProjectPost} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
				</Switch>
			</Layouts>
		</Router>
	);
};

export default App;
