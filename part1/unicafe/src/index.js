import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Header = (props) => (
    <><h1>{props.text}</h1></>
)



const Statistic = (props) => (
    <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
    </tr>
)


const Statistics = ({good, bad, neutral}) => {
    if (good === 0 && bad === 0 && neutral === 0) {
        return (
            <>No feedback given</>
        )
    }
    const total = good + bad + neutral
    let average = (good - bad) / total
    let positiveScore = (good /total) * 100
    if (isNaN(positiveScore)) { positiveScore = 0 }
    if (isNaN(average) ) { average = 0 }

    return (
        <table>
            <tbody>
                <Statistic text="good" value={good}/>
                <Statistic text="neutral" value={neutral}/>
                <Statistic text="bad" value={bad}/>
                <Statistic text="all" value={total}/>
                <Statistic text="average" value={average}/>
                <Statistic text="positive" value={positiveScore}/>
            </tbody>
        </table>
    )
}



const App = () => {

    const feedbackHeader = "give feedback"
    const statsHeader = "statistics"


    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const setGoodValue = (value) => (setGood(value))
    const setBadValue = (value) => (setBad(value))
    const setNeutralValue = (value) => (setNeutral(value))

    return (
        <div>
            <Header text={feedbackHeader}/>
            <Button handleClick={() => setGoodValue(good +1)} text = "good"/>
            <Button handleClick={() => setNeutralValue(neutral +1)} text = "neutral"/>
            <Button handleClick={() => setBadValue(bad+1)} text = "bad"/>
            <Header text={statsHeader}/>
            <Statistics good={good} bad={bad} neutral={neutral} />
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)