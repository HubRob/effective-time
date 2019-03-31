import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Header} from './components/Header';
import {FlatButton} from './components/FlatButton';
import {CounterScreen} from './screens/CounterScreen';
import { Font } from 'expo';


import { createStackNavigator, createAppContainer } from "react-navigation";
import { withNavigation } from 'react-navigation';
class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null,
  };

  state = {
    fontLoaded: false, 
    redFlex:4,
    orangeFlex:1,
    greenFlex:1
  };

  _changeRedFlex(){
    this.setState({redFlex:4})
    this.setState({orangeFlex:1})
    this.setState({greenFlex:1})
  }

  _changeOrangeFlex(){
    this.setState({redFlex:1})
    this.setState({orangeFlex:4})
    this.setState({greenFlex:1})
  }
 
  _changeGreenFlex(){
    this.setState({redFlex:1})
    this.setState({orangeFlex:1})
    this.setState({greenFlex:4})
  }

  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'ubuntu-bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
    });

    this.setState({fontLoaded: true});
  }

  render() {
    return (
      <View style={styles.container}>
      {
        this.state.fontLoaded ? (
          <View style={{flex:1}}>
              <FlatButton   
                color="#d54441" 
                modus="ungestört" 
                flex={this.state.redFlex} changeFlex={()=>this._changeRedFlex()}
                navi={this.props.navigation}
              />

              <FlatButton 
                color="#f0a72e" 
                modus="flexibel" 
                flex={this.state.orangeFlex} 
                changeFlex={()=>this._changeOrangeFlex()}
                navigateToCounterScreen={()=>this.props.navigation.navigate('CounterScreen')}
                navi={this.props.navigation}
              />

              <FlatButton color="#47b095" 
                modus="kreativ" 
                flex={this.state.greenFlex} 
                changeFlex={()=>this._changeGreenFlex()}
                navigateToCounterScreen={()=>this.props.navigation.navigate('CounterScreen')}
                navi={this.props.navigation}
              />
            </View>
          ) : null
        }
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  CounterScreen: {
    screen: CounterScreen
  },
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#48577b',
    color: '#fff',
  },
  
  main: {
    flex: 4,
    backgroundColor: '#48577b',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
