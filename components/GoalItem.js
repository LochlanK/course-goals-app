import {StyleSheet, TouchableOpacity, Text} from 'react-native';

function GoalItem(props) {

    return(
        <TouchableOpacity 
            style={styles.goal_list_item} 
            onPress={props.onDeleteItem.bind(this, props.id)}>
                <Text>
                    {String(props.text)}
                </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  goal_list_item:{
    height: 38,
    width:'95%',
    backgroundColor:'#eeeeee',
    borderSize: 1,
    borderColor:'#cccccc',
    padding:10,
    borderRadius:6,
    marginBottom:15,
    marginHorizontal: 8,
    //iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    //Android
    elevate:3,
  },
});

export default GoalItem;