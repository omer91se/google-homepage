import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {
  return(
    <>
    <Part 
      part={props.parts[0].name} exercises={props.parts[0].exercises} 
    />
    <Part 
      part={props.parts[1].name} exercises={props.parts[1].exercises}
    />
    <Part
     part={props.parts[2].name} exercises={props.parts[2].exercises}
    />  
    </>

  )
}

const Part = (props) => {
  return(
    <p>{props.part} {props.exercises}</p>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>
  )
}

const AppOld = () => {
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
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/> 
    </div>
  )
}


const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
};

const Button = (props) => {
  return (
    <button onClick={props.onClick}> 
      {props.name}
    </button>
  )
};

const App = (props) => {
  const [ counter, setCounter ] = useState(0);

const handleClick = () => setCounter(counter + 1);

const handleReset = () => setCounter(0);

const handleMinus = () => setCounter(counter - 1);

  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={handleClick} name='+' /> 
      <Button onClick={handleMinus} name='-' />
      <Button onClick={handleReset} name='Reset' />
    </div>
  )
};

  ReactDOM.render(<App />, 
  document.getElementById('root'));

// ReactDOM.render(<App />, document.getElementById('root'))