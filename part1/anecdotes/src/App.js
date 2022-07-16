import { useState } from "react"

const Button = ({handleClick, text}) =>
   <button
    onClick = {handleClick}> 
     {text}
    </button> 


const App = () => {
  const [selected, setSelected] = useState(0)
  
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The best thing about a boolean is even if you are wrong, you are only off by a bit.',
    'Without requirements or design, programming is the art of adding bugs to an empty text file. (Louis Srygley)',
    'Before software can be reusable it first has to be usable. (Ralph Johnson)',
    'The best method for accelerating a computer is the one that boosts it by 9.8 m/s2.',
    'It\'s not a bug - it\'s an undocumented feature.', 
    'One man\'s crappy software is another man\'s full-time job. (Jessica Gaston)',
    'A good programmer is someone who always looks both ways before crossing a one-way street. (Doug Linder)',
    'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. (Martin Golding)',
    'Programming is like sex. One mistake and you have to support it for the rest of your life. (Michael Sinz)',
    'Deleted code is debugged code. (Jeff Sickel)',
    'Walking on water and developing software from a specification are easy if both are frozen. (Edward V Berard)',
    'If debugging is the process of removing software bugs, then programming must be the process of putting them in. (Edsger Dijkstra)',
    'Software undergoes beta testing shortly before it’s released. Beta is Latin for “still doesn\'t work.',
    'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the universe trying to produce bigger and better idiots. So far, the universe is winning. (Rick Cook)',
    'There are only two kinds of programming languages: those people always bitch about and those nobody uses. (Bjarne Stroustrup)',
    'In order to understand recursion, one must first understand recursion.',
    'The cheapest, fastest, and most reliable components are those that aren\'t there. ',
    'Don\'t worry if it doesn\'t work right. If everything did, you\'d be out of a job. (Mosher\'s Law of Software Engineering)'
  ]


  const randomNumGen = (min, max) => {
    const randNum = Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min))
    return randNum
  }
  
  return (
    <div> 

      <h2>{anecdotes[selected]}</h2>
      <Button text="Next Anecdote" handleClick={() => setSelected(randomNumGen(0, anecdotes.length))}/>
 
    </div>
  )
}

export default App
