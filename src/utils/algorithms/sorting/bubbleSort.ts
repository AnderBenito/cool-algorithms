import { doesNotReject } from "assert";
import sleep from "../../sleep";

const bubbleSort = async (inputArr: number[]) => {
	for (let i = 0; i < inputArr.length; i++) {
		let swapped = false;
		for (let j = 0; j < inputArr.length - i - 1; j++) {
			if (inputArr[j] > inputArr[j + 1]) {
				await sleep(10);
				//swap

				swapped = true;
				let tmp = inputArr[j];
				inputArr[j] = inputArr[j + 1];
				inputArr[j + 1] = tmp;
			}
		}
		if (!swapped) break;
	}
	return true;
};

export default bubbleSort;
