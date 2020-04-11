import React, {useState} from 'react'
import ReactDOM from 'react-dom'

function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}

const App = (props) => {

    const [selected, setSelected] = useState(0)
    const [score, setScore] = useState(props.scoreArray)
    const setNextSelect = (value) => setSelected(value)
    const setScoreOfAnecdote = (index) => {
        const copy = [...score]
        copy[index] += 1
        setScore(copy)
    }

    const highestAnecdoteIndex = indexOfMax(score)

    const getRandomNum = () => Math.floor(Math.random() * props.anecdotes.length)
    return (
        <div>
            <AnecdoteDisplay header="Anecdote of the day" text={props.anecdotes[selected]} value={score[selected]}/>
            <p><button onClick={() => setNextSelect(getRandomNum())}>next anecdote</button></p>
            <p><button onClick={() => setScoreOfAnecdote(selected)}>vote</button></p>
            <AnecdoteDisplay header="Anecdote with most votes" text={props.anecdotes[highestAnecdoteIndex]} value={score[highestAnecdoteIndex]}/>

        </div>
    )
}

const AnecdoteDisplay = (props) => (
    <>
        <h1>{props.header}</h1>
        <p>{props.text}</p>
        <p>has {props.value} votes</p>
    </>
)


const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const scoreArray = Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf, 0)


ReactDOM.render(
    <App anecdotes={anecdotes} scoreArray={scoreArray}/>,
    document.getElementById('root')
)

