import React from 'react';
import { Box, Button } from 'grommet';
import { FormPreviousLink } from 'grommet-icons'

const RoundButton = ({ onClick }) => (
  <>
    <Box 
      round="xlarge"
      background="brand"
      pad="medium"
      align="center"
      width="xxsmall"
      height="xxsmall"
    >
      <Box align="center" justify="center">
        <Button
          icon={<FormPreviousLink />}
          size="large"
          onClick={onClick}
        />
      </Box>
    </Box>
  </>
);

export default RoundButton;