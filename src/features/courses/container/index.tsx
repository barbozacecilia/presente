import * as React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import styles from '../styles/style';
import {NavigationProp} from '@react-navigation/native';
import routes from 'navigation/routes';

interface Props {
  navigation: NavigationProp<any>;
}

const COURSE_DATA = [
  {
    id: 'test1',
    title: 'Curso 1',
  },
  {
    id: 'test2',
    title: 'Curso 2',
  },
  {
    id: 'test3',
    title: 'Curso 3',
  },
];
const Item = ({title}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const Courses: React.FC<Props> = (props: Props) => {
  const {navigation} = props;
  const renderItem = ({item}) => <Item title={item.title} />;
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
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Courses;
