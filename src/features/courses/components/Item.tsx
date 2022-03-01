import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from 'features/courses/styles/style';

const Item: ({
  courseInfo,
  onPressItem,
}: {
  courseInfo: string;
  onPressItem: () => void;
}) => JSX.Element = ({
  courseInfo,
  onPressItem,
}: {
  courseInfo: string;
  onPressItem: () => void;
}) => {
  return (
    <TouchableOpacity style={styles.item} onPress={() => onPressItem()}>
      <Text style={styles.title}>{courseInfo}</Text>
    </TouchableOpacity>
  );
};

export default Item;
