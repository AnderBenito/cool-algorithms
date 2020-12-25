import { swap } from "../../helpers";
import Trace from "../../trace";

const algo = (inputArr: number[], speed: number) => {
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

const info = {
	description:
		"The Insertion Sort algorithm is one of the easiest but slowest algorithms to implement",
	cost: "O(n)",
};

const insertionSort = {
	algo,
	info,
};

export default insertionSort;
