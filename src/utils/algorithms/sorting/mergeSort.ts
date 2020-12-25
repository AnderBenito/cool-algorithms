import { Info } from "./../../helpers";
import Trace from "../../trace";

const algo = (inputArr: number[]) => {
	let copy = [...inputArr];
	let trace = new Trace(copy);

	mergeSortFunction(copy, 0, copy.length - 1, trace);
	trace.add(copy);

	return trace;
};

function mergeSortFunction(arr: number[], l: number, r: number, trace: Trace) {
	if (r > l) {
		let m = Math.floor((l + r) / 2);
		mergeSortFunction(arr, l, m, trace);
		mergeSortFunction(arr, m + 1, r, trace);
		merge(arr, l, m, r, trace);
	}
}

function merge(arr: number[], l: number, m: number, r: number, trace: Trace) {
	let i = 0;
	let j = 0;
	let k = l;

	let tempLeft = [];
	let tempRight = [];

	for (let i = l; i <= m; i++) {
		tempLeft.push(arr[i]);
	}
	for (let i = m + 1; i <= r; i++) {
		tempRight.push(arr[i]);
	}

	while (i < tempLeft.length && j < tempRight.length) {
		trace.add(arr, [i + l, j + m + 1], []);
		if (tempLeft[i] <= tempRight[j]) {
			arr[k] = tempLeft[i];
			i++;
		} else {
			arr[k] = tempRight[j];
			j++;
		}
		k++;
	}

	while (i < tempLeft.length) {
		arr[k] = tempLeft[i];
		i++;
		k++;
	}

	while (j < tempRight.length) {
		arr[k] = tempRight[j];
		j++;
		k++;
	}
}

const info: Info = {
	description: "Merge sort",
	cost: "O(logn)",
};

const mergeSort = {
	algo,
	info,
};

export default mergeSort;
