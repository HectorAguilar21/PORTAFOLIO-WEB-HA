/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    minWidth: {
      '720': '720px',
      '360': '360px',
      '288': '288px',
      '1/2': '50%',
      'full': '100%',
    },

    maxWidth: {
      '200': '200px',
      '450': '450px',
      '1/2': '50%',
      'full': '100%',
    },

    minHeight: {
      '250': '250px',
      '475': '465px',
      '400': '400px',
      '350': '350px',
      '340': '340px',
      '1/2': '50%',
      'full': '100%',
    },

    maxHeight: {
      '75': '75px',
      '400': '400px',
      '475': '465px',
      '339': '339px',
      '1/2': '50%',
      'full': '100%',
    },

    extend: {
      height: {
        '22': '90px',
        '500': '500px',
        '360': '360px',
        '600': '600px',
        '11/12': '91%'

      },
      width: {
        '22': '90px',
      },

      colors: {
        custom: {
          'orangeHtml': '#E34F26',
          'blueCss': '#1572B6',
          'purpleBootstrap': '#7952B3',
          'blueskyTailwind': '#06B6D4',
          'yellowJavascript': '#F7DF1E',
          'blueskyReat': '#61DAFB',
          'redReactRouter': '#CA4245',
          'blueskyLottie': '#2beaed',
          'blueFramerMotion': '#0055FF',
          'pinkSweetAlert': '#F38270',
          'purplePhp': '#777BB4',
          'redLaravel': '#FF2D20',
          'greenNodejs': '#339933',
          'blackExpress': '#000000',
          'blueskyMySQL': '#4479A1',
          'orangeGit': '#F05032',
          'grayGitHub': '#181717',
          'grayGithubpages': '#222222',
          'orangePostman': '#FF6C37',
          'orangeXampp': '#FB7A24',
          'blueVSC': '#007ACC',
          'purpleGradientIndigo': "#C82033",
          'salmonGradientIndigo': '#FF7C60',
          'orangeGradientIndigo': '#FFB956',
          'yellowGradientindigo': '#F9F871'

        }
      }
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
