import { swap, Trace } from "./helpers";

const selectionSort = (inputArr: number[]) => {
	let animations: Trace[] = [];
	let copy = [...inputArr];

	animations.push({
		state: [...copy],
		compare: [],
		swap: [],
	});

	for (let i = 0; i < copy.length; i++) {
		let minIndex = i;
		for (let j = i + 1; j < copy.length; j++) {
			animations.push({
				state: [...copy],
				compare: [j, minIndex],
				swap: [],
			});
			if (copy[j] < copy[minIndex]) {
				minIndex = j;
			}
		}
		if (minIndex !== i) {
			swap(copy, i, minIndex);
		}
	}

	animations.push({
		state: [...copy],
		compare: [],
		swap: [],
	});

	return animations;
};

export default selectionSort;
