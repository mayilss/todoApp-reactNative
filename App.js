import react, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { AddTodo } from './components/AddTodo';
import { Header } from './components/Header'
import { TodoItem } from './components/TodoItem';
import { Sandbox } from './components/Sandbox';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'todo app', key: '2' },
    { text: 'date', key: '3' },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    if (text.length < 3) {
      Alert.alert('OOPS!', 'Todos must be over 3 chars long.', [{ text: 'Understood', onPress: () => console.log('alert closed') }])
    }
    setTodos((prevTodos) => {
      return ([
        { text: text, key: Math.random() },
        ...prevTodos,
      ])
    })
  }

  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()} >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>

    // <Sandbox />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    marginTop: 20,
    flex: 1
  }
});
