import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Color from '../../config/Color';

export default function HomeScreen() {
  const [obj, setObj] = useState([
    {
      id: 0,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyM4nmeG6Jdh6Hc0Cx4yezFE1-aht2DJk9BQ&usqp=CAU',
      like: 0,
    },
    {
      id: 1,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq-ZVh7AIyBhHMK8TAHI_Yz9YFoKowPKlYIQ&usqp=CAU',
      like: 0,
    },
    {
      id: 2,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQefeOIaqy3klanIw9M6xN-fwQnbKzAyFznSA&usqp=CAU',
      like: 0,
    },
  ]);

  const likeButtonHandler = idHandler => {
    let count = obj.filter(obj => obj.id !== idHandler);
    setObj([
      {
        id: idHandler,
        image: obj[idHandler].image,
        like: ++obj[idHandler].like,
      },
      ...count,
    ]);
  };

  const dislikeButtonHandler = idHandler => {
    let count = obj.filter(obj => obj.id !== idHandler);
    setObj([
      {
        id: idHandler,
        image: obj[idHandler].image,
        like: --obj[idHandler].like,
      },
      ...count,
    ]);
  };

  const likeAllButtonHandler = () => {
    setObj([
      {
        id: obj[0].id,
        image: obj[0].image,
        like: ++obj[0].like,
      },
      {
        id: obj[1].id,
        image: obj[1].image,
        like: ++obj[1].like,
      },
      {
        id: obj[2].id,
        image: obj[2].image,
        like: ++obj[2].like,
      },
    ]);
  };

  const dislikeAllButtonHandler = () => {
    setObj([
      {
        id: obj[0].id,
        image: obj[0].image,
        like: obj[0].like === 0 ? 0 : --obj[0].like,
      },
      {
        id: obj[1].id,
        image: obj[1].image,
        like: obj[1].like === 0 ? 0 : --obj[1].like,
      },
      {
        id: obj[2].id,
        image: obj[2].image,
        like: obj[2].like === 0 ? 0 : --obj[2].like,
      },
    ]);
  };

  const resetAllButtonHandler = () => {
    setObj([
      {
        id: obj[0].id,
        image: obj[0].image,
        like: 0,
      },
      {
        id: obj[1].id,
        image: obj[1].image,
        like: 0,
      },
      {
        id: obj[2].id,
        image: obj[2].image,
        like: 0,
      },
    ]);
  };

  const objSort = obj.sort((a, b) => a.id - b.id);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.headerWrapper}>
          <TouchableOpacity
            onPress={likeAllButtonHandler}
            style={styles.blueButton}>
            <Text style={styles.whiteText}>Like All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={resetAllButtonHandler}
            style={styles.whiteButton}>
            <Text style={styles.blackText}>Reset All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={dislikeAllButtonHandler}
            style={styles.redButton}>
            <Text style={styles.whiteText}>Dislike All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={objSort}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 40}}
          renderItem={({item}) => {
            return (
              <View style={styles.contentWrapper}>
                <Image source={{uri: item.image}} style={styles.image} />
                <View style={styles.footerContent}>
                  <View style={styles.likeWrapper}>
                    <Text>{item.like} Like</Text>
                  </View>
                  <View style={styles.buttonWrapper}>
                    <TouchableOpacity
                      onPress={() => likeButtonHandler(item.id)}
                      style={[styles.blueButton, {width: '48%'}]}>
                      <Text style={styles.whiteText}>Like</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        item.like === 0 ? null : dislikeButtonHandler(item.id);
                      }}
                      style={[styles.redButton, {width: '48%'}]}>
                      <Text style={styles.whiteText}>Dislike</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.lightGrey,
  },
  wrapper: {
    margin: 20,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  blueButton: {
    backgroundColor: Color.blue,
    width: '28%',
    borderColor: Color.grey,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  whiteButton: {
    backgroundColor: Color.white,
    width: '28%',
    borderColor: Color.grey,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  redButton: {
    backgroundColor: Color.red,
    width: '28%',
    borderColor: Color.grey,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  whiteText: {
    color: Color.white,
    fontWeight: 'bold',
    padding: 10,
  },
  blackText: {
    color: Color.blackText,
    fontWeight: 'bold',
    padding: 10,
  },
  contentWrapper: {
    borderWidth: 1,
    borderColor: Color.black,
    marginBottom: 15,
    borderRadius: 20,
    backgroundColor: Color.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  footerContent: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  likeWrapper: {
    borderWidth: 1,
    borderColor: Color.black,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonWrapper: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
  },
});
