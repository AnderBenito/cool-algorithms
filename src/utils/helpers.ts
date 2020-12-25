export interface Trace {
	state: number[];
	swap: number[];
	compare: number[];
	accesses?: number;
	comparisons?: number;
}

export function swap(arr: any[], a: number, b: number) {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}
