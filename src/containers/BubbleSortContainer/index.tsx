import React, { useEffect } from "react";
import SortingControllerContainer from "../SortingControllerContainer";
import SortingVisualizerContainer from "../SortingVisualizerContainer";
import p5types from "p5";
import bubbleSort from "../../utils/algorithms/sorting/bubbleSort";

const BubbleSortContainer: React.FC = () => {
	useEffect(() => {
		console.log("Rerendered");
	});

	return (
		<SortingControllerContainer
			sortingAlgorithm={bubbleSort}
			render={(array: any[]) => (
				<SortingVisualizerContainer
					array={array}
					draw={(p5: p5types) => {
						p5.background(38, 42, 59);

						let dX = p5.width / array.length;

						array.forEach((value, index) => {
							p5.stroke(255);
							p5.rect(index * dX, 500, 1, -value);
						});
					}}
				/>
			)}
		/>
	);
};

export default BubbleSortContainer;
