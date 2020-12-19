import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import SortingView from "./views/SortingView";

const Routes: React.FC = () => {
	return (
		<Switch>
			<Route exact path="/" component={HomeView} />
			<Route path="/sorting" component={SortingView} />
		</Switch>
	);
};

export default Routes;
