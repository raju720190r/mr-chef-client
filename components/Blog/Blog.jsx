import React from 'react';

const Blog = () => {
    const bgColor = {

        backgroundColor: '#adb2b3'
    }
    return (
        <div className='mt-5'>

            <div style={bgColor} className='mb-3 p-3 rounded border border-secondary'>
                <h2 className='text-3xl'>1.Differences between uncontrolled and controlled components</h2>
                <p>Ans: In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
            </div>
            <div style={bgColor} className='mb-3 .bg-secondary.bg-gradient p-3 rounded '>
                <h2 className='text-3xl'>2. How to validate React props using PropTypes?</h2>
                <p>Ans: PropTypes is a way to validate the props passed to a React component. It's a type checking library that can help catch common bugs and make your code more robust. Here's how to use PropTypes in a React component:<br />
                    1.Import PropTypes at the top of your component file.<br />
                    2.Define the PropTypes for your component. This should be done outside of the component class, as a static property</p>
            </div>
            <div style={bgColor} className='mb-3 .bg-secondary.bg-gradient p-3 rounded '>
                <h2 className='text-3xl'>3. Difference between nodejs and express js.</h2>
                <p>Ans:NodeJS is an event-driven, non-blocking I/O model using JavaScript as its main language. It helps to build scalable network applications. Express is a minimal and flexible Node. js web application framework that provides a robust set of features for web and mobile applications</p>
            </div>
            <div style={bgColor} className='mb-3 .bg-secondary.bg-gradient p-3 rounded '>
                <h2 className='text-3xl'>4.What is a custom hook, and why will you create a custom hook?</h2>
                <p>Ans: Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
            </div>
        </div>
    );
};

export default Blog;