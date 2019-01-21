import React, { PureComponent } from 'react';
import {
  Button, Text, Slider, View, NativeModules, Platform,
} from 'react-native';
import styles from './App.style';

// ?? How to separate the constant declaration based on platform??

// Uncomment this if building ios
const Metronome = NativeModules.PDInterface;

// Uncomment this if building android
// let { Metronome } = NativeModules;

if (Platform.OS === 'ios') {
  console.log("ios");
  // const Metronome = NativeModules.PDInterface;
} else {
  console.log("android");
  // const { Metronome } = NativeModules;
}

export default class App extends PureComponent {
  state = {
    tempo: 120,
    playing: false
  }

  componentDidMount() {
    console.log(Metronome);
    Metronome.initMetronome();
  }

  pressPlayStop = () => {
    console.log("play button pressed");
    Metronome.onSwitchChange();
    const temp = !this.state.playing;
    this.setState({playing: temp}, () => {
      console.log(this.state.playing);
    });
  }

  // ?? Should NM.M.onTempoChange() be inside the callback of setState()?
  onTempoChange(value) {
    this.setState({ tempo: value }, () => {
      console.log(`tempo: ${value}`);
      Metronome.onTempoChange(value);
    });
  }

  render = () => (
    <View style={ styles.container } nativeID='main'>
      <Text>Tempo: { this.state.tempo }</Text>
      <Slider
        style={ styles.slider }
        minimumValue={ 30 }
        maximumValue={ 300 }
        step={ 1 }
        value={ this.state.tempo }
        onValueChange={ (value) => this.onTempoChange(value) }
      />
      <Button
        title = { this.state.playing ? "Stop" : "Play" }
        onPress={ () => this.pressPlayStop() }
      >
      </Button>
    </View>
  );
}
