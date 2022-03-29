import React from 'react';

const Course = (props) => {
    const {name}=props.data;
    return (
        <div>
            <h3> hello I have done it . </h3>
            < h3>{name} </h3>
        </div>
    );
};

export default Course;