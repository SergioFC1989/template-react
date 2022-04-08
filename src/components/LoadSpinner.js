import React from 'react';
import { Box, Layer, Spinner, Text } from 'grommet';

const LoadSpinner = ({ label }) => (
	<>
		<Box align="center" width="medium">
			<Layer position="center" background={{opacity: true}}>
				<Spinner color="brand" size="xlarge" />
				<Text textAlign="center">{label}</Text>
			</Layer>
		</Box>
	</>
);

export default LoadSpinner;