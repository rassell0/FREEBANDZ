import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PlutoColletion from './components/PlutoCollection';
import RootContainer from './components/RootContainer';

export default function App() {
  return (
    <View style={styles.container}>
    <RootContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});
