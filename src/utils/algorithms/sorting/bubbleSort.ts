import { swap } from "../../helpers";
import Trace from "../../trace";

const bubbleSort = (inputArr: number[]) => {
	const copy = [...inputArr];
	let trace = new Trace(inputArr);

	for (let i = 0; i < copy.length; i++) {
		let swapped = false;
		for (let j = 0; j < copy.length - i - 1; j++) {
			trace.add(copy, [j, j + 1], []);
			if (copy[j] > copy[j + 1]) {
				//swap
				swapped = true;
				swap(copy, j, j + 1);

				//Push to the animations
				trace.add(copy, [], [j, j + 1]);
			}
		}
		if (!swapped) break;
	}
	trace.add(copy);

	return trace;
};

export default bubbleSort;
