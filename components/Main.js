/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native';

 
import Note from './Note';
 

export default class Main extends Component<> {
    constructor(props){
            super(props);
            this.state = {
                noteArray: [{
                    'date':'10/02/1990',
                    "note": 'Hung',
                    "isFinished": true
                },
                {
                    'date':'10/02/1992',
                    "note": 'Hung Hoang',
                    "isFinished": true
                }
            ],
                noteText:''
            }
    }
  render() {
     
    return (
        
        
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> TODO APP </Text>
        </View>
        <ScrollView  style={styles.scrollContainer}>
        <Note  val ={this.state.noteArray}  />
         </ScrollView>
         <View style={styles.footer}>
           <TextInput 
           onChangeText={(noteText)=>this.setState({noteText})}
                value={this.state.noteText}
                style={styles.textInput}
                  placeholder='enter note'
                  placeholderTextColor='white'
                  underlineColorAndroid='transparent'
              >
              </TextInput>
           </View>
           <TouchableOpacity style={styles.addButton} 
           onPress={this.addNote.bind(this)}
           >
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
      </View>
       
    );
  }
  addNote(){
    if(this.state.noteText){
        var d = new Date();
        this.state.noteArray.push({
            'date':d.getFullYear() + 
            "/" + (d.getMonth()+1)+
            "/" + d.getDay(),
            'note': this.state.noteText,
            'isFinish': false
        });
        this.setState({ noteArray: this.state.noteArray})
        this.setState({noteText: ''})
    }
    }
    deleteNote(key){
        this.state.noteArray.splice(key,1);
        this.setState({noteArray: this.state.noteArray})
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  } ,
  header: {
    backgroundColor: 'green',
    height: 60,
    justifyContent: "center",
    alignItems: 'center',
    elevation: 1,
    borderBottomWidth:3,
    borderBottomColor: '#ddd'
  },
  headerText: {
    fontSize: 18,
    padding:26
  },
  scrollContainer: {
    flex:1,
    marginBottom: 30,
  },
  footer:{
    position:'absolute',
    bottom: 0,
    left:0,
    right: 0,
    zIndex: 10,
  },
  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
  
  },
  addButton: {
    position: 'absolute',
    zIndex:11,
    right: 20,
    bottom: 20,
    backgroundColor: '#E91E63',
    width: 90,
    height: 90,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8
  },
  addButtonText: {
    color: '#fff',
    fontSize: 20
  }
});
