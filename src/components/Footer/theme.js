export const theme = {
  breakpoints: ['375px', '768px', '1440px'],

  fonts: {
    Poppins: "'Poppins', sans-serif",
  },

  fontSizes: [
    '10px',
    '12px',
    '14px',
    '16px',
    '18px',
    '24px',
    '28px',
    '44px',
    '48px',
    '100px',
    '32px',
  ],

  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  colors: {
    white: {
      100: '#FFFFFF', //card-title bg
      200: '#FAFAFA', //main light text color
      300: '#EFEFEF', //switch body bg
      400: '#F5F5F5', //textarea, inputs bg
    },
    black: {
      100: '#000000', //notfound page text
      200: '#23262A', //modal input, main dark text color
      300: '#2A2C36', //form bg-color
      400: '#22252A', //search-icon color, user name color, yummy color, black-button bg
      500: '#1E1F28', //subscribe button
    },
    green: {
      100: '#EBF3D4', //delete-icon bg, pagination number hover, ingredient card bg
      200: '#8BAA36', //main green color
      300: '#3CBC81', // validation success
      400: '#656565', // pagination button color
    },
    gray: {
      100: '#BDBDBD', //tab color, input text in search
      200: '#D9D9D9', //user photo bg, gray button bg, text-aria bg, input bg
      300: '#333333', //close button
      400: '#001833', //category text color, page title color
      500: '#3E4462', //card-title color,page subtitle color, ingredient title color, arrow
      600: '#E0E0E0', //text input
      700: '#707070', //border
      800: '#7E7E7E',
      900: '#656565', //pagination
    },
    red: {
      100: '#e74a3b', // validation error
    },
  },

  transitions: {
    create: createTransitions,
    duration: '250ms',
    easy: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

function createTransitions(
  properties = [],
  duration = '250ms',
  easing = 'cubic-bezier(0.4, 0, 0.2, 1)'
) {
  return properties
    .map(property => `${property} ${duration} ${easing}`)
    .join(', ');
}

theme.breakpoints.mobile = theme.breakpoints[0];
theme.breakpoints.tablet = theme.breakpoints[1];
theme.breakpoints.desktop = theme.breakpoints[2];