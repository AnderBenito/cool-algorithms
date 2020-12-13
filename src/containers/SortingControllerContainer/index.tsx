import React, { useEffect, useRef, useState } from "react";

interface Props {
	sortingAlgorithm: any;
	render: any;
}

const genArray = (numElem: number) => {
	let arr: number[] = [];
	for (let i = 0; i < numElem; i++) {
		arr[i] = Math.floor(Math.random() * 400);
	}

	return arr;
};

const SortingControllerContainer: React.FC<Props> = ({
	render,
	sortingAlgorithm,
}) => {
	const [array, setArray] = useState<number[]>([]);
	const [isSorting, setIsSorting] = useState<boolean>(false);
	const [numElem, setNumElem] = useState<number>(50);

	useEffect(() => {
		setArray(genArray(numElem));
	}, [numElem]);

	useEffect(() => {
		if (isSorting) {
			console.log("start sorting");
			sortingAlgorithm(array).then((status: boolean) => {
				setIsSorting(!status);
				console.log("DONE");
			});
		}
	}, [array, isSorting, sortingAlgorithm]);

	return (
		<>
			{render(array, isSorting, setIsSorting)}
			<button
				onClick={() => {
					setArray(genArray(numElem));
				}}
			>
				Randomize
			</button>
			<input
				type="number"
				onChange={(e) => setNumElem(parseInt(e.target.value))}
				value={numElem}
			/>
			<button disabled={isSorting} onClick={() => setIsSorting(true)}>
				Sort
			</button>
			<button onClick={() => console.log(array)}>View array</button>
		</>
	);
};

export default SortingControllerContainer;
