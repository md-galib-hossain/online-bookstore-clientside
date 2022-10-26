import React from "react";
import { Button, Card } from "react-bootstrap";

const Blog = () => {
  return (
    <div>
      <Card className="mb-2">
        <Card.Header>What is cors?</Card.Header>
        <Card.Body>
          <Card.Text>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mb-2">
        <Card.Header>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </Card.Header>
        <Card.Body>
          <Card.Text>
            Firebase provides detailed documentation and cross-platform SDKs to
            help you build and ship apps on Android, iOS, the web, C++, and
            Unity.Usually, authentication by a server entails the use of a user
            name and password. Other ways to authenticate can be through cards,
            retina scans, voice recognition, and fingerprints.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mb-2">
        <Card.Header>How does the private route work?</Card.Header>
        <Card.Body>
          <Card.Text>
            The private route component is similar to the public route, the only
            change is that redirect URL and authenticate condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
            (Logged in)
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>What is Node? How does Node work?</Card.Header>
        <Card.Body>
          <Card.Text>
            A node is a basic unit of a data structure, such as a linked list or
            tree data structure. Nodes contain data and also may link to other
            nodes. Links between nodes are often implemented by pointers. It is
            a used as backend service where javascript works on the server-side
            of the application. This way javascript is used on both frontend and
            backend. Node. js runs on chrome v8 engine which converts javascript
            code into machine code, it is highly scalable, lightweight, fast,
            and data-intensive.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blog;
