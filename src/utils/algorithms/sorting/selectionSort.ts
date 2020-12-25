import { swap } from "../../helpers";
import Trace from "../../trace";

const selectionSort = (inputArr: number[]) => {
	let copy = [...inputArr];
	let trace = new Trace(copy);

	for (let i = 0; i < copy.length; i++) {
		let minIndex = i;
		for (let j = i + 1; j < copy.length; j++) {
			trace.add(copy, [j, minIndex], []);
			if (copy[j] < copy[minIndex]) {
				minIndex = j;
			}
		}
		if (minIndex !== i) {
			swap(copy, i, minIndex);
		}
	}

	trace.add(copy);

	return trace;
};

export default selectionSort;
