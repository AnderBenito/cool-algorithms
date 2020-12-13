const selectionSort = (inputArr: number[]) => {
	for (let i = 0; i < inputArr.length; i++) {
		let minIndex = i;
		for (let j = i + 1; j < inputArr.length; j++) {
			if (inputArr[j] < inputArr[minIndex]) {
				minIndex = j;
			}
		}
		if (minIndex !== i) {
			let tmp = inputArr[i];
			inputArr[i] = inputArr[minIndex];
			inputArr[minIndex] = tmp;
		}
	}
};

export default selectionSort;
