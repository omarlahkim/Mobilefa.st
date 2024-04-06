import React from 'react';
import {FlashList} from '@shopify/flash-list';
import CardItem from './Card';

const _renderItem = ({item}: any) => {
  return (
    <CardItem
      title={item.title}
      description={item.description}
      image={item.image}
    />
  );
};

export default function CardsList({data}: any) {
  return (
    <FlashList
      showsVerticalScrollIndicator={false}
      estimatedItemSize={33}
      data={data}
      renderItem={_renderItem}
    />
  );
}
