import React from 'react';
import { Accordion, Table } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <h1>Questions-Answers Section</h1>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between authorization and authentication</Accordion.Header>
                    <Accordion.Body>
                        <Table striped bordered hover>
                            <thead>
                                <tr className='text-center'>
                                    <th>Authorization </th>
                                    <th>Authentication</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Authentication is the process of verifying about someone.</td>
                                    <td>Authorization is the process of verifying about specific applications, files, and data a user has access to.</td>
                                </tr>
                                <tr>
                                    <td>The first step of authentication is a good identity and access management process.</td>
                                    <td>After Authentication, authorization always takes place .</td>
                                </tr>
                                <tr>
                                    <td>Authentication is visible to and partially changeable by the user.</td>
                                    <td>Authorization is nOt visible to or changeable by the user.</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                    Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick.Everything from databases, analytics to crashing reports are included in Firebase. So, the app development teams can stay focused on improving the user experience. Authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What other services does firebase provide other than authentication?</Accordion.Header>
                    <Accordion.Body>
                    I do not have any idea right now. But i will surely know about it.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;