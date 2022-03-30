import React from 'react';
import Course from './Course';

const Courses = () => {
    const courses=[
{ 
    name:"web development and Coding", 
    description:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ", 
    price:'100', 
    duration:5, 
    img:'https://i.ibb.co/6YTxwgH/pexels-andrew-neel-3178744.jpg', 
    id:'afdgsdrfg'
}, 
{ 
    name:"web development and Coding", 
    description:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ", 
    price:'100', 
    duration:5, 
    img:'https://i.ibb.co/CBMdCCc/pexels-tranmautritam-326518.jpg', 
    id:'adoinoirg'
}, 
{ 
    name:"web development and Coding", 
    description:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ", 
    price:'100', 
    duration:5, 
    img:'https://i.ibb.co/2dbk2Nz/pexels-pixabay-270637.jpg', 
    id:'groifgnroi'
}, 
{ 
    name:"web development and Coding", 
    description:" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ", 
    price:'100', 
    duration:5, 
    img:'https://i.ibb.co/LrP7VN0/pexels-pixabay-262508.jpg', 
    id:'fgoirnfdnmiow'
}

    ]
    return (
        <div>
            {
                courses.map(data=><Course data={data} _id={data.id}></Course>)
            }
        </div>
    );
};

export default Courses;