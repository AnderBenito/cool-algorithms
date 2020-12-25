import { swap, Trace } from "../../helpers";

const insertionSort = (inputArr: number[], speed: number) => {
	let copy = [...inputArr];
	let animations: Trace[] = [];

	animations.push({
		state: [...copy],
		compare: [],
		swap: [],
	});

	for (let i = 1; i < copy.length; i++) {
		for (let j = i; j >= 0; j--) {
			animations.push({
				state: [...copy],
				compare: [j, j - 1],
				swap: [],
			});
			if (copy[j] < copy[j - 1]) {
				//swap
				swap(copy, j, j - 1);

				animations.push({
					state: [...copy],
					compare: [],
					swap: [j, j - 1],
				});
			}
		}
	}
	animations.push({
		state: [...copy],
		compare: [],
		swap: [],
	});

	return animations;
};

export default insertionSort;
