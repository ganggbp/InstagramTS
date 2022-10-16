import {Pressable, PressableProps} from 'react-native';
import React, {PropsWithChildren} from 'react';

interface IDoublePressable extends PressableProps {
  onDoublePress?: () => void;
}

const DoublePressable = ({
  onDoublePress = () => {},
  ...props
}: IDoublePressable) => {
  let lastTap = 0;

  const handleDoublePress = () => {
    const now = Date.now();
    if (now - lastTap < 300) {
      onDoublePress();
    }

    lastTap = now;
  };

  return (
    <Pressable onPress={handleDoublePress} {...props}>
      {props.children}
    </Pressable>
  );
};

export default DoublePressable;
