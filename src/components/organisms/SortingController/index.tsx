import { Button, Container } from "@chakra-ui/react";
import React from "react";

interface Props {
	onRandomize: any;
	onStop: any;
	onPlay: any;
	onNext: any;
	onBack: any;
	setNumElem: any;
	setSortSpeed: any;
	isPlaying: boolean;
	numElem: number;
	sortSpeed: number;
}

const SortingController: React.FC<Props> = ({
	onPlay,
	onBack,
	onNext,
	onRandomize,
	onStop,
	setNumElem,
	setSortSpeed,
	isPlaying,
	numElem,
	sortSpeed,
	children,
}) => {
	return (
		<Container maxW="6xl">
			{children}
			<Button
				onClick={() => {
					onRandomize(numElem);
				}}
			>
				Randomize
			</Button>
			<input
				type="number"
				onChange={(e) => setNumElem(parseInt(e.target.value))}
				value={numElem}
			/>
			<Button onClick={onBack}>Back</Button>
			{!isPlaying ? (
				<Button
					onClick={() => {
						onPlay();
					}}
				>
					Play
				</Button>
			) : (
				<Button
					onClick={() => {
						onStop();
					}}
				>
					Stop
				</Button>
			)}
			<Button onClick={onNext}>Next</Button>
			<input
				type="range"
				min="1"
				max="100"
				value={sortSpeed}
				onChange={(e) => setSortSpeed(parseInt(e.target.value))}
			/>
		</Container>
	);
};

export default SortingController;
