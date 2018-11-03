import Typography from 'typography';

const ordinaceSafarikoviTheme = {
  title: 'Ordinace Safarikovi',
  baseFontSize: '14px',
  baseLineHeight: 1.61,
  headerFontFamily: ['Segoe UI', 'Verdana', 'sans-serif'],
  bodyFontFamily: ['Segoe UI', 'Verdana', 'sans-serif'],
  bodyWeight: 400,
  headerWeight: 400,
  boldWeight: 700,
  headerGray: 20,
  scaleRatio: 3,
  overrideStyles: ({ rhythm }) => ({
    a: {
      color: '#54bad0',
      'text-decoration': 'none'
    },
    'a:hover, a:active': {
      'text-decoration': 'underline'
    },
    'h1': {
      'margin-bottom': rhythm(1),
    },
    'h2': {
      'margin-bottom': rhythm(1/4),
    },
    'h3, h4': {
      margin: 0
    }
  })
};

const typography = new Typography(ordinaceSafarikoviTheme);


export default typography;
