import {
	Box,
	Button,
	Container,
	Grid,
	GridItem,
	Progress,
} from "@chakra-ui/react";
import { FaSyncAlt } from "react-icons/fa";
import React from "react";
import PlayControls from "../../molecules/PlayControls";
import PlaySpeedSelector from "../../molecules/PlaySpeedSelector";

interface Props {
	onStop: any;
	onPlay: any;
	onNext: any;
	onBack: any;
	onReset: any;
	progress: number;
	getAnimationStep: any;
	setSortSpeed: any;
	isPlaying: boolean;
	sortSpeed: number;
}

const PlayingController: React.FC<Props> = ({
	onPlay,
	onBack,
	onNext,
	onStop,
	onReset,
	progress,
	getAnimationStep,
	setSortSpeed,
	isPlaying,
	sortSpeed,
}) => {
	return (
		<Box>
			<Progress
				onClick={getAnimationStep}
				cursor="pointer"
				colorScheme="pink"
				value={progress}
				marginTop="0.5rem"
			/>
			<Container maxW="2xl" marginTop="1rem">
				<Grid templateColumns="repeat(3, 1fr)" justifyItems="center">
					<GridItem justifySelf="right">
						<Button onClick={onReset}>
							<FaSyncAlt />
						</Button>
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
					<GridItem justifySelf="left">
						<PlaySpeedSelector
							setSortSpeed={setSortSpeed}
							sortSpeed={sortSpeed}
						/>
					</GridItem>
				</Grid>
			</Container>
		</Box>
	);
};

export default PlayingController;
