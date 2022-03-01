import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/styleNewCourses';

const NewCourses: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Agregar un nuevo Curso</Text>
    </View>
  );
};

export default NewCourses;
