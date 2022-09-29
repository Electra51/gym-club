import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='Question-answer'>
            <div className='Question-1'>
                <h3>Question 01: How Does React Work?</h3>
                <p>Answer: React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process.It creating web applications faster.</p>

            </div>
            <div className='Question-2'>
            <h3>Question 02: What are the differences between props and state?</h3>
                <p>Answer: i.Props are used to pass data from one component to another.On the other hand states are used to pass data within the component only.
                    ii.Props can not be modified.But State can be modified.
                    iii.Props are read-only.But State is both read and write.
                </p>

            </div>
            <div className='Question-3'>
            <h3>Question 03: What does useEffect do? </h3>
                <p>Answer: UseEffect is a tool that lets us interact with the outside world but not affect the rendering or performance of the component.The useEffect Hook allows you to perform side effects in your components.Some examples of side effects are: fetching data, directly updating the DOM, and timers.useEffect accepts two arguments. The second argument is optional. </p>

            </div>
        </div>
    );
};

export default Question;