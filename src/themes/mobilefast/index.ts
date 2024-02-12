import {createTheme} from '@rneui/themed';

export const MobileFastTheme = {
  dark: false,
  colors: {
    primary: '#6200ee',
    background: '#fff',
    card: 'rgba(255, 255, 255, 0.8)',
    text: '#333333',
    border: '#f6f6f6',
    notification: 'rgb(255, 69, 58)',
  },
};

export const MobileFastDarkTheme = {
  dark: true,
  colors: {
    primary: '#bb86fc',
    background: '#000',
    card: 'rgba(0, 0, 0, 0.8)',
    text: '#ffffff',
    border: '#f6f6f6',
    notification: 'rgb(255, 69, 58)',
  },
};

export const MobileFastRNETheme = createTheme({
  components: {
    Text: {
      style: {},
      h1Style: {
        fontFamily: 'BricolageGrotesque-ExtraBold',
        fontSize: 24,
      },
      h2Style: {
        fontFamily: 'BricolageGrotesque-Bold',
        fontSize: 18,
      },
      h3Style: {
        fontFamily: 'BricolageGrotesque-Medium',
        fontSize: 16,
      },
      h4Style: {
        fontFamily: 'SpaceGrotesk-Regular',
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.6)',
      },
    },
    Button: {
      titleStyle: {
        fontFamily: 'BricolageGrotesque-Bold',
      },
      containerStyle: {
        borderRadius: 5,
        width: '100%',
      },
    },
  },
});
