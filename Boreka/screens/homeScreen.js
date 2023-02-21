import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Boreka Task"
        onPress={() => navigation.navigate('Task')}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  
    
})