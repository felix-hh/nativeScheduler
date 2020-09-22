import React, {useContext, useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CourseList from "../components/CourseList"
import UserContext from "../components/UserContext"
import CourseEditScreen from "./CourseEditScreen"
import {firebase} from "../utils/firebase"

const schedule = {};
const db = firebase.database().ref();

const fixCourses = json => ({
    ...json,
    courses: Object.values(json.courses)
  });

const Banner = ({ title }) => (
  <Text style={styles.banner}>{ title }</Text>
);

const ScheduleScreen = ({navigation}) => {
    const user = useContext(UserContext);
    const canEdit = user && user.role === 'admin';
  const [schedule, setSchedule] = useState({ title: '', courses: [] });
  const view = (course) => {
    navigation.navigate(canEdit? 'CourseEditScreen' : "CourseDetailScreen", { course });
  };
  const url = 'https://courses.cs.northwestern.edu/394/data/cs-courses.php';

  useEffect(() => {
    db.on('value', snap => {
      if (snap.val()) setSchedule(fixCourses(snap.val()))    ;
    }, error => console.log(error));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Banner title={schedule.title} />
      <CourseList courses={schedule.courses} view={view}/>
    </SafeAreaView>
  );
};  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  banner: {
    color: '#888',
    fontSize: 32,
  },
});

export default ScheduleScreen;