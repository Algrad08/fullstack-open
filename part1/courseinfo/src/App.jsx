const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      {props.obj.map((part, i) => (
        <Part key={i} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}
const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}
const Total = (props) => {
  const total = props.total.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
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
      <Header course={course.name}/>
      <Content obj={course.parts}/>
      <Total total={course.parts} />
    </div>
  )
}

export default App