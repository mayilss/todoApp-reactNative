import react, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TextInput } from 'react-native';

export const AddTodo = (props) => {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val)
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='New todo...'
                onChangeText={changeHandler}
            />
            {/* <Button title='Add todo' onPress={() => props.submitHandler(text)} color='coral'/> */}
            <Button title='Add todo' onPress={() => props.submitHandler(text)} color='coral'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10, 
        paddingHorizontal: 8,
        paddingHorizontal: 6,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    }
})