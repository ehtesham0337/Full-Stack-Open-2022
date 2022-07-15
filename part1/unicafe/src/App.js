import { useState } from "react";

const Button = ({handleClick, text}) =>
   <button
    onClick = {handleClick}> 
     {text}
    </button> 


const StatisticLine = ({text, value}) => {
  return (
    <div>
      <p>{text}: {value}</p>
    </div>
  )
}

const Statistics = (props) => {
  if (props.good == 0 && props.bad == 0 && props.neutral == 0){
    return (
      <div>
        <h1>Statistics</h1>
        <p>No Feedback Given</p>
      </div>
    )
  }
  else
    return (
      <div>
        <h1>{props.text}</h1>
        <StatisticLine text="Good" value={props.good}/>
        <StatisticLine text="Neutral" value={props.neutral}/>
        <StatisticLine text="Bad" value={props.bad}/>
        <StatisticLine text="All" value={props.total}/>
        <StatisticLine text="Average" value={(props.good - props.bad) / props.total}/>
        <StatisticLine text="Positive" value={(props.good / props.total) + " %" } />

      </div>
    )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad


  return (
    <div>      
      <h1>Give Feedback</h1>

      <Button handleClick={() => setGood(good + 1)} text = "Good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text = "Neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text = "Bad"/>

      <Statistics text = "Statistics" good = {good} neutral = {neutral} bad = {bad} total = {total}/>

    </div>
  )
}


export default App;
