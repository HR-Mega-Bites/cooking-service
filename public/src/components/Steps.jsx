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
            <img src={step.photo} />
            <h4>{index + 1}</h4>
            <h4>{step.title}</h4>
            <p>{step.instruction}</p>
          </div>
        </Col>
        <Col lg={6}>
          {console.log('continuing on same row')}
          <div>
            <img src={props.steps[index + 1].photo} />
            <h4>{index + 2}</h4>
            <h4>{props.steps[index + 1].title}</h4>
            <p>{props.steps[index + 1].instruction}</p>
          </div>

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
