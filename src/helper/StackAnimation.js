import { Easing, Animated } from 'react-native';

export default StackAnimation = ({ current, next, inverted, layouts: { screen } }) => {
  const progress = Animated.add(
    current.progress,
    next ? next.progress : 0
  );

  return {
    cardStyle: {
      transform: [
        {
          translateX: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                screen.width, // Start position for forward navigation
                0, // Center position
                screen.width * -1, // End position for backward navigation
              ],
            }),
            inverted
          ),
        },
      ],
    },
  };
};