import React, { useState } from "react";
import { useKeepAwake } from 'expo-keep-awake';
import { StyleSheet, Text, View } from "react-native";
import { ProgressBar } from "react-native-paper";
import { Countdown } from "../components/CountDown";
import { RoundedButton } from "../components/RoundedButton";
import { colors } from "../utils/colors";
import { spacing } from "../utils/sizes";
import { Timing } from "./Timing";


export const Timer = ({ focusSubject,clearSubject,onTimerEnd }) => {
    useKeepAwake()
    const [isStarted, setIsStarted] = useState(false);
    const [progress,setProgress] = useState(0)
    const [minutes,setMinutes] = useState(0.1)

    const onEnd = (reset)=>{
        setIsStarted(false);
        setProgress(1);
        reset();
        onTimerEnd(focusSubject)
    }

    return (
        <View style={style.container}>
            <View style={style.countDown}>
                <Countdown
                    minutes={minutes}
                    isPaused={!isStarted}
                    onProgress={setProgress}
                    onEnd={onEnd} />

                <View style={{ paddingTop: spacing.xl }}>
                    <Text style={style.title}>Focusing On:</Text>
                    <Text style={style.task}>{focusSubject}</Text>
                </View>
            </View>
            <View style={{paddingTop:spacing.xxl}}>
                <ProgressBar
                    progress={progress}
                    style={spacing.sm}
                    color={colors.progressbar}/>
            </View>
            <View style={style.timingWrapper}>
                <Timing onChangeTime={setMinutes}/>
            </View>
            <View style={style.buttonContainer}>
                {!isStarted && (<RoundedButton title="Start" onPress={() => setIsStarted(true)} />
                )}
                {isStarted && (<RoundedButton title="Pause" onPress={() => setIsStarted(false)} />
                )}
            </View>
            <View style={style.clearSubjectWrapper}>
                <RoundedButton size={30} title="-" onPress={clearSubject} />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    countDown: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    timingWrapper: {
        flex: 0.1,
        flexDirection:'row',
        paddingTop:spacing.xxl,
    },
    buttonContainer: {
        flex: 0.3,
        flexDirection:"row",
        padding:spacing.md,
        alignItems: 'center',
        justifyContent: 'center',
    },
    clearSubjectWrapper: {
        flex: 0.3,
        flexDirection:"row",
        justifyContent: 'center',
    },
    title: {
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    task: {
        color: colors.white,
        fontWeight: 'normal',
        textAlign: 'center',
    }
})