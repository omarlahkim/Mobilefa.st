import {StyleSheet, View} from 'react-native';
import {Defs, LinearGradient, Rect, Stop, Svg} from 'react-native-svg';
import {BlurView} from '@react-native-community/blur';

export default function GradientBackgroundView({children}) {
  const FROM_COLOR = '#56ab2f';
  const TO_COLOR = '#a8e063';
  return (
    <View style={{flex: 1}}>
      <BlurView
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          zIndex: 0,
        }}
        blurType="thinMaterialLight"></BlurView>
      <Svg
        height="100%"
        width="100%"
        style={[StyleSheet.absoluteFillObject, {zIndex: -1}]}>
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0" stopColor={FROM_COLOR} />
            <Stop offset="1" stopColor={TO_COLOR} />
          </LinearGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#grad)" />
      </Svg>

      {children}
    </View>
  );
}
