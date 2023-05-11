/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'SofiaSansCondensed': ['Sofia Sans Condensed', 'sans-serif'],
        'Alkatra': ['Alkatra', 'sans-serif'],
        'SourceSansPro': ['Source Sans Pro', 'sans-serif'],
        'Pattaya': ['Pattaya', 'sans-serif']
      },
      // colors: {
      //   custom: {
      //     'orangeHtml': '#E34F26',
      //     'blueCss': '#1572B6',
      //     'purpleBootstrap': '#7952B3',
      //     'blueskyTailwind': '#06B6D4',
      //     'yellowJavascript': '#F7DF1E',
      //     'blueskyReat': '#61DAFB',
      //     'redReactRouter': '#CA4245',
      //     'blueskyLottie': '#2beaed',
      //     'blueFramerMotion': '#0055FF',
      //     'pinkSweetAlert': '#F38270',
      //     'purplePhp': '#777BB4',
      //     'redLaravel': '#FF2D20',
      //     'greenNodejs': '#339933',
      //     'blackExpress': '#000000',
      //     'blueskyMySQL': '#4479A1',
      //     'orangeGit': '#F05032',
      //     'grayGitHub': '#181717',
      //     'grayGithubpages': '#222222',
      //     'orangePostman': '#FF6C37',
      //     'orangeXampp': '#FB7A24',
      //     'blueVSC': '#007ACC',
      //     'purpleGradientIndigo': "#C82033",
      //     'salmonGradientIndigo': '#FF7C60',
      //     'orangeGradientIndigo': '#FFB956',
      //     'yellowGradientindigo': '#F9F871'
      //   }
      // }
    },
    screens: {
      //sFHD: '1920px',
      sFHD: '1920px',
      // sHDplus: '1366px',
      sHDplus: '1366px',
      // sHD: '1280px',
      sHD: '1280px',
      // sTPROplus: '1024px',
      sTPROplus: '1024px',
      // sTPRO: '834px',
      sTPRO: '834px',
      // sT: '768px',
      sT: '768px',
      // sTMINI: '600px',
      sTMINI: '600px',
      // sCXSmax: '414px',
      sCXSmax: '414px',
      // sCXS: '375px',
      sCXS: '375px',
      // sCS: '360px',
      sCS: '360px',
      // sMINI: '240px',
      sMINI: '320px',
    }
  },
  plugins: [],
}
