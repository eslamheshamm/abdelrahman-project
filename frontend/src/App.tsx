import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Galleries from "./pages/galleries";
import Exhibition from "./pages/exhibitions";
import About from "./pages/about";
import Contact from "./pages/contact";
import Layouts from "./components/layots";
import ProjectPost from "./components/projects/project-post";
import ProjectPostPreview from "./components/projects/project-post-preview";
import GalleryScreen from "./components/galleries";
import GallerImagePreview from "./pages/galleries/ImagePreview";
import ExhibitiontPost from "./components/exhibitions/exhibition-post";
import ExhibitionPostPreview from "./components/exhibitions/exhibition-post-preview";
const App: React.FC = () => {
	return (
		<Router>
			<Layouts>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/galleries" component={Galleries} />
					<Route path="/gallery/:id" component={GalleryScreen} />
					<Route path="/gallery" component={GallerImagePreview} />
					<Route path="/exhibitions" component={Exhibition} />
					<Route path="/exhibition/:slug" component={ExhibitiontPost} />
					<Route path="/exhibition/" component={ExhibitionPostPreview} />
					<Route path="/project/:slug" component={ProjectPost} />
					<Route path="/project/" component={ProjectPostPreview} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
				</Switch>
			</Layouts>
		</Router>
	);
};

export default App;
