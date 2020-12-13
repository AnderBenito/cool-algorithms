const mergeSort = (inputArr: number[]) => {
	mergeSortFunction(inputArr, 0, inputArr.length);
};

function mergeSortFunction(arr: number[], l: number, r: number) {
	if (l < r) {
		let m = Math.floor((l + r) / 2);
		console.log("Left side", arr.slice(l, m));
		console.log("Right side", arr.slice(m, r));
		mergeSortFunction(arr, l, m);
		mergeSortFunction(arr, m + 1, r);
		merge(arr, l, m, r);
	}
}

function merge(arr: number[], l: number, m: number, r: number) {
	let tempArr = [];
	let left = l;
	let right = m + 1;

	while (left <= m && right <= r) {
		if (arr[left] <= arr[right]) {
			tempArr.push(arr[left]);
			left++;
		} else {
			tempArr.push(arr[right]);
			right++;
		}
	}

	console.log("temp array", tempArr);
}

export default mergeSort;
