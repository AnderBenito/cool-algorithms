export function swap(arr: any[], a: number, b: number) {
	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}

export interface Info {
	description: string;
	cost: string;
}

export interface Algo {
	algo: (inputArr: any[]) => any;
	info: Info;
}
