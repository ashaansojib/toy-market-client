import React from 'react';
import useTitle from '../../hooks/Title';

const Blogs = () => {
    useTitle("Blogs")
    return (
        <div className='my-container'>
            <div className='p-4 bg-sky-100 rounded-xl my-4'>
                <h2 className='text-2xl font-semibold text-gray-900'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p className='text-xl text-slate-600'>An access token and a refresh token are both important components of authentication system commonly used in web and mobile application. Here is a explanation of what they are. When a user logs into an application, the server verifies their credentials and issues an access token. This token is then included in subsequent requests to the server to authenticate the user and grant access to protected resources. The server verifies the access token and allows or denies the requested actions based on the user's permissions. A refresh token is also issued by the authentication server alongside the access token. Unlike the access token, the refresh token is long-lived and does not expire as frequently. Its purpose is to obtain a new access token once the previous one expires. Both the access token and refresh token need to be securely stored on the client-side.</p>
            </div>
            <div className='p-4 bg-sky-100 rounded-xl mb-4'>
                <h2 className='text-2xl font-semibold text-gray-900'>Compare SQL and NoSQL databases?</h2>
                <p className='text-xl text-slate-600'>SQL Structured Query Language and NoSQL Not only SQL are two different types of database management systems that differ in their data models, query languages, and scalability characteristics. Here's a comparison between SQL and NoSQL databases. SQL databases follow a rigid, tabular data model where data is organized into tables with predefined schemas. Each row represents a record, and each column represents a specific attribute or field. NoSQL databases offer a more flexible data model that can vary across different documents, key-value pairs, wide-column stores, or graphs. They allow for dynamic schema changes and can accommodate unstructured or semi-structured data. It's worth noting that these are general characteristics, and there are variations within each type of database</p>
            </div>
            <div className='p-4 bg-sky-100 rounded-xl mb-4'>
                <h2 className='text-2xl font-semibold text-gray-900'>What is express js? What is Nest JS? ?</h2>
                <p className='text-xl text-slate-600'>Express.js and Nest.js are both popular web application frameworks used in the JavaScript ecosystem. Here's an overview of each framework. Express.js is known for its simplicity, flexibility, and vast ecosystem of third-party modules. It is suitable for building small to medium-sized applications and APIs that require a lightweight and customizable framework. Nest.js is a progressive, TypeScript-based web application framework that leverages concepts from Angular and Express.js</p>
            </div>
            <div className='p-4 bg-sky-100 rounded-xl mb-4'>
                <h2 className='text-2xl font-semibold text-gray-900'>What is MongoDB aggregate and how does it work?</h2>
                <p className='text-xl text-slate-600'>MongoDB's aggregate is a method used to perform advanced data analysis and transformation operations on collections within a MongoDB database. It allows you to process large amounts of data and apply various stages of operations to generate aggregated results. The aggregate method takes an array of pipeline stages as its parameter. Each stage represents a specific operation that is applied to the input data, and the output of one stage becomes the input for the next stage. The aggregate method takes an array of pipeline stages as its parameter. Each stage represents a specific operation that is applied to the input data, and the output of one stage becomes the input for the next stage.</p>
            </div>
        </div>
    );
};

export default Blogs;