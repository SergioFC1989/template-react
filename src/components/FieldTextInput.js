import { Box, TextInput, Text } from 'grommet'
import React from 'react'

const FieldTextInput = ({ widthTextInput, label, background, ...props  }) => (
	<>
		<Box  
			align="center" 
			gap="xxsmall"
			pad="xsmall"
			width={widthTextInput}
			background={background}
		>
			<Text textAlign="center">{label}</Text>
			<TextInput 
				size="large"
				textAlign="center"
				{...props}
			/>
		</Box>
	</>
)

export default FieldTextInput;