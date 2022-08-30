import PushNotification from 'react-native-push-notification';

PushNotification.configure({
  onRegister: token => {
    console.log('TOKEN:', token);
  },
  onNotification: notification => {
    console.log('Notifocation:', notification);
    notification.finish(() => {
      console.log('Finish');
    });
  },
});

PushNotification.createChannel(
  {
    channelId: 'general',
    channelName: 'General Notif',
  },
  created => console.log(`createChannel returned '${created}'`),
);
