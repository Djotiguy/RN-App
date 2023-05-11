import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native';
import { useState } from 'react';

function GoalInput(props) {
    // Initialisation de nos variables
    const [enteredGoalText, setEnteredGoalText] = useState('');
    // Fonction qui 
    function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
    };

    function addGoalHandler(){
      props.onAddGoal(enteredGoalText);
      setEnteredGoalText('');
    }
    
    return (
      <Modal visible={props.visible} animationType='slide' >
        <View style={styles.inputcontainer}>
          <Image style={styles.image} source={require("../assets/images/goal.png")} />
        <TextInput 
        style={styles.textInput} 
        placeholder='Votre tâche' 
        onChangeText={goalInputHandler} 
        value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>

          <View style={styles.button}>
            <Button title='Ajouter'onPress={addGoalHandler} color={"#E9B949"} />
          </View>

          <View style={styles.button}>
            <Button title='Annuler' onPress={props.onCancel} color={"#CF1124"}/>
          </View>

        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
    inputcontainer : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        padding : 16,
        backgroundColor: '#5e0acc',
      }, 
    image :{
      width : 100,
      height: 100,
      margin: 20,
    },
    textInput : {
        borderWidth : 1,
        borderColor : "#102A43",
        backgroundColor: "#E9B949", 
        color : "#120438" ,
        borderRadius : 6,
        width : '100%',
        padding : 8,
    },
    buttonContainer : {
      marginTop : 16,
      flexDirection : "row"
    }, 
    button : {
      width : 100,
      marginHorizontal : 8
    }
});