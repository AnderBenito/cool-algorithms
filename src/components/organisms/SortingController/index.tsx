import { Button, Container, Flex, Grid, GridItem } from "@chakra-ui/react";
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
			<Grid templateColumns="repeat(3, 1fr)">
				{children}
				<GridItem>
					<Flex>
						<Button
							onClick={() => {
								onRandomize(numElem);
							}}
						>
							Randomize
						</Button>
						<ArrayLengthSelector numElem={numElem} setNumElem={setNumElem} />
					</Flex>
				</GridItem>
				<GridItem>
					<PlayControls
						isPlaying={isPlaying}
						onBack={onBack}
						onNext={onNext}
						onPlay={onPlay}
						onStop={onStop}
					/>
				</GridItem>
				<GridItem>
					<PlaySpeedSelector
						setSortSpeed={setSortSpeed}
						sortSpeed={sortSpeed}
					/>
				</GridItem>
			</Grid>
		</Container>
	);
};

export default SortingController;
