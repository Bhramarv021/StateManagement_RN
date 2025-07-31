import { SafeAreaView, useColorScheme } from 'react-native';
import CounterComponent from './component/CounterComponent';
import CounterProvider, { CounterContext } from './provider/CounterProvider';
import ThemeProvider from './provider/ThemeProvider';
import AppController from './component/AppController';
import { Provider } from 'react-redux';
import store from './component/store';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    // <CounterProvider>
    //     {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
    //     <CounterComponent />
    // </CounterProvider>
    // <ThemeProvider>
    //   <AppController />
    // </ThemeProvider>

    //store usage
    <Provider store={store}>
      <AppController />
    </Provider>
  );
}

export default App;
