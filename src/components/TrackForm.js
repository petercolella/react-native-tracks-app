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

  console.log(locations.length);

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
    </>
  );
};

export default TrackForm;
