import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import Main from './src/screens/Main';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  React.useEffect(() => {
    RNBootSplash.hide({fade: true});
  },[]);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default App;
