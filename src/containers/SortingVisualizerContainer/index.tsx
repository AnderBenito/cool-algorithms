import { Box } from "@chakra-ui/react";
import React from "react";
import Bar from "../../components/atoms/Bar";
import { Trace } from "../../utils/helpers";

interface Props {
	animation: Trace;
}

const SortingVisualizerContainer: React.FC<Props> = ({ animation }) => {
	if (!animation) return <Box>Error</Box>;
	return (
		<Box
			bg={"gray.400"}
			height="500px"
			display="flex"
			flexDirection="column"
			justifyContent="space-between"
		>
			<Box>Array accesses: {animation.accesses}</Box>
			<Box>Array comparisons: {animation.comparisons}</Box>
			<Box display="flex" alignItems="flex-end" justifyContent="space-between">
				{animation.state.map((value, index) => {
					let isComparing = animation.compare.includes(index);
					let isSwapping = animation.swap.includes(index);
					return (
						<Bar
							key={index}
							value={value}
							isComparing={isComparing}
							isSwapping={isSwapping}
						></Bar>
					);
				})}
			</Box>
		</Box>
	);
};

export default SortingVisualizerContainer;
