import React from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Slider,TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';


export class FlatButton extends React.Component {
  state={
    value:'0'
  }
  render() {
    return (
      <TouchableWithoutFeedback 
        style={{flex:1}}
        onPress={this.props.changeFlex}
      >
        <View style={{
          backgroundColor: this.props.color,
          flex: this.props.flex,
          alignItems: 'center',
          justifyContent: 'center',
          }}>
          
          <Image
            source={require('../img/mute.png')}
            style={styles.icons}
          />
             {this.displayJsxMessage()}
        </View>
      </TouchableWithoutFeedback>
    );
  }


  displayJsxMessage() {
    if (this.props.flex == 4) {
        return (
          <View style={styles.sliderBox}>
            <Text style={styles.sliderText}>{this.state.value}min</Text>
            <Text style={styles.arbeitsmodus}>{this.props.modus} arbeiten</Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={60}
              step={1}
              value={this.state.value}
              minimumTrackTintColor='#ffffff8A'
              maximumTrackTintColor='#fff'
              thumbTintColor='#1a9274'
              onValueChange={value => this.setState({ value })}
            />
            
            <TouchableHighlight
              onPress={() => { this.props.navi.navigate('CounterScreen',
                {time: this.state.value,
                  modus: this.props.modus
                } ) }}
            >
                <Text style={styles.start}>
                Los gehts
                </Text>
            </TouchableHighlight>
          
          </View>
          )
    } else if(this.props.flex == 1) {
      return (<Text style={styles.menue}>{this.props.modus}</Text>)
    }
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#48577b',
    color: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  menue:{
    fontFamily: 'ubuntu-bold',
    fontSize: 25  ,
    color: '#fff',
    zIndex: 1
  },

  arbeitsmodus:{
    fontFamily: 'ubuntu-bold',
    fontSize: 18  ,
    color: '#fff',
    zIndex: 1
  },

  icons:{
    width:60,
    resizeMode: 'contain',
    zIndex: 0, 
    position: 'absolute',
    alignSelf: 'flex-start',
  },

  sliderBox:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hiddenView:{

  },
  sliderText:{
    fontSize: 100,
    color: '#fff',
    marginTop: 'auto',
    },

  slider: {
    width: 300,
    marginTop: 'auto',
    marginBottom: 50,
  },

  start:{
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 15, 
    marginBottom: 20,
    color: '#fff',
    fontSize: 20
  }
});


