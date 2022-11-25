import React from 'react';
import { Link } from 'react-router-dom';
import reactImg from '../../assets/images/react.jpg'
const Blog = () => {
    return (
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 mt-20'>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src={reactImg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        What are the different ways to manage a state in a React application?
                    </h2>
                    <p className='text-start'>There are several ways to manage states in React, including the use of:<br />
                        i) Hooks<br />
                        ii) React Context API<br />
                        iii) Apollo Link State<br />
                        iv) setState<br /></p>

                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src={reactImg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        How does prototypical inheritance work?
                    </h2>
                    <p className='text-start'>Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype.</p>

                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src={reactImg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        What is a unit test? Why should we write unit tests?
                    </h2>
                    <p className='text-start'>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>

                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <figure><img src={reactImg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        React vs. Angular vs. Vue?
                    </h2>
                    <p className='text-start bordered'><table width="100%">

                        <thead>
                            <tr>
                                <th width="25%"></th>
                                <th width="25%"><strong>Angular</strong></th>
                                <th width="25%"><strong>React</strong></th>
                                <th width="25%"><strong>Vue</strong></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Initial release</td>
                                <td>2010</td>
                                <td>2013</td>
                                <td>2014</td>
                            </tr>
                            <tr>
                                <td>Official site</td>
                                <td><Link to="https://angular.io" target="_blank" rel="noopener">angular.io</Link></td>
                                <td><Link to="https://reactjs.org" target="_blank" rel="noopener">reactjs.org</Link></td>
                                <td><Link to="https://vuejs.org" target="_blank" rel="noopener">vuejs.org</Link></td>
                            </tr>
                            <tr>
                                <td>Current version</td>
                                <td>13.x</td>
                                <td>17.x</td>
                                <td>3.x</td>
                            </tr>
                            <tr>
                                <td>Used by</td>
                                <td>Google, Wix</td>
                                <td>Facebook, Uber</td>
                                <td>Alibaba, GitLab</td>
                            </tr>
                        </tbody>
                    </table></p>

                </div>
            </div>
        </div>
    );
};

export default Blog;