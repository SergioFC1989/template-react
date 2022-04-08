import { grommet } from 'grommet';
import { deepMerge } from 'grommet/utils';

const theme = deepMerge(grommet, {
  global: {
    active: {
      background: {
        opacity: "none",
      },
      padding: 0,
    },
    colors: {
      background: 'white',
      brand: '#5AF0CE',
      dark: '#45729D',
      text: '#45729D',
      border: 'light-4',
      placeholder: 'light-4',
      'status-error': '#e36262',
      'status-warning': '#FBBD51',
      'brand-contrast': '#F2B044',
    },
    breakpoints: {
      small: {
        value: 768,
        edgeSize: {
          xsmall: '6px',
          small: '12px',
          medium: '16px',
          large: '22px',
        },
      },
    },
    control: {
      border: {
        radius: '6px',
      },
    },
    focus: {
      border: {
        color: 'transparent',
      },
      outline: {
         color: 'transparent',
      }, 
    },
    font: {
      family: '"Roboto", sans-serif',
      size: '16px',
      face: `
        /* latin-ext */
        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: local('Roboto'), url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }`,
    },
  },
  icon: {
    size: {
      small: '16px',
      medium: '24px',
      large: '30px',
      xlarge: '96px',
    },
  },
  text: {
    small: {
      size: '14px',
    },
    medium: {
      size: '16px',
    },
    large: {
      size: '18px',
    },
    xlarge: {
      size: '20px',
    },
  },
  avatar: {
    size: {
      small: '50px',
      medium: '96px',
      large: '116px',
      xlarge: '156px',
    },
  },
  button: {
    color: "white",
    primary: {
      border: {
        radius: '6px',
      },
      padding: '10px',
      background: { color: '#45729D' },
      color: 'white',
      opacity: 0,
    },
    secondary: {
      border: {
        radius: '6px',
      },
      opacity: 0,
      background: '#F07F7F',
      color: 'white',  
      padding: '10px',
    },
    default: {
      border: {
        radius: '6px',
      },
      background: 'transparent',
      color: '#8B8989',
      padding: '10px',
    },
  },
  fileInput: {
    border: 'bottom',
    pad: 'xxsmall',
  },
  radioButton: {
    hover: {
      border: {
        color: 'transparent',
      },
    },
  },
  list: {
    container: {
      align: 'center',
    },
    item: {
      extend: {
        alignText: 'center',
      }
    }
  },
  select: {
    control: {
      extend: 'width: 100%'   
    },
  },
});

export default theme;