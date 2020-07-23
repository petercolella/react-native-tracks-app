import { useEffect, useState } from 'react';
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from 'expo-location';

export default (tracking, cb) => {
  const [err, setErr] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();
      if (!granted) {
        throw new Error('Location permission not granted');
      }
      const subscriber = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        },
        cb
      );
      setSubscriber(subscriber);
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    if (tracking) {
      startWatching();
    } else {
      subscriber.remove();
      setSubscriber(null);
    }
  }, [tracking]);

  return [err];
};
