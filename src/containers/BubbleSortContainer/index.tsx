import React from "react";
import SortingControllerContainer from "../SortingControllerContainer";
import SortingVisualizerContainer from "../SortingVisualizerContainer";
import bubbleSort from "../../utils/algorithms/sorting/bubbleSort";
import { Trace } from "../../utils/algorithms/sorting/helpers";

const BubbleSortContainer: React.FC = () => {
	return (
		<SortingControllerContainer
			sortingAlgorithm={bubbleSort}
			render={(animations: Trace[], step: number) => (
				<SortingVisualizerContainer animations={animations} step={step} />
			)}
		/>
	);
};

export default BubbleSortContainer;
