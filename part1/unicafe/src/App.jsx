import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const StastisticLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({good, neutral, bad}) => {
  const sum = good + neutral + bad
  const average = ((good - bad) / sum).toFixed(2)
  const positive = (good / sum * 100).toFixed(2)
  if(sum === 0){
    return <p>No feedback given</p>
  }
  return (
    <div>
      <table>
        <thead>
          <tr><th colSpan={2}>Statistics</th></tr>
        </thead>
        <tbody>
          <StastisticLine text={"Good"} value={good}/>
          <StastisticLine text={"Neutral"} value={neutral}/>
          <StastisticLine text={"Bad"} value={bad}/>
          <StastisticLine text={"Average"} value={average}/>
          <StastisticLine text={"Positive"} value={positive+"%"}/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={()=>setGood(good + 1)} text={"Good"}/>
      <Button handleClick={()=>setNeutral(neutral + 1)} text={"Neutral"}/>
      <Button handleClick={()=>setBad(bad + 1)} text={"Bad"}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App