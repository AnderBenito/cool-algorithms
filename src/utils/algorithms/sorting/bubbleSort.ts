import { Trace } from "./helpers";

const bubbleSort = (inputArr: number[]) => {
	const animations: Trace[] = [];
	const copy = [...inputArr];

	animations.push({
		state: [...copy],
		compare: [],
		swap: [],
	});
	for (let i = 0; i < copy.length; i++) {
		let swapped = false;
		for (let j = 0; j < copy.length - i - 1; j++) {
			animations.push({
				state: [...copy],
				compare: [j, j + 1],
				swap: [],
			});
			if (copy[j] > copy[j + 1]) {
				//swap
				swapped = true;
				let tmp = copy[j];
				copy[j] = copy[j + 1];
				copy[j + 1] = tmp;

				//Push to the animations
				animations.push({
					state: [...copy],
					compare: [],
					swap: [j, j + 1],
				});
			}
		}
		if (!swapped) break;
	}
	return animations;
};

export default bubbleSort;
