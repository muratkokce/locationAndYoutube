import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Platform,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {getYoutubeVideos} from 'Redux/Actions/youtubeActions';
import {useDispatch, useSelector} from 'react-redux';
import List from 'Components/List';
import {wp} from 'Helpers/Responsive';
import {isEmpty} from 'lodash';
import Utils from 'Helpers/Utils';

const VideoList = ({route}) => {
  const dispatch = useDispatch();
  const youtubeKey = 'AIzaSyDd8QNx1T7K53mcv3_4QoAb3mFMm_FTZc8';
  const {youtubeVideoList, youtubeVideoLoading} = useSelector(
    state => state.videoList,
  );
  const coordinate = route?.params?.coordinate || '';

  useEffect(() => {
    if (!isEmpty(coordinate)) {
      dispatch(getYoutubeVideos(coordinate, '', youtubeKey));
    }
  }, [coordinate, dispatch]);

  return (
    <View style={styles.container}>
      {youtubeVideoLoading && (
        <View style={styles.centerView}>
          <ActivityIndicator
            size={Platform.OS === 'android' ? wp('8') : 'small'}
            color="#999999"
          />
        </View>
      )}
      <FlatList
        data={youtubeVideoList?.items}
        extraData={youtubeVideoList?.items}
        showsVerticalScrollIndicator
        keyExtractor={index => String(index)}
        onEndReachedThreshold={0}
        onEndReached={() => {
          if (youtubeVideoList?.nextPageToken) {
            setTimeout(() => {
              dispatch(
                getYoutubeVideos(
                  coordinate,
                  youtubeVideoList?.nextPageToken,
                  youtubeKey,
                ),
              );
            }, 500);
          }
        }}
        renderItem={({item, index}) => {
          return <List items={item} index={index} />;
        }}
      />
      <View style={styles.pageControlView}>
        <TouchableOpacity
          disabled={!youtubeVideoList?.prevPageToken}
          style={styles.buttonView}
          onPress={() =>
            dispatch(
              getYoutubeVideos(
                coordinate,
                youtubeVideoList?.prevPageToken,
                youtubeKey,
              ),
            )
          }>
          <Text
            style={[
              styles.text,
              {color: youtubeVideoList?.prevPageToken ? 'white' : 'black'},
            ]}>
            Önceki
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={!youtubeVideoList?.nextPageToken}
          style={styles.buttonView}
          onPress={() =>
            dispatch(
              getYoutubeVideos(
                coordinate,
                youtubeVideoList?.nextPageToken,
                youtubeKey,
              ),
            )
          }>
          <Text
            style={[
              styles.text,
              {color: youtubeVideoList?.nextPageToken ? 'white' : 'black'},
            ]}>
            Sonraki
          </Text>
        </TouchableOpacity>
      </View>
      {isEmpty(youtubeVideoList) && !youtubeVideoLoading && (
        <View style={styles.centerView}>
          <Text>Videolar getirilirken sorun oluştu.</Text>
        </View>
      )}
    </View>
  );
};

export default VideoList;
