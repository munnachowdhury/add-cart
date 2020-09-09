import React from 'react';
import './Course.css';

const Course = (props) => {
    const{id, course_name, instructor_name, price} = props.course
    return (
        <div className = 'course-container'>
            <div className ='image'>
                <h1 style ={{backgroundColor:'lightblue', color:'white'}}>image</h1>
            </div>
            <div className = 'content'>
                <h1>{course_name}</h1>
                <h3>Price: {price}</h3>
                <h4>{instructor_name}</h4>
                <button onClick = {() =>props.handleAddCourse(props.course)} className = 'buy-button'>Enroll now</button>
            </div>
        </div>
    );
};

export default Course;