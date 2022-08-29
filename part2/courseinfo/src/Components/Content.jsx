import Parts from "./Parts.jsx"

const Content = ({content}) =>  {
    return content.map(data => <Parts key={data.id} coursePart={data}/>)
} 

export default Content