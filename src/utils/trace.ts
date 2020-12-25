export interface Animation {
	state: number[];
	swap: number[];
	compare: number[];
	accesses?: number;
	comparisons?: number;
}

class Trace {
	animations: Animation[];
	accesses: number;
	comparisons: number;

	constructor(array: any[]) {
		this.animations = [];
		this.accesses = 0;
		this.comparisons = 0;

		this.animations.push({
			state: [...array],
			compare: [],
			swap: [],
			accesses: this.accesses,
			comparisons: this.comparisons,
		});
	}

	add(array: any[], compare: number[] = [], swap: number[] = []) {
		this.accesses++;
		if (compare.length > 0) this.comparisons++;

		this.animations.push({
			state: [...array],
			compare: [...compare],
			swap: [...swap],
			accesses: this.accesses,
			comparisons: this.comparisons,
		});
	}
}

export default Trace;
