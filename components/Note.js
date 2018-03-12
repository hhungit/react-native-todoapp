import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity,StyleSheet,CheckBox, FlatList
} from 'react-native';

class Note extends Component {
    renderItem = ({item,index}) => {
        return (
            <View key ={index} style={styles.note}>
            <View style={styles.checkbox}>
            <TouchableOpacity   >
            <Text> { (item.isFinished) ? `✅` : `🕘` } </Text>
          </TouchableOpacity>
            </View>
            <View  style={{ marginLeft: 15, flex: 1}}> 
                <Text style={styles.notetText}>{item.date}</Text>
                <Text style={styles.notetText}>{item.note}</Text>
            </View>
                <TouchableOpacity  
                style={styles.noteDelete}>
                    <Text style={styles.noteDeleteText}>Del</Text>
                </TouchableOpacity>
            </View>
        )
    }
    render(){
        return(
           <FlatList 
           data = {this.props.val}
           extraData = {this.props}
           keyExtractor = {(item, index) => index}
           renderItem= {this.renderItem}
           />
        );
    }
}
const styles = StyleSheet.create({
 note: {
     position: 'relative',
     padding: 20,
     paddingRight: 100,
     borderBottomColor: '#ededed',
 },
 checkbox:{
    position: 'absolute',
  
    left: 0,
    top: 10,
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  
 },
 noteText: {

     paddingLeft: 10,
     borderLeftWidth: 10,
     borderBottomColor: '#E91E63',
 },
 noteDelete: {
     position: 'absolute',
     justifyContent: 'center',
     alignItems:'center',
     backgroundColor: '#2980b9',
     padding: 10,
     top: 10,
     bottom: 10,
     right: 10,
 },
 noteDeleteText: {
     color: 'white'
 }
})
export default Note;