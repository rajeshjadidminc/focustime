
import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import Constants from 'expo-constants';
import { colors } from './utils/colors';
import { Focus } from './features/Focus';
import { Countdown } from './components/CountDown';
import { Timer } from './features/Timer';
import { FocusHistory } from './features/FocusHistory';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history,setHistory] = useState([]);
  
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ?
        (
          <>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history}/>
          </>
        ) : (
          <Timer
            focusSubject={currentSubject}
            onTimerEnd={(subject) => {
              setHistory([...history,subject])
              setCurrentSubject(null)
             }}
            clearSubject={() => setCurrentSubject(null)}
          />
        )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkblue,
  },
});
