/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    // screens: {
    //   sm: '480px',
    //   md: '1300px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    extend: {
      margin: {
        '13' : '52px'
      },
      height: {
        'custom-143' : '143px',
        'custom-500' : '500px',
        'custom-770' : '770px',
        'custom-173' : '173px'
      },
      backgroundColor: {
        'custom-yellow' : '#FBC101',
        'custom-blue' : '#DFECF4',
        
      },
      width: {
        '1/35' : '37%',
        'custom-428' : '428px',
        'custom-620' : '620px',
        'custom-485' : '550px',
        'custom-500' : '510px',
        'custom-76' : '318px'

      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'inter' : ['Inter']
      },
      fontSize: {
        'custom-18' : '18px',
        'custom-21' : '21px',
        'custom-25' : '25px',
        'custom-52' : '52px',
        'custom-15' : '15px',
      },
      fontWeight: {
        'custom-750' : 750,
        'custom-650' : 650
      },
      spacing: {
        '500' : '500px',
        '70' : '70% '
      },
      left: {
        '800' : '800'
      },
      textColor: {
        'custom-divider' : '#B3C4F1'
      },
      borderColor: {
        'custom-divider' : '#B3C4F1'
      },
      padding: {
        '15' : '60px'
      },
      borderRadius: {
        '4xl' : '35px'
      },
      lineHeight: {
        '50' : '50px'
      },
      backgroundSize: {
        '1/2' : '50%'
      },
      backgroundImage: {
        'crop-2': "url('/image/crop-2.jpg')",
        'crop-3': "url('/image/crop-sunflower.png')",
        'sunflower': "url('/image/sunflower.jpg')",
      }
      
    },
  },
  plugins: [
    // require('@tailwindcss/ui'),
  ],
  
}
