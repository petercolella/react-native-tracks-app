import React, { useContext } from 'react';
import { Button, Input } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';

const TrackForm = () => {
  const {
    state: { locations, recording, trackName },
    changeName,
    startRecording,
    stopRecording
  } = useContext(LocationContext);

  return (
    <>
      <Spacer />
      <Input
        placeholder="Enter Track Name"
        onChangeText={changeName}
        value={trackName}
      />
      <Spacer>
        <Button
          title={recording ? 'Stop' : 'Start Recording'}
          onPress={recording ? stopRecording : startRecording}
        />
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <Button title="Save Recording" />
        ) : null}
      </Spacer>
    </>
  );
};

export default TrackForm;
