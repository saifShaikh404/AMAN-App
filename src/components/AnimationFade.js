import React, { useEffect } from 'react';
import { Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useFocusEffect } from '@react-navigation/native';


const AnimationFade = ({ duration, delay, children }) => {
    const opacity = useSharedValue(0);
    const translateY = useSharedValue(20);

    useEffect(() => {
        opacity.value = withTiming(1, { duration });
        translateY.value = withTiming(0, { duration });
        console.log('dismount')

        return () => {
            opacity.value = withTiming(0);
            translateY.value = withTiming(20);
            console.log('dismount')
        }

    }, []);

    const animatedStyle = useAnimatedStyle(() => {
        return {
        opacity: opacity.value,
        transform: [{ translateY: translateY.value }],
        };
    });

    return (
        <Animated.View style={animatedStyle}>
        {children}
        </Animated.View>
    );
};

export default AnimationFade