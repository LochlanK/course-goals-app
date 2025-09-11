import {StyleSheet, TouchableOpacity, Text, View, TextInput, Modal, Image} from 'react-native';
import React, {useState} from 'react';

function GoalInput(props){
    const [goalInputText, setGoalInputText] = useState("");
    function AddGoal(enteredText){
        props.addGoalFunc(enteredText);
        setGoalInputText('');
    }
    return(
        <Modal visible={props.isVisible} animationType='slide' >
            <View style={styles.modal_container}>
                <View style={styles.user_input_section}>
                    <TextInput 
                        style={styles.text_input_primary} 
                        placeholder='Enter A Goal'
                        value={goalInputText}
                        onChangeText={setGoalInputText}
                        onSubmitEditing={() => {AddGoal(goalInputText)}}
                        returnKeyType="send"
                    />
                    <TouchableOpacity style={styles.button_primary}>
                        <Text 
                            style={styles.button_text}
                            onPress={() => {AddGoal(goalInputText)}}
                        >Add Goal!</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cancel_button_container}>
                    <TouchableOpacity style={styles.button_secondary} onPress={props.cancelAction}>
                        <Text style={styles.button_text}>Cancel</Text>
                    </TouchableOpacity>
                    <Image source={require('../assets/favicon.png')} style={styles.logo_image}/>
                </View>
            </View>
        </Modal>
    );

};

const styles = StyleSheet.create({
    modal_container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#471b70ff',
    },
    user_input_section:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingTop: 160,
        paddingLeft: 15,
        paddingRight: 15,
    },
    cancel_button_container:{
        width:'100%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        paddingTop: 30,
        paddingLeft: 15,
        paddingRight: 15,
    },
    button_primary:{
        backgroundColor: '#8633d3ff',
        borderWidth: 2,
        borderColor:'#8633d3ff',
        height: 48,
        paddingVertical: 8,
        paddingHorizontal:12,
        borderRadius: 8,
        elevation:3,
        alignItems:'center',
        justifyContent:'center',
    },
    button_secondary:{
        backgroundColor: '#d33370ff',
        borderWidth: 2,
        borderColor:'#d33370ff',
        height: 48,
        paddingVertical: 8,
        paddingHorizontal:12,
        borderRadius: 8,
        elevation:3,
        alignItems:'center',
        justifyContent:'center',
    },
    button_text:{
        color:'#fff',
        fontSize:14,
        fontWeight: 'bold',
        textAlign:'center',
    },
    text_input_primary:{
        flex:1,
        borderWidth: 3,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        borderRadius: 4,
        marginBottom: 8,
        marginTop:8,
        marginRight: 4,
        paddingLeft:3,
        height:46,
        fontWeight: 'bold',
        fontSize: 14,
        color:'#333333ff',
    },
    logo_image:{
        height: 50,
        width: 50,
        margin: 20,
        borderRadius:15,
    },
});

export default GoalInput;