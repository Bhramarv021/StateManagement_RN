import { StyleSheet, useColorScheme } from 'react-native';
import CounterComponent from './component/CounterComponent';
import CounterProvider, { CounterContext } from './provider/CounterProvider';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <CounterProvider>
        {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
        <CounterComponent />
    </CounterProvider>
  );
}

export default App;
