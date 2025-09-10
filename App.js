import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity,TextInput } from 'react-native';


export default function App() {
  const [goalInputText, setGoalInputText] = useState("");
  const [goals, setGoals] = useState(['test','test']);
  
  const AddGoal = () => {
    if(!NullOrWhitespace(goalInputText)) {
      setGoals([...goals, goalInputText]);
      setGoalInputText("");
    }
  };

  return (
    <View style={styles.main_container}>
      <View style={styles.user_input_section}>
        <TextInput 
          style={styles.text_input_primary} 
          placeholder='Enter A Goal'
          value={goalInputText}
          onChangeText={setGoalInputText}
          onSubmitEditing={AddGoal}
          returnKeyType="send"
        />
        <TouchableOpacity style={styles.button_primary}>
          <Text 
            style={styles.button_text}
            onPress={AddGoal}
          >Add Goal!</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.data_list_section}>
        <Text>List Of Goals</Text>
        <View style={styles.space_divider_horizontal}></View>
        <PrintVisualGoalList goalList={goals} />
      </ScrollView>
    </View>
  );

}

function NullOrWhitespace(str){
  return !str || str.trim() === "";
}

function PrintVisualGoalList({ goalList }) {
  return goalList.map((goal, index) => ( 
    <Text key={index} style={styles.goal_list_item}>
      {String(goal)}
    </Text>
  ));
}


const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    paddingTop: 60,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom:10,
    backgroundColor: '#fff',
  },
  button_primary:{
    backgroundColor: '#2618a7ff',
    height: 38,
    paddingVertical: 8,
    paddingHorizontal:12,
    borderRadius: 8,
    elevation:3,
  },
  button_text:{
    color:'#fff',
    fontSize:14,
    fontWeight: 'bold',
    textAlign:'center',
  },
  user_input_section:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginBottom: 10,
    marginTop: 20,
  },
  data_list_section:{
    flex: 1,
  },
  text_input_primary:{
    flex:1,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    marginBottom: 8,
    marginTop:8,
    marginRight: 4,
    paddingLeft:3,
    height:38,
    fontWeight: 'bold',
    fontSize: 14,
  },
  goal_list_item:{
    height: 38,
    width:'95%',
    backgroundColor:'#eeeeee',
    borderSize: 1,
    borderColor:'#cccccc',
    padding:10,
    borderRadius:6,
    marginTop:10,
    marginHorizontal: 8,
    //iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    //Android
    elevate:3,
  },
  space_divider_horizontal:{
    height: 1,
    width: '100%',
    marginVertical:10,
    backgroundColor:'#cccccc'
  }

});
