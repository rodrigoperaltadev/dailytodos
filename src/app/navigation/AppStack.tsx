import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SCREEN_NAMES } from '../../presentation/constants/screenNames'
import EditTaskScreen from '../../presentation/screens/EditTaskScreen'
import FilterSortScreen from '../../presentation/screens/FilterSortScreen'
import TaskListScreen from '../../presentation/screens/TaskListScreen'
import CreateTaskScreen from '../../presentation/screens/CreateTaskScreen'

const Stack = createNativeStackNavigator()

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={SCREEN_NAMES.CREATE_TASK} component={CreateTaskScreen} />
      <Stack.Screen name={SCREEN_NAMES.EDIT_TASK} component={EditTaskScreen} />
      <Stack.Screen name={SCREEN_NAMES.FILTER_SORT} component={FilterSortScreen} />
      <Stack.Screen name={SCREEN_NAMES.TASK_LIST} component={TaskListScreen} />
    </Stack.Navigator>
  )
}

export default AppStack
