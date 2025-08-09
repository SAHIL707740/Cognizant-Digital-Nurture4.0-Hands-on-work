import React from 'react';

function CourseDetails() {
  const courses = [
    { name: 'React for Beginners', duration: '4 weeks' },
    { name: 'Advanced JavaScript', duration: '6 weeks' }
  ];

  return (
    <div>
      <h2>Course Details</h2>
      {courses.map((course, index) => (
        <div key={index}>
          <p><strong>{course.name}</strong> - {course.duration}</p>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;