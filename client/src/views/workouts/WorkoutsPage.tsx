import React from 'react';
import {
  View, StyleSheet, TouchableOpacity, Text
} from 'react-native';
import StyledDivider from '../../components/common/Divider';
import { WorkoutStackProps } from '../../navigation/WorkoutParamList';
import WorkoutItem from '../../components/workouts/WorkoutItem';
import { useWorkoutsQuery } from '../../generated/graphql';
import { ActivityIndicator, FAB } from 'react-native-paper';

const WorkoutsPage = ({ navigation }: WorkoutStackProps<'Workouts'>) => {
  const [{ data, fetching, error }] = useWorkoutsQuery({ requestPolicy: "cache-and-network", });

  if (fetching) return <ActivityIndicator animating={true} />;
  if (error) return <Text>Something went wrong.. {error.message}</Text>;

  return (
    <View style={styles.container}>
      { console.log(data)}
      {
        data.workouts.map((workout, index) => (
          <View>
            <TouchableOpacity key={index} onPress={() => navigation.navigate("ExerciseList", { workoutId: workout.id })}>
              <WorkoutItem key={index} title={workout.workoutName} />
            </TouchableOpacity>
            <StyledDivider />
          </View>
        ))}
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => {
          navigation.navigate('AddWorkout')
        }}
      />
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
  fab: {
    backgroundColor: 'tomato',
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default WorkoutsPage;