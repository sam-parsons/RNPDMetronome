package com.rnpdmetronome;

import android.os.Bundle;

import com.facebook.react.ReactActivity;

import org.puredata.android.io.AudioParameters;
import org.puredata.android.io.PdAudio;
import org.puredata.android.utils.PdUiDispatcher;
import org.puredata.core.PdBase;
import org.puredata.core.utils.IoUtils;

import java.io.File;
import java.io.IOException;

public class MainActivity extends ReactActivity {

    private PdUiDispatcher dispatcher;

    private void initPD() throws IOException {
        int sampleRate = AudioParameters.suggestSampleRate();
        PdAudio.initAudio(sampleRate, 0, 2, 8, true);
        dispatcher = new PdUiDispatcher();
        PdBase.setReceiver(dispatcher);
    }

    private void loadPDPatch() throws IOException {
        File dir = getFilesDir();
        IoUtils.extractZipResource(getResources().openRawResource(R.raw.simplemetronome),dir,true);
        File pdPatch = new File(dir, "simplemetronome.pd");
        PdBase.openPatch(pdPatch);
    }

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "RNPDMetronome";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        try{
            initPD();
            loadPDPatch();
        }catch (IOException e) {
            finish();
        }
    }

    @Override protected void onResume() {
        super.onResume();
        PdAudio.startAudio(this);
    }

    @Override protected void onPause() {
        super.onResume();
        PdAudio.stopAudio();
    }
}
