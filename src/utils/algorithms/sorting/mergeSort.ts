import { Trace } from "../../helpers";
const mergeSort = (inputArr: number[]) => {
	let copy = [...inputArr];

	let animations: Trace[] = [];
	animations.push({
		state: [...copy],
		compare: [],
		swap: [],
	});
	mergeSortFunction(copy, 0, copy.length - 1, animations);

	return animations;
};

function mergeSortFunction(
	arr: number[],
	l: number,
	r: number,
	animations: Trace[]
) {
	if (r > l) {
		let m = Math.floor((l + r) / 2);
		// console.log("Left side", arr.slice(l, m));
		// console.log("Right side", arr.slice(m, r));
		mergeSortFunction(arr, l, m, animations);
		mergeSortFunction(arr, m + 1, r, animations);
		merge(arr, l, m, r, animations);
		animations.push({
			state: [...arr],
			compare: [],
			swap: [],
		});
	}
}

function merge(
	arr: number[],
	l: number,
	m: number,
	r: number,
	animations: Trace[]
) {
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
		animations.push({
			state: [...arr],
			compare: [i + l, j + m + 1],
			swap: [],
		});
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

export default mergeSort;
