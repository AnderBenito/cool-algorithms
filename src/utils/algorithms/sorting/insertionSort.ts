const insertionSort = (inputArr: number[]) => {
	for (let i = 1; i < inputArr.length; i++) {
		for (let j = i; j >= 0; j--) {
			if (inputArr[j] < inputArr[j - 1]) {
				//swap
				let temp = inputArr[j];
				inputArr[j] = inputArr[j - 1];
				inputArr[j - 1] = temp;
			}
		}
	}
};

export default insertionSort;
