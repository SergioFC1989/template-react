import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button as ButtomGrommet } from 'grommet';

const Button = ({ alignButton, color, label, onClick, ...props }) => (
  <>
    <Box align={alignButton} width="medium" margin="small" {...props}>
      <ButtomGrommet
        primary
        color={color}
        fill="horizontal"
        label={label}
        size="large"
        onClick={onClick}
      />
    </Box>
  </>
);

Button.propTypes = {
  alignButton: PropTypes.string,
};

Button.defaultProps = {
  alignButton: 'center',
};

export default Button;