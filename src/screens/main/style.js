const {StyleSheet, Dimensions} = require('react-native');

export default StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  flatListView: {
    height: Dimensions.get('window').height * 0.8,
  },
  headingText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 11,
  },
});
