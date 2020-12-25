import { Info } from "./../../helpers";
import { swap } from "../../helpers";
import Trace from "../../trace";

const algo = (inputArr: number[]) => {
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

const info: Info = {
	description: "Selection Sort",
	cost: "",
};

const selectionSort = {
	algo,
	info,
};
export default selectionSort;
