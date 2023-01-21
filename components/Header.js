import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Text style={styles.headerText}>TODO</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>|</Text>
        <TouchableOpacity>
            <Text style={styles.headerText}>DONE</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        // width: 414,
        height: 121,
        backgroundColor: "#9395D3",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    headerText: {
        marginRight: 20,
        color: '#DCDADA',
        fontSize: 32
    }
})

export default Header