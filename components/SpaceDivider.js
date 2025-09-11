import {StyleSheet, View} from 'react-native';

function SpaceDivider (){

    return(
        <View style={styles.space_divider_horizontal}></View>
    );

};

const styles = StyleSheet.create({
   space_divider_horizontal:{
    height: 1,
    width: '100%',
    marginVertical:10,
    backgroundColor:'#cccccc'
  },
});

export default SpaceDivider;