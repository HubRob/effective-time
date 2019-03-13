import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { withNavigation } from 'react-navigation';

export class FinishAlertModal extends React.Component {
 
  render() {
    return (
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>

          <Text></Text>

        </Modal>

    );
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


