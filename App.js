import React, { PureComponent } from 'react';
import {
  Button, Text, Slider, View,
} from 'react-native';
import styles from './App.style';

export default class App extends PureComponent {
  state = {
    tempo: 120,
    meter: 4,
    eighthNoteVolume: 0,
    accentedMIDINote: 92,
  };

  componentWillMount() {
    // Metronome.prepareToPlay();
  }

  componentDidMount() {
    // console.log(Metronome);
  }

  pressPlay = () => {
    // Metronome.pressPlay();
  };

  pressStop = () => {
    // Metronome.pressStop();
  };

  // ?? Should NM.M.onTempoChange() be inside the callback of setState()?
  onTempoChange(value) {
    this.setState({ tempo: value }, () => {
      console.log(`tempo: ${value}`);
      // Metronome.onTempoChange(value);
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
        title='Play'
        onPress={ this.pressPlay }
      />
      <Button
        title='Stop'
        onPress={ this.pressStop }
      />
    </View>
  );
}
