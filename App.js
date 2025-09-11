import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import SpaceDivider from './components/SpaceDivider'
import GoalInput from './components/GoalInput'


export default function App() {
  const [modalIsVisible, setModalVisibility] = useState(false);
  const [goals, setGoals] = useState([{text: 'test', id:Math.random().toString()},{text: 'test', id: Math.random().toString()}]);
  
  const ShowAddGoalInput = () =>{
    setModalVisibility(true);
  };

  const CancelAddGoal = () => {
    setModalVisibility(false);
  };

  const AddGoal = (enteredText) => {
    if(!NullOrWhitespace(enteredText)) {
      setGoals((currentGoals)=>[...currentGoals, {text: enteredText, id: Math.random().toString()}]);
      setModalVisibility(false);
    }
  };

  const DeleteGoal = (id) =>{
    setGoals((currentGoals) => {
      return currentGoals.filter((goal)=>goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.main_container}>
        <View style={styles.show_add_goal_section}>
          <TouchableOpacity style={styles.button_primary} onPress={ShowAddGoalInput}>
            <Text style={styles.button_text}>Add New Goal</Text>
          </TouchableOpacity>
        </View>
        <GoalInput addGoalFunc={AddGoal} isVisible={modalIsVisible} cancelAction={CancelAddGoal}/>
        <View style={styles.data_list_section}>
          <Text style={{color:'white',fontWeight: 'bold', fontSize: 25,}}>
            List Of Goals
          </Text>
          <SpaceDivider />
          <FlatList 
            data={goals} 
            renderItem={(itemData) => {
              return <GoalItem 
                        text={itemData.item.text} 
                        onDeleteItem={DeleteGoal}
                        id={itemData.item.id} 
                      />;
            }}
            keyExtractor={(item, index) => {return item.id;}} 
            alwaysBounceVertical={true} 
            style={styles.data_scroll_list}
          />
        </View>
      </View>
    </>
  );
};

function NullOrWhitespace(str){
  return !str || str.trim() === "";
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    paddingTop: 60,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom:10,
    backgroundColor: '#1e085a',
  },
  data_list_section:{
    flex: 1,
  },
  data_scroll_list:{
    flex: 1,
    marginBottom:5,
    paddingTop: 10,
  },
  button_primary:{
        backgroundColor: '#7c66dbff',
        height: 46,
        width:'100%',
        flex: 1,
        marginTop:10,
        marginBottom: 10,
        paddingHorizontal:12,
        borderRadius: 8,
        alignItems:'center',
        justifyContent:'center',
        elevation:3,
    },
    button_text:{
        color:'#fff',
        fontSize:25,
        fontWeight: 'bold',
        textAlign:'center',
        
    },
    show_add_goal_section:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 10,
        marginTop: 30,
    },
});
