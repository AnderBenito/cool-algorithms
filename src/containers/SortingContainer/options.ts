import quickSort from "./../../utils/algorithms/sorting/quickSort";
import bubbleSort from "../../utils/algorithms/sorting/bubbleSort";
import insertionSort from "../../utils/algorithms/sorting/insertionSort";
import mergeSort from "../../utils/algorithms/sorting/mergeSort";
import selectionSort from "../../utils/algorithms/sorting/selectionSort";

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
		value: selectionSort,
		viewValue: "Selection Sort",
	},
	{
		value: mergeSort,
		viewValue: "Merge Sort",
	},
	{
		value: quickSort,
		viewValue: "Quick Sort",
	},
];
