/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Courses from 'features/courses/container';
import NewCourses from 'features/new-courses/container';
import Course from 'features/course/container';
import routes from 'navigation/routes';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cursos">
        <Stack.Screen name={routes.COURSES} component={Courses} />
        <Stack.Screen name={routes.COURSE} component={Course} />
        <Stack.Screen name={routes.ADD_NEW_COURSE} component={NewCourses} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
