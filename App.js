import React, {Component, PureComponent} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import dashboardList from './src/components/dashboard/dashboardList';
import DashBoardDetail from './src/components/dashboardDetail/dashboardDetail';

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/reducers/rootReducer';

import {createStackNavigator} from '@react-navigation/stack';

const store = createStore(rootReducer, applyMiddleware(thunk));

const Stack = createStackNavigator();
function Route() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="dashboardList">
          <Stack.Screen
            name="dashboardList"
            component={dashboardList}
            options={{
              headerStyle: {elevation: 5, backgroundColor: 'black'},
              cardStyle: {backgroundColor: '#454545'},
              title: 'Please search Places',
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name="DashboardDetail"
            component={DashBoardDetail}
            options={{
              headerStyle: {elevation: 5, backgroundColor: '#8A8A8A'},
              cardStyle: {backgroundColor: '#454545'},
              title: 'Details',
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Route;
