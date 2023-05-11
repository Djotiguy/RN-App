import { useState } from 'react';
import { StyleSheet, View, FlatList, Button,} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startGoalHandler(){
    setModalIsVisible(true);
  }

  function endGoalHandler(){
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      { text : enteredGoalText, id: Math.random().toString()}
  ]);
  endGoalHandler();
  };

  function deleteGoalHandler(id) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  }

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.appContainer}>
      <Button 
        title= "Ajouter une nouvelle tâche" 
        color="#E9B949" 
        onPress={startGoalHandler} 
      />
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList 
        data= {courseGoals} 
        renderItem={(itemData) => {
          return <GoalItem 
          text={itemData.item.text} 
          id={itemData.item.id}
          onDeleteItem={deleteGoalHandler} />;
        }} 
        keyExtractor={(item, index ) => {
          return item.id
        } }
        alwaysBounceVertical={false}/>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer : {
    flex: 1,
    paddingTop : 50,
    paddingHorizontal : 16,
    backgroundColor : '#5e0acc'
  },
  goalsContainer : {
    flex: 5,
  }, 
});