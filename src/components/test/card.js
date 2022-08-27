import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Card({item}) {
  return (
    <View style={styles.cardView}>
      <View style={{padding: 10}}>
        <Text style={styles.headingText}>Title</Text>
        <Text style={styles.textSimple}> {item?.title}</Text>
        <Text style={styles.headingText}>Description: </Text>
        <Text style={styles.textSimple}>{item?.description}</Text>
        <Text style={styles.headingText}>Date: </Text>
        <Text style={styles.textSimple}>{item?.createdDate}</Text>
        <Text style={styles.headingText}>Number of Applicants: </Text>
        <Text style={styles.textSimple}>{item?.noApplicants}</Text>
        <Text style={styles.headingText}>Company Information: </Text>
        <Text style={styles.textSimple}>{item?.companyInfo}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardView: {
    borderWidth: 0.1,
    margin: 5,
    height: Dimensions.get('window').height * 0.47,
    width: Dimensions.get('window').width * 0.9,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  headingText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 13,
  },
  textSimple: {
    fontSize: 13,
  },
});
