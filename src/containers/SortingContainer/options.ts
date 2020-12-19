import bubbleSort from "../../utils/algorithms/sorting/bubbleSort";
import insertionSort from "../../utils/algorithms/sorting/insertionSort";
import mergeSort from "../../utils/algorithms/sorting/mergeSort";

export const options = [
	{
		value: bubbleSort,
		viewValue: "Bubble Sort",
	},
	{
		value: insertionSort,
		viewValue: "Insertion Sort",
	},
	{
		value: mergeSort,
		viewValue: "Merge Sort",
	},
];
