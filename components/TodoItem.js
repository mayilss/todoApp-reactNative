import react, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export const TodoItem = (props) => {
    return (
        <View style={styles.item}>
            <Text>{props.item.text}</Text>
            <TouchableOpacity onPress={() => { props.pressHandler(props.item.key) }}>
                <MaterialIcons name='delete' size={18} color='#333' />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: 'dashed'
    }
});