import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import { colors } from '../utils/colors';
import { spacing } from '../utils/sizes';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.containers}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}
          label="What would you like to focus on????"
          onChangeText={(val) => { setSubject(val) }} />
        <View style={styles.buttton}>
          <RoundedButton title="+" size={60} onPress={() => addSubject(subject)}></RoundedButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containers: {
  },
  buttton: {
    justifyContent: 'center'
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
    color:colors.darkblue,
  },
  inputContainer: {
    padding:spacing.lg,
    flexDirection: 'row',
    justifyContent: 'top',
  },
});
