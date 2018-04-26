import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
const Steps = (props) => (
  <Grid>
    {props.steps.map((step, index) =>
    {if((index + 1) % 2 !== 0) {
      return (<Row key={index} className="show-grid">
        <Col lg={6}>
          {console.log('starting new row', step)}
          <div>
            <div>
              <img className="image" src={step.photo} />
            </div>
              <div className="instructions-content">
                <div className="step-title">
                  <span className="step-number">{index + 1}</span>
                  <span className="step-title-title">{step.title}</span>
                </div>
                <p>{step.instruction}</p>
              </div>
          </div>
        </Col>
        <Col lg={6}>
          {console.log('continuing on same row')}
          {/* <div>
            <img src={props.steps[index + 1].photo} />
            <h4>{index + 2}</h4>
            <h4>{props.steps[index + 1].title}</h4>
            <p>{props.steps[index + 1].instruction}</p>
          </div> */}
          { (props.steps[index + 1])?(<div>
            <div>
              <img className="image" src={props.steps[index + 1].photo} />
            </div>
              <div className="instructions-content">
                <div className="step-title">
                  <span className="step-number">{index +2}</span>
                  <span className="step-title-title">{props.steps[index + 1].title }</span>
                </div>
                <p>{props.steps[index + 1].instruction}</p>
              </div>
          </div>) : (<div></div>)}
        </Col>
      </Row>)
    } else {
      return
    }
  }
    )}
  </Grid>
);
//   <Grid>
// <Row className="show-grid">
// <Col xs={12} md={8}>
//   {console.log('logging steps within grid', props.steps[0])}
// </Col>
// <Col xs={6} md={4}>
//   <code>&lt;{'Col xs={6} md={4}'} /">&gt;</code>
// </Col>
// </Row>
//
// <Row className="show-grid">
// <Col xs={6} md={4}>
//   <code>&lt;{'Col xs={6} md={4}'} /">&gt;</code>
// </Col>
// <Col xs={6} md={4}>
//   <code>&lt;{'Col xs={6} md={4}'} /">&gt;</code>
// </Col>
// <Col xsHidden md={4}>
//   <code>&lt;{'Col xsHidden md={4}'} /">&gt;</code>
// </Col>
// </Row>
//
// <Row className="show-grid">
// <Col xs={6} xsOffset={6}>
//   <code>&lt;{'Col xs={6} xsOffset={6}'} /">&gt;</code>
// </Col>
// </Row>
//
// <Row className="show-grid">
// <Col md={6} mdPush={6}>
//   <code>&lt;{'Col md={6} mdPush={6}'} /">&gt;</code>
// </Col>
// <Col md={6} mdPull={6}>
//   <code>&lt;{'Col md={6} mdPull={6}'} /">&gt;</code>
// </Col>
// </Row>
// </Grid>
// );



export default Steps;
