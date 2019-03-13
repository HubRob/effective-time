import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';


export class OrangeCounter extends React.Component {
  render() {
    return (
        <View style={styles.containerRed}>
            <Image
            source={require('../img/mute.png')}
            style={styles.iconMain}
            />
            <View style={styles.firstTimerLineBox}>
            <Text style={styles.firstTimerLine}>
                Noch 
                <Text style={styles.timerTime}> {this.props.time} Min</Text>
            </Text>
            </View>
            <View style={styles.firstTimerLineBox}>
            <Text style={styles.secondTimerLine}>
                beschäftigt aber für smalltalk zu haben
            </Text>
            </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
    containerRed: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-start',
      backgroundColor: '#e6a94a',
      color: '#fff',
      fontFamily: 'ubuntu-bold',
  
    },
  
    iconMain:{
      width:200,
      resizeMode: 'contain',
      alignSelf: 'flex-start',
      marginStart: -5,
      marginVertical: 50,
    },
  
    firstTimerLineBox: {
      flexDirection: 'row',
      paddingHorizontal: 20
    },
  
    firstTimerLine:{
      fontFamily: 'ubuntu-bold',
      fontSize: 40  ,
      color: '#fff',
      zIndex: 1,
      opacity: 0.5,
    },
  
   secondTimerLine:{
      fontFamily: 'ubuntu-bold',
      fontSize: 50  ,
      color: '#fff',
      zIndex: 1,
    },
    timerTime:{
      fontFamily: 'ubuntu-bold',
      fontSize: 80  ,
      color: '#fff',
      zIndex: 1,
      marginStart: 5,
    },
  
  });
  