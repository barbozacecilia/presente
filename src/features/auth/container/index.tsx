import React, {useEffect, useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Auth0 from 'react-native-auth0';
import {NavigationProp} from '@react-navigation/native';
import routes from 'navigation/routes';

interface Props {
  navigation: NavigationProp<any>;
}

const Auth = ({navigation}: Props) => {
  const [token, setToken] = useState<string | null>(null);
  const [courses, setCourses] = useState(null);
  const isDarkMode = useColorScheme() === 'dark';
  const auth0 = new Auth0({
    domain: 'dev-5ppznxzo.us.auth0.com',
    clientId: 'qnkCpoeukkSH6dA8F3OGsKCC48EjGy8v',
  });

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  useEffect(() => {
    if (token !== null) {
      fetch('http://localhost:3000/api/v1/courses', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then(response => {
          console.log('token', token);
          console.log('response', response);
          return response.json();
        })
        .then(responseJson => {
          console.log('responseJson', responseJson);
          setCourses(responseJson);
        })
        .catch(e => {
          console.log('e.message', e.message);
          console.log('e.message', e.response);
        });
    }
  }, [token]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'violet',
        }}>
        <TouchableOpacity
          onPress={() => {
            auth0.webAuth
              .authorize({
                scope: 'openid profile email',
                audience: 'https://tomolista.com/api',
              })
              .then(credentials => {
                // Successfully authenticated
                // Store the accessToken
                setToken(credentials.accessToken);
                navigation.navigate(routes.COURSES);
              })
              .catch(error => console.log(error));
          }}>
          <Text>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            auth0.webAuth
              .clearSession({})
              .then(success => {
                Alert.alert('Logged out!');
              })
              .catch(error => {
                console.log('Log out cancelled');
              });
          }}>
          <Text>Log out</Text>
        </TouchableOpacity>
        <ScrollView>
          {courses && <Text>{JSON.stringify(courses, null, 2)}</Text>}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Auth;
