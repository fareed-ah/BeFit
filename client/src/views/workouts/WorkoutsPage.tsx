import React from 'react';
import {
  View, StyleSheet, TouchableOpacity
} from 'react-native';
import StyledDivider from '../../components/common/Divider';
import { WorkoutStackProps } from '../../navigation/WorkoutParamList';
import WorkoutItem from '../../components/workouts/WorkoutItem';

const WorkoutsPage = ({ navigation }: WorkoutStackProps<'Workouts'>) => {
  const workouts = ["Push", "Pull", "Legs", "Sick Shoulder Exercises"];
  return (
    <View style={styles.container}>
      {workouts.map((workout, index) => (
        <View>
          <TouchableOpacity key={index} onPress={() => navigation.navigate("ExerciseList")}>
            <WorkoutItem key={index} title={workout}></WorkoutItem>
          </TouchableOpacity>
          <StyledDivider />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 8,
    backgroundColor: "#FFF",
  },
});

export default WorkoutsPage;