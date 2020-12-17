import React from "react";
import SortingControllerContainer from "../SortingControllerContainer";
import SortingVisualizerContainer from "../SortingVisualizerContainer";
import insertionSort from "../../utils/algorithms/sorting/insertionSort";
import { Trace } from "../../utils/algorithms/sorting/helpers";

const InsertionSortContainer: React.FC = () => {
	return (
		<SortingControllerContainer
			sortingAlgorithm={insertionSort}
			render={(animations: Trace[], step: number) => (
				<SortingVisualizerContainer animations={animations} step={step} />
			)}
		/>
	);
};

export default InsertionSortContainer;