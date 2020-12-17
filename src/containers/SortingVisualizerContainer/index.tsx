import { Box } from "@chakra-ui/react";
import React from "react";
import Bar from "../../components/atoms/Bar";
import { Trace } from "../../utils/algorithms/sorting/helpers";
import styles from "./index.module.css";

interface Props {
	animations: Trace[];
	step: number;
}

const SortingVisualizerContainer: React.FC<Props> = ({ animations, step }) => {
	return (
		<Box
			bg={"gray.400"}
			padding="0 16px"
			className={styles["visualizerContainer"]}
		>
			{animations.length &&
				animations[step].state.map((value, index) => {
					let isComparing = animations[step].compare.includes(index);
					let isSwapping = animations[step].swap.includes(index);
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
	);
};

export default SortingVisualizerContainer;
