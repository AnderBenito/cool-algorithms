import { swap } from "../../helpers";
import Trace from "../../trace";

const insertionSort = (inputArr: number[], speed: number) => {
	let copy = [...inputArr];
	let trace = new Trace(copy);

	for (let i = 1; i < copy.length; i++) {
		for (let j = i; j >= 0; j--) {
			trace.add(copy, [j, j - 1], []);
			if (copy[j] < copy[j - 1]) {
				//swap
				swap(copy, j, j - 1);

				trace.add(copy, [], [j, j - 1]);
			}
		}
	}
	trace.add(copy);

	return trace;
};

export default insertionSort;
