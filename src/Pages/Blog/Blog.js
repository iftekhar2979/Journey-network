import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import SingleBlog from './SingleBlog';
const Blog = () => {
  const blogPost = [
    {
      question: 'Difference between SQL and NoSQL ?',
      answer: ` SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). A SQL Database follows a table like structure which can have an 
      unlimited number of rows and every data present inside the database 
      is properly structured with Predefined Schemas, it is basically used 
      to manipulate Relational Databases Management Systems.
      `,
      answerSecond:` NoSQL is a class of DBMs that are non-relational and generally do not use SQL. A NoSQL Database is a Distributed Database where the data is very 
      unstructured with Dynamic Schema. Unlike SQL it cannot have unlimited 
      rows but it follows a Standard Schema Definition and can store all 
      sorts of data models with large distributed data in the form of 
      key-value pairs, graph databases, documents or wide-column stores`
    },
   { question:"What is JWT, and how does it work?",
    answer:`JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.`,
answerSecond:` Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key. User sign-in using username and password or google/facebook.`
},
{
    question:`What is the difference between javascript and NodeJS?`,
    answer:`JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.`,
    answerSecond:`Node. js is a single-threaded, open-source, cross-platform runtime environment for building fast and scalable server-side and networking applications. It runs on the V8 JavaScript runtime engine, and it uses event-driven, non-blocking I/O architecture, which makes it efficient and suitable for real-time applications.`
},{
    question: `How does NodeJS handle multiple requests at the same time?`,
    answer:`Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue . NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded`,
answerSecond:''
}
  ];
  return (
    <HelmetProvider>
    <div className='container my-4'>
         <Helmet>
        <title>Blog--World Explorer</title>
      </Helmet>
      <Accordion defaultActiveKey='0'>
       {
        blogPost?.map((item,index)=><SingleBlog key={index} data={item} index={index}></SingleBlog>)
       }
      </Accordion>
    </div>
    </HelmetProvider>
  );
};

export default Blog;
