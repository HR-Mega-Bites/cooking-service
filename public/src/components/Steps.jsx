import React from 'react';

const Steps = (props) => (
  <div>
    <h1> This things is kinda working now</h1>
    {console.log('here I am', props.steps)}
    {props.steps.map((step, index) =>
      <div key={index}>
        <img src={step.photo} />
        <h4>{index + 1}</h4>
        <h4>{step.title}</h4>
        <p>{step.instruction}</p>
      </div>
    )}
  </div>
)



export default Steps;
