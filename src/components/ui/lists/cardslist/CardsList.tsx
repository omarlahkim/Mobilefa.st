import React from 'react';
import {FlashList} from '@shopify/flash-list';
import CardItem from './Card';
import {StyleSheet} from 'react-native';

export default function CardsList({data, bgColor, txtColor, horizontal}: any) {
  const _renderItem = ({item}: any) => {
    return (
      <CardItem
        bgColor={bgColor}
        txtColor={txtColor}
        title={item.title}
        description={item.description}
        image={item.image}
        horizontal={horizontal}
      />
    );
  };

  return (
    <FlashList
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      estimatedItemSize={33}
      contentContainerStyle={styles.contentContainerStyle}
      data={data}
      renderItem={_renderItem}
      horizontal={horizontal}
    />
  );
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    padding: 5,
  },
});
