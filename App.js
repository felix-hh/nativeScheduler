import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CourseList from "./components/CourseList"
  
const schedule = {};

// const getCourseNumber = course => (
//   course.id.slice(1)
// );

// const Course = ({ course }) => (
//   <TouchableOpacity style={styles.courseButton}>
//     <Text style={styles.courseText}>
//       {`CS ${getCourseNumber(course)}\n${course.meets}`}
//     </Text>
//   </TouchableOpacity>
// );

const Banner = ({ title }) => (
  <Text style={styles.banner}>{ title }</Text>
);

const App = () => {
  const [schedule, setSchedule] = useState({ title: '', courses: [] });
  
  const url = 'https://courses.cs.northwestern.edu/394/data/cs-courses.php';

  useEffect(() => {
    const fetchSchedule =  async () => {
      const response = await fetch(url);
      if (!response.ok) throw response;
      const json = await response.json();
      setSchedule(json);
    }
    fetchSchedule();
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <Banner title={schedule.title} />
      <CourseList courses={schedule.courses} />
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

export default App;