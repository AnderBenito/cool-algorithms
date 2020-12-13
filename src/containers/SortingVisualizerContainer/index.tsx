import React from "react";
import Sketch from "react-p5";
import p5types from "p5";

interface Props {
	array: number[];
	draw: any;
}

const SortingVisualizerContainer: React.FC<Props> = ({ draw }) => {
	const setup = (p5: p5types, canvasParentRef: Element) => {
		console.log(canvasParentRef);
		p5.createCanvas(1000, 500).parent(canvasParentRef);
		p5.background(10);
	};

	return <Sketch setup={setup} draw={draw} />;
};

export default SortingVisualizerContainer;
