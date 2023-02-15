import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const SingleBlog = ({data,index}) => {
    const {question,answer,answerSecond}=data
    return (
        <>
         <Accordion.Item eventKey={index}>
          <Accordion.Header>{question}</Accordion.Header>
          <Accordion.Body>
            {answer}
            <br />
            <br />
            {answerSecond}
          </Accordion.Body>
        </Accordion.Item>
        </>

    );
};

export default SingleBlog;