import PushNotification from 'react-native-push-notification';

PushNotification.createChannel(
  {
    channelId: 'general',
    channelName: 'General Notif',
  },
  created => console.log(`createChannel returned '${created}'`),
);
