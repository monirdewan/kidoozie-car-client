import React from 'react';
import img from '../../assets/blogs/blogs.png'

const Blogs = () => {
    return (
        <div className='my-14'>
            <h2 className='text-5xl text-center text-[#2FBDF3] font-bold'>Our Blogs</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                <div>
                    <div><img src={img} alt="" /></div>
                </div>
                <div>
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                           1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
                        </div>
                        <div className="collapse-content">
                            <p className='mb-4'>Access Token:
                                An access token is a credential that is used to access protected resources on behalf of a user or an application. It is typically issued by an authorization server after a user has successfully authenticated. The access token contains information about the user or application and the permissions granted. It is usually a short-lived token with an expiration time.e</p>
                            <p className='mb-4'>
                                Refresh Token:
                                A refresh token is a long-lived credential that is used to obtain a new access token when the current one expires. Unlike access tokens, refresh tokens are not included in every API request. Instead, they are used to request a new access token from the authorization server when needed.
                            </p>
                            <p className='mb-4'>
                                Access tokens: Access tokens are typically stored in memory or in a client-side storage mechanism like browser cookies or local storage. Storing access tokens in memory is more secure since they are not persisted on disk.
                            </p>
                            <p>
                                Refresh tokens: Refresh tokens are long-lived and more sensitive than access tokens. They should be stored in a secure, server-side location, such as an encrypted session store or a secure HTTP-only cookie
                            </p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse  collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                           2. Compare SQL and NoSQL databases?
                        </div>
                        <div className="collapse-content">
                            <p>SQL databases are based on a fixed schema and use structured query language (SQL) for data querying. They are suitable for structured data and complex transactions. NoSQL databases offer flexible schema and various data models, and they are ideal for unstructured or rapidly changing data with high scalability requirements. They have different query languages/APIs and provide eventual consistency instead of strong consistency.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                       3. What is express js? What is Nest JS?
                        </div>
                        <div className="collapse-content">
                            <p className='mb-4'>Express.js is a minimal and flexible web application framework for Node.js that provides a simple and robust set of features for building web applications and APIs. It focuses on middleware-based routing and allows developers to handle HTTP requests and responses easily.
                            </p>
                            <p>
                            Nest.js is a progressive, extensible, and TypeScript-based framework for building efficient and scalable server-side applications. It is built on top of Express.js and provides a higher level of abstraction with a modular and organized architecture. Nest.js integrates well with other libraries and supports various features like dependency injection, decorators, and built-in support for WebSockets and GraphQL.
                            </p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                       4. What is MongoDB aggregate and how does it work?
                        </div>
                        <div className="collapse-content">
                            <p>MongoDB's aggregate is a powerful framework for data aggregation and analysis. It allows you to perform advanced operations on data, such as filtering, grouping, and transforming documents within a collection. The aggregation pipeline processes data in stages, where each stage performs a specific operation on the input documents and passes the result to the next stage, enabling complex data manipulations and calculations..
                            </p>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;