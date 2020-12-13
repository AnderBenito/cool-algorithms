import React from "react";
import { Route } from "react-router-dom";
import BubbleSortView from "./BubbleSortView";

const SortingView: React.FC = () => {
	return (
		<>
			<Route path="/sorting/bubble" component={BubbleSortView} />
		</>
	);
};

export default SortingView;
