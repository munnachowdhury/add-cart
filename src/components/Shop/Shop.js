import React, { useState } from 'react'
import fakeData from '../../fakeData/data.json'
import './Shop.css'
import Course from '../Course/Course';
import Cart from '../Cart/Cart';

const Shop = () => {
    const first15 = fakeData.slice(0, 15);
    const[courses, setData] = useState(first15);
    const[enrolled, setEnrolled] = useState([]);

    const handleAddCourse = (Enrolled)=>{
        const newEnrolled = [...enrolled, Enrolled]
        setEnrolled(newEnrolled);
    }
    return (
        <div className = 'shop-container'>
            <div>
                {
                    courses.map(course => <Course handleAddCourse = {handleAddCourse} course = {course}></Course>)
                }      
            </div>

            <div className = 'cart'>
                <Cart course = {enrolled}></Cart>
            </div>
        </div>
    );
};

export default Shop;