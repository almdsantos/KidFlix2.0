import React from 'react'
import { FlatList } from 'react-native'
import { Card } from '../../molecules'
import { Text } from '../../atoms'

const DATA = [
    {
        id: 0,
        image_url:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4gtgUYAngSN6NlFX2ybJSDKCSVE.jpg',
    },
    {
        id: 1,
        image_url:
          'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mOQEn51mD518IXuILNWezEwyOAE.jpg',
    },
]



export const HomeList = () => {
    return (
      <FlatList
        horizontal
        data={DATA}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => String(item.id)}
      />
    )
  }