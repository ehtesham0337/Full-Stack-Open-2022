const Header = (header) => {
  return (
    <div>
      <h1>{header.course.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercises} </p>
    </div>
  )
}

const Content = (content) => {
  return (
    <div>
      <Part part = {content.parts[0].name} exercises = {content.parts[0].exercises}/>    
      <Part part = {content.parts[1].name} exercises = {content.parts[1].exercises}/>
      <Part part = {content.parts[2].name} exercises = {content.parts[2].exercises}/>
    
    </div>
  )
}

const Total = (total) => {
  return (
    <div>
      <p>Number of exercises: {total.parts[0].exercises + total.parts[1].exercises + total.parts[2].exercises} </p>
    </div>
  )
}

const App = () => {
  const course = {
  name : 'Half Stack application development',

   parts : [
    {
      name : 'Fundamentals of React',
      exercises : 10
    },
    {
      name : 'Using props to pass data',
      exercises : 7
    },
    {
      name : 'State of a component',
      exercises : 14
    }

  ]
}

  return (
    <div>
    <Header course = {course} />
    <Content parts = {course.parts} />
    <Total parts = {course.parts} />
   
   </div>
  )
}




export default App;
