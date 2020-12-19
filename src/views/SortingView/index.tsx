import React from "react";
import { Route } from "react-router-dom";
import SortingContainer from "../../containers/SortingContainer";
import BubbleSortView from "./BubbleSortView";
import InsertionSortView from "./InsertionSortView";
import MergeSortView from "./MergeSortView";

const SortingView: React.FC = () => {
	return (
		<>
			<SortingContainer />
			<Route path="/sorting/bubble" component={BubbleSortView} />
			<Route path="/sorting/insertion" component={InsertionSortView} />
			<Route path="/sorting/merge" component={MergeSortView} />
		</>
	);
};

export default SortingView;
