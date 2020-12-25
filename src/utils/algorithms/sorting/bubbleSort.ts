import { swap, Trace } from "../../helpers";

const bubbleSort = (inputArr: number[]) => {
	const animations: Trace[] = [];
	const copy = [...inputArr];
	let accesses = 0;
	let comparisons = 0;

	animations.push({
		state: [...copy],
		compare: [],
		swap: [],
		accesses: accesses++,
		comparisons: comparisons++,
	});

	for (let i = 0; i < copy.length; i++) {
		let swapped = false;
		for (let j = 0; j < copy.length - i - 1; j++) {
			animations.push({
				state: [...copy],
				compare: [j, j + 1],
				swap: [],
				accesses: accesses++,
				comparisons: comparisons++,
			});
			if (copy[j] > copy[j + 1]) {
				//swap
				swapped = true;
				swap(copy, j, j + 1);

				//Push to the animations
				animations.push({
					state: [...copy],
					compare: [],
					swap: [j, j + 1],
					accesses: accesses++,
					comparisons: comparisons,
				});
			}
		}
		if (!swapped) break;
	}
	animations.push({
		state: [...copy],
		compare: [],
		swap: [],
		accesses: accesses,
		comparisons: comparisons,
	});

	return animations;
};

export default bubbleSort;
