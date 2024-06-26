import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './work.css';

function WorkCard(props) {
  const { work } = props;
  const tech = work.technologies;
  const techList = tech.toString();

  return (
    <Card bg='light' className='work-card'>
      <Card.Img variant='top' src={work.screenshot} />
      <Card.Body>
        <Card.Title className='text-center'>{work.title}</Card.Title>
        <Card.Subtitle className='text-center'>{work.tagline}</Card.Subtitle>
        <Card.Text className='tech m-0 fs-6 pt-3'>Technologies:</Card.Text>
        <Card.Text>{techList}</Card.Text>
        <Card.Text>{work.description}</Card.Text>
      </Card.Body>
      <Card.Body className='text-center'>
        {work.github ? (
          <Button variant="primary" className='work-btn m-2' href={work.github} target="_blank">Code</Button>
        ) : null}
        {work.demo ? (
          <Button variant="primary" className='work-btn m-2' href={work.demo} target="_blank">Demo</Button>
        ) : null}
        {work.liveSite ? (
          <Button variant="primary" className='work-btn m-2' href={work.liveSite} target="_blank">Website</Button>
        ) : null}
        {work.caseStudy ? (
          <Link className="btn btn-primary m-2" to="/case-study">Case Study</Link>
        ) : null}
      </Card.Body>
    </Card>    
  );
}

export default WorkCard;