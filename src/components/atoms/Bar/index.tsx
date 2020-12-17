import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import styles from "./index.module.css";

interface Props {
	value: number;
	isComparing: boolean;
	isSwapping: boolean;
}

const MotionBox = motion.custom(Box);
const setVariant = (isComparing: boolean, isSwapping: boolean) => {
	if (isComparing) return "bar-compare";
	else if (isSwapping) return "bar-swapp";
	else return "bar-default";
};
const Bar: React.FC<Props> = ({ isComparing, isSwapping, value }) => {
	return (
		<MotionBox
			initial={{ opacity: 0, height: 0 }}
			animate={{ opacity: 1, height: "auto" }}
			className={`${styles["bar-container"]} ${
				styles[setVariant(isComparing, isSwapping)]
			}`}
			borderRadius="5px"
			borderBottomRadius="0"
		>
			<Box
				style={{
					height: `${value}px`,
				}}
			/>
		</MotionBox>
	);
};

export default Bar;
