import React, { useContext } from 'react';
import { Button, Input } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
  const {
    state: { locations, recording, name },
    changeName,
    startRecording,
    stopRecording
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer />
      <Input
        placeholder="Enter Track Name"
        onChangeText={changeName}
        value={name}
      />
      <Spacer>
        <Button
          title={recording ? 'Stop' : 'Start Recording'}
          onPress={recording ? stopRecording : startRecording}
        />
      </Spacer>
      <Spacer>
        {!recording && locations.length ? (
          <Button title="Save Recording" onPress={saveTrack} />
        ) : null}
      </Spacer>
    </>
  );
};

export default TrackForm;
