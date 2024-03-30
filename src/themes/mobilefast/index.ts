import {createTheme} from '@rneui/themed';
import {colors_dark, colors_light} from './colors';
import {styles} from './styles';

export const theme = createTheme({
  lightColors: {...colors_light.colors},
  darkColors: {...colors_dark.colors},
  components: {...styles},
});
