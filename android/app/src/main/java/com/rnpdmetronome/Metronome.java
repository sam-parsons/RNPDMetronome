package com.rnpdmetronome;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import org.puredata.core.PdBase;

import java.util.Map;
import java.util.HashMap;

public class Metronome extends ReactContextBaseJavaModule {

    public Metronome(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    private boolean playing = false;
    private int tempo = 120;

    @Override
    public String getName() {
        return "Metronome";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        return constants;
    }

    @ReactMethod
    public void onSwitchChange() {
        System.out.println("on/off switch pressed");
        if (playing) {
            PdBase.sendFloat("onOff", (float)0.0);
        } else {
            PdBase.sendFloat("onOff", (float)1.0);
        }
        playing = !playing;
    }

    @ReactMethod
    public void initMetronome() {
        System.out.println("metronome initiated");
    }

    @ReactMethod
    public void onTempoChange(int value) {
        System.out.print("tempo is: ");
        System.out.println(value);
        tempo = value;
        PdBase.sendFloat("tempoChange", (float)tempo);
    }
}
