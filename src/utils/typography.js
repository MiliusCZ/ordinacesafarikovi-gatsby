import Typography from "typography";

const ordinaceSafarikoviTheme = {
    title: 'Ordinace Safarikovi',
    baseFontSize: '14px',
    baseLineHeight: 1.61,
    headerFontFamily: ['Segoe UI', 'Verdana', 'sans-serif'],
    bodyFontFamily: ['Segoie UI', 'Verdana', 'sans-serif'],
    bodyWeight: 400,
    headerWeight: 700,
    boldWeight: 700,
    scaleRatio: 3,
    overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
        a: {
          color: '#54bad0',
          'text-decoration': 'none'
        },
        'a:hover, a:active': {
            'text-decoration': 'underline'
        },
        'h1, h2': {
            'font-weight': 'normal',
            'margin-bottom': '15px',
        },
        'h3, h4': {
            margin: 0
        }
    })
};

const typography = new Typography(ordinaceSafarikoviTheme);


export default typography;