import React from 'react'

import { Box, Layer, Button, Heading, Paragraph } from 'grommet'

import { Alert as IconAlert } from 'grommet-icons';

const Alert = ({ colorIcon, message, description, ...props }) => {
  return(
    <>
      <Box margin="small" gap="xsmall" justify="center" width="medium" pad="medium" round="small">
        <Layer margin="none" justify="center" position="center" animation="fadeIn">
          <Box margin="small" align="center" width="large" pad="small">
            <Box gap="xsmall" margin="none" direction="row" align="center">
              <IconAlert color={colorIcon} size="medium" />
              <Heading level={3} margin="xsmall" textAlign="center">{message}</Heading>
            </Box>
							<Box margin={{bottom: "medium"}}>
              	<Paragraph textAlign="center" margin="none" size="medium">{description}</Paragraph>
							</Box>
            <Box width="medium" align="center" margin="none">
              <Button
								fill="horizontal" 
                size="large"
								label="Entendido"
                {... props}
              />
            </Box>
          </Box>
        </Layer>
      </Box>
    </>
  )
};

Alert.defaultProps = {
  colorIcon: 'status-error'
}
export default Alert;