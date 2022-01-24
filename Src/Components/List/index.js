import React from 'react';
import {Text, Image, TouchableOpacity, Linking} from 'react-native';
import styles from './styles';

const List = ({items, index}) => {
  const videosTitle = items?.snippet?.title;
  const videosThumb = items?.snippet?.thumbnails?.high?.url;
  const videosUrl = 'https://www.youtube.com/watch?v=' + items?.id?.videoId;

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={styles.container}
      onPress={() => {
        Linking.canOpenURL(videosUrl).then(supported => {
          if (supported) {
            Linking.openURL(videosUrl);
          }
        });
      }}>
      <Image source={{uri: videosThumb}} style={styles.image} />
      <Text style={styles.title}>
        {videosTitle?.length < 25
          ? videosTitle
          : `${videosTitle.substring(0, 25)}...`}
      </Text>
    </TouchableOpacity>
  );
};

export default List;
