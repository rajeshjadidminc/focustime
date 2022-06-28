import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import { colors } from '../utils/colors';


export const Timing = ({onChangeTime}) =>{
    return(
        <>
            <View style={styles.containers}>
                <RoundedButton size={75} title='10' onPress={()=>{onChangeTime(10)}}/>
            </View>
            <View style={styles.containers}>
                <RoundedButton size={75} title='15' onPress={()=>{onChangeTime(15)}}/>
            </View>
            <View style={styles.containers}>
                <RoundedButton size={75} title='20' onPress={()=>{onChangeTime(20)}}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    containers: {
        flex: 1,
        alignItems:'center'
    },
});