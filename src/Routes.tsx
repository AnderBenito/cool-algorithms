import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import SortingView from "./views/SortingView";

const Routes: React.FC = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={HomeView} />
				<Route path="/sorting" component={SortingView} />
			</Switch>
		</Router>
	);
};

export default Routes;
