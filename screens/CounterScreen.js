import React from 'react';
import { StyleSheet, Text, View, Image,Alert} from 'react-native';
import CountDown from 'react-native-countdown-component';
import {RedCounter} from '../components/RedCounter';
import {OrangeCounter} from '../components/OrangeCounter';
import {GreenCounter} from '../components/GreenCounter';

export class CounterScreen extends React.Component {
  static navigationOptions = {
    //header: null,
  };
  state = { timer: this.props.navigation.getParam('time')
          };
  
  
  componentDidMount() {
      this.clockCall = setInterval(() => {
          this.decrementClock();
        }, 6000);
  }
  
  componentWillUnmount() {
   clearInterval(this.clockCall);
  }

  
  decrementClock = () => {   
    if(this.state.timer > 0){   
      this.setState((prevstate) => ({ timer: prevstate.timer-1 }));
      }else if(this.state.timer <= 0){
        Alert.alert(
          'Du hast es geschafft!',
          'Willst du den Timer um weitere 30 Min verlängern?',
          [
            {text: 'Nein Danke', 
              onPress: () => this.props.navi.navigate('HomeScreen'), style: 'cancel'},
            {text: 'Ja Bitte', 
            onPress: this.setState({time:30})},
            
          ],
          { cancelable: false }
        )
        clearInterval(this.clockCall);
      }
    } 

  render() {
    const modus = this.props.navigation.getParam('modus');
    
    if(modus == "ungestört"){
      return(
        <RedCounter time={this.state.timer}/>
      )
    } else if(modus == "flexibel"){
      return(
        <OrangeCounter time={this.state.timer}/>
      )
    } else if(modus == "kreativ"){
      return(
        <GreenCounter time={this.state.timer}/>
      )
    }

  }
}

const styles = StyleSheet.create({
  containerRed: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#d54441',
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
