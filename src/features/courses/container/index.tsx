import * as React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import styles from '../styles/style';
import {NavigationProp} from '@react-navigation/native';
import routes from 'navigation/routes';
import {CourseInterface} from '../types';
import Item from 'features/courses/components/Item';

interface Props {
  navigation: NavigationProp<any>;
}

const COURSE_DATA = [
  {
    _id: 'Test-One-id',
    year: 1,
    section: 'A',
    shift: 'mañana',
    school: 'ES 1',
    subject: 'Biología',
    schedule: [
      {
        day: 'lunes',
        time: '9.30 a 10.30',
      },
      {day: 'martes', time: '9.30 a 10.30'},
    ],
    teacherId: 'Test',
  },
  {
    _id: 'Test-two-id',
    year: 2,
    section: 'A',
    shift: 'mañana',
    school: 'ES 2',
    subject: 'Biología',
    schedule: [
      {
        day: 'lunes',
        time: '9.30 a 10.30',
      },
      {day: 'martes', time: '9.30 a 10.30'},
    ],
    teacherId: 'Test',
  },
  {
    _id: 'Test-tree-id',
    year: 3,
    section: 'A',
    shift: 'tarde',
    school: 'ES 1',
    subject: 'Biología',
    schedule: [
      {
        day: 'lunes',
        time: '9.30 a 10.30',
      },
      {day: 'martes', time: '9.30 a 10.30'},
    ],
    teacherId: 'Test',
  },
];

const Courses: React.FC<Props> = (props: Props) => {
  const {navigation} = props;
  const onPressItemHandler = () => {
    navigation.navigate(routes.COURSE);
  };

  const renderItem = ({item}: {item: CourseInterface}) => (
    <Item
      onPressItem={onPressItemHandler}
      courseInfo={item.year.toString() + ' ' + item.section + ' ' + item.school}
    />
  );
  return (
    <View style={styles.container}>
      <Text>Todos los cursos</Text>
      <View style={styles.listContainer}>
        <Button
          title="Curso 1°A"
          onPress={() => navigation.navigate(routes.COURSE)}
        />
        <Button
          title="Agregar un nuevo curso"
          onPress={() => navigation.navigate(routes.ADD_NEW_COURSE)}
        />
      </View>
      <View>
        <FlatList
          data={COURSE_DATA}
          renderItem={renderItem}
          keyExtractor={item => item._id}
        />
      </View>
    </View>
  );
};

export default Courses;
