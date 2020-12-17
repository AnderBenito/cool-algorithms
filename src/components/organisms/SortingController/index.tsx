import { Button, Container } from "@chakra-ui/react";
import React from "react";
import ArrayLengthSelector from "../../molecules/ArrayLengthSelector";
import PlayControls from "../../molecules/PlayControls";
import PlaySpeedSelector from "../../molecules/PlaySpeedSelector";

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
			<ArrayLengthSelector numElem={numElem} setNumElem={setNumElem} />
			<PlayControls
				isPlaying={isPlaying}
				onBack={onBack}
				onNext={onNext}
				onPlay={onPlay}
				onStop={onStop}
			/>
			<PlaySpeedSelector setSortSpeed={setSortSpeed} sortSpeed={sortSpeed} />
		</Container>
	);
};

export default SortingController;
