import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Courses from 'features/courses/container';
import NewCourses from 'features/courses/components/NewCourses';
import Course from 'features/courses/components/Course';
import routes from 'navigation/routes';
import DayList from 'features/take-list/component/DayList';
import StudentsList from 'features/students/components/StudentsList';
import NewStudent from 'features/students/components/NewStudent';
import TakeList from 'features/take-list/container/TakeList';
import Auth from 'features/auth/container';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routes.LOG_IN}
        screenOptions={{
          title: 'Todos los cursos',
          headerStyle: {backgroundColor: 'pink'},
          headerTintColor: '#ffff',
          headerTitleStyle: {fontWeight: 'bold'},
        }}>
        <Stack.Screen name={routes.LOG_IN} component={Auth} />
        <Stack.Screen name={routes.COURSES} component={Courses} />
        <Stack.Screen name={routes.COURSE} component={Course} />
        <Stack.Screen name={routes.ADD_NEW_COURSE} component={NewCourses} />
        <Stack.Screen name={routes.STUDENTS_LIST} component={StudentsList} />
        <Stack.Screen name={routes.ADD_NEW_STUDENT} component={NewStudent} />
        <Stack.Screen name={routes.DAY_LIST} component={DayList} />
        <Stack.Screen name={routes.TAKE_LIST} component={TakeList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
