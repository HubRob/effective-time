import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export class Header extends React.Component {
  render() {
    return (
        <View style={styles.main}>
          <TouchableHighlight onPress={()=>alert('hmm')}>
          <Text style={{ fontFamily: 'ubuntu-bold', fontSize: 50, color: '#fff' }}>Wie willst du arbeiten</Text>
          </TouchableHighlight>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#48577b',
    color: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  main: {
    flex: 4,
    backgroundColor: '#48577b',
    alignItems: 'center',
    justifyContent: 'center',
  },

  menue:{
    color: '#fff',
  },

  menue1: {
    flex: 1,
    backgroundColor: '#d54441',
    alignItems: 'center',
    justifyContent: 'center',
  },

  menue2: {
    flex: 1,
    backgroundColor: '#f0a72e',
    alignItems: 'center',
    justifyContent: 'center',
  },

  menue3: {
    flex: 1,
    backgroundColor: '#47b095',
    alignItems: 'center',
    justifyContent: 'center',
  }

});
