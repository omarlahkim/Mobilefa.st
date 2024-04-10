import {Card} from '@rneui/themed';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';

export default function CardItem({
  title,
  description,
  image,
  color,
  horizontal,
  bgColor,
  txtColor,
  onPress,
}: any) {
  const styles = dynamicStyles({bgColor, txtColor, color, horizontal});
  return (
    <TouchableOpacity onPress={onPress}>
      <Card containerStyle={styles.container}>
        {image ? (
          <FastImage
            style={styles.backgroundImage}
            source={{
              uri: image,
            }}
          />
        ) : null}
        <View style={styles.contentContainer}>
          <Card.FeaturedTitle style={styles.title}>{title}</Card.FeaturedTitle>
          <Card.FeaturedSubtitle style={styles.description}>
            {description}
          </Card.FeaturedSubtitle>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

const dynamicStyles = ({bgColor, txtColor, color, horizontal}) =>
  StyleSheet.create({
    container: {
      padding: 0,
      marginVertical: horizontal ? 10 : 10,
      marginHorizontal: horizontal ? 3 : 10,
      backgroundColor: color ? color : bgColor,
      borderRadius: 8,
      shadowColor: color ? color : bgColor,
      shadowOpacity: 0.4,
      shadowRadius: 4,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      borderWidth: 0,
    },
    title: {
      color: txtColor,
      fontFamily: 'SpaceGrotesk-Regular',
      textAlign: horizontal ? 'center' : 'left',
    },
    description: {
      color: txtColor,
      opacity: 0.6,
      fontFamily: 'SpaceGrotesk-Regular',
      textAlign: horizontal ? 'center' : 'left',
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.35,
      borderRadius: 10,
      resizeMode: 'cover',
    },
    contentContainer: {
      padding: 15,
    },
  });
