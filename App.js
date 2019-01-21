import React, { PureComponent } from 'react';
import {
  Button, Text, Slider, View, NativeModules,
} from 'react-native';
import styles from './App.style';

// // const PDInterface = NativeModules.PDInterface;

const { Metronome } = NativeModules;

export default class App extends PureComponent {
  state = {
    tempo: 120,
    playing: false
  }

  componentWillMount() {
    // console.log(PDInterface);
  }

  componentDidMount() {
    console.log(Metronome);
    Metronome.initMetronome();
    // PDInterface.initMetronome();
  }

  pressPlayStop = () => {
    console.log("play button pressed");
    Metronome.onSwitchChange();
    // PDInterface.onSwitchChange();
    const temp = !this.state.playing;
    this.setState({playing: temp}, () => {
      console.log(this.state.playing);
    });
  }

  // ?? Should NM.M.onTempoChange() be inside the callback of setState()?
  onTempoChange(value) {
    this.setState({ tempo: value }, () => {
      console.log(`tempo: ${value}`);
      // PDInterface.onTempoChange(value);
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
