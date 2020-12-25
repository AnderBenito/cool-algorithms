import { Info } from "./../../helpers";
import { swap } from "../../helpers";
import Trace from "../../trace";

const algo = (inputArr: number[]) => {
	let copy = [...inputArr];
	const trace = new Trace(copy);

	quickSortFunction(copy, 0, copy.length - 1, trace);
	trace.add(copy);

	return trace;
};

function quickSortFunction(arr: number[], l: number, r: number, trace: Trace) {
	if (l >= r) return;

	let index = partition(arr, l, r, trace);
	quickSortFunction(arr, l, index - 1, trace);
	quickSortFunction(arr, index + 1, r, trace);
}

function partition(arr: number[], l: number, r: number, trace: Trace): number {
	let pivotIndex = l;

	for (let i = l; i < r; i++) {
		trace.add(arr, [i, r], []);
		if (arr[i] < arr[r]) {
			swap(arr, i, pivotIndex);
			pivotIndex++;

			trace.add(arr, [], [i, pivotIndex]);
		}
	}
	swap(arr, r, pivotIndex);

	return pivotIndex;
}

const info: Info = {
	description: "Quick Sort",
	cost: "O(logn)",
};

const quickSort = {
	algo,
	info,
};

export default quickSort;
