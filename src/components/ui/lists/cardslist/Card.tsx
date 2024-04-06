import {Card} from '@rneui/themed';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';

export default function CardItem({title, description, image, onPress}: any) {
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

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
    backgroundColor: 'black',
    marginVertical: 5,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontFamily: 'SpaceGrotesk-Regular',
  },
  description: {
    color: 'white',
    fontFamily: 'SpaceGrotesk-Regular',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.5,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: 15,
  },
});
