import React from "react";
import SortingControllerContainer from "../SortingControllerContainer";
import bubbleSort from "../../utils/algorithms/sorting/bubbleSort";

const BubbleSortContainer: React.FC = () => {
	return <SortingControllerContainer sortingAlgorithm={bubbleSort} />;
};

export default BubbleSortContainer;
