import { swap, Trace } from "../../helpers";

export const quickSort = (inputArr: number[]) => {
	const animations: Trace[] = [];

	let copy = [...inputArr];
	animations.push({
		state: [...copy],
		compare: [],
		swap: [],
	});
	quickSortFunction(copy, 0, copy.length - 1, animations);
	animations.push({
		state: [...copy],
		compare: [],
		swap: [],
	});

	return animations;
};

function quickSortFunction(
	arr: number[],
	l: number,
	r: number,
	animations: Trace[]
) {
	if (l >= r) return;

	let index = partition(arr, l, r, animations);
	quickSortFunction(arr, l, index - 1, animations);
	quickSortFunction(arr, index + 1, r, animations);
}

function partition(
	arr: number[],
	l: number,
	r: number,
	animations: Trace[]
): number {
	let pivotIndex = l;

	for (let i = l; i < r; i++) {
		animations.push({
			state: [...arr],
			compare: [i, r],
			swap: [],
		});
		if (arr[i] < arr[r]) {
			swap(arr, i, pivotIndex);
			pivotIndex++;
			animations.push({
				state: [...arr],
				compare: [],
				swap: [i, pivotIndex],
			});
		}
	}
	swap(arr, r, pivotIndex);

	return pivotIndex;
}
