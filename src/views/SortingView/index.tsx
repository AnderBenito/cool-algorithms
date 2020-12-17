import React from "react";
import { Route } from "react-router-dom";
import BubbleSortView from "./BubbleSortView";
import InsertionSortView from "./InsertionSortView";

const SortingView: React.FC = () => {
	return (
		<>
			<Route path="/sorting/bubble" component={BubbleSortView} />
			<Route path="/sorting/insertion" component={InsertionSortView} />
		</>
	);
};

export default SortingView;
