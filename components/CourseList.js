import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Course from "./Course"
import TermSelector from "./TermSelector"
import CourseSelector from "./CourseSelector"
import { getCourseNumber, getCourseTerm, hasConflict, terms } from "../utils/course"

const termMap = { F: 'Fall', W: 'Winter', S: 'Spring'};

const CourseList = ({courses}) => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');
  const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));
  
  return (
    <ScrollView>
      <TermSelector selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
      <CourseSelector courses={termCourses} />
    </ScrollView>
  );
};

export default CourseList