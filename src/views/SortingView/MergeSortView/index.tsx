import React from "react";
import SortingControllerContainer from "../../../containers/SortingControllerContainer";
import mergeSort from "../../../utils/algorithms/sorting/mergeSort";

const MergeSortView: React.FC = () => {
	return <SortingControllerContainer sortingAlgorithm={mergeSort} />;
};

export default MergeSortView;
