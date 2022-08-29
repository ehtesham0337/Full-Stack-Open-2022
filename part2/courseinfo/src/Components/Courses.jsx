import Header from "./Header";
import Content from "./Content";

const totalExercices = (parts) => {
  return parts.reduce((all, part) => all + part.exercises, 0)
}

const Courses = ({course}) => {
  return(
    <div>
    <Header header={course.name}/>
    <Content content={course.parts}/>
    <p>
      <b>total of {totalExercices(course.parts)} exercises</b>
    </p>
    </div>
  )
}

export default Courses
