import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (<><h1>{props.course}</h1></>)
}

const Total = (props) => {
    const total = props.parts.reduce((total, {exercises}) => total + exercises, 0)
    return (<>
                <p>Number of exercises {total}</p>
            </>)
}

const Content = (props) => {
    const[first, second, third] = props.parts
    return (
        <>
            <p>
                {first.name} {first.exercises}
            </p>
            <p>
                {second.name} {second.exercises}
            </p>
            <p>
                {third.name} {third.exercises}
            </p>
        </>
    )
}


const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}

ReactDOM.render(
    <App/>
    , document.getElementById('root'))