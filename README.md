# cs465-fullstack
CS-465 Full Stack Development with MEAN
# Architecture
•	Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

Express HTML is a frontend delivered by the backend, serving HTML files as a response to client requests. The Express HTML in this project is rendered on the server using handlebars, processes any necessary data, and then sends it to the client to load. On the other hand, Angular SPA is a frontend framework that manages the user interface on the client side. The HTML templates are rendered directly in the browser—Angular – two-way data binding updates any changes in the data automatically in real-time.   

•	Why did the backend use a NoSQL MongoDB database?

Mongo DB stores data in BSON document (JSON) format, making it fit for JavaScript-based applications. MongoDB is a document-oriented NoSQL database that supports horizontal scaling, making it highly scalable. Additionally, MongoDB is schema-less, allowing flexible data structure. 

# Functionality
•	How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JSON is a text-based format designed to transmit data between a server and a client. JavaScript is a programming language, and code can contain variables, functions, and other programming constructs. JSON acts as a bridge between the frontend and backend. When a user interacts with a web application, the frontend sends data to the backend in JSON format through HTTP requests using fetch. The backend processes the request and then sends a response back to the frontend in JSON format; then, the frontend will parse the JSON data and update the data to the UI. 

•	Provide instances in the full stack process when you refactored code to improve functionality and efficiencies and name the benefits that come from reusable user interface (UI) components.

In module 2, I had to migrate the static HTML to the HBS template view and refactor the header and footer functions into partials to reuse the header and footer for all other views.  

In module 5, I refactored the existing codebase so the web application could fetch and retrieve information directly from the MongoDB database through controllers and routes, using RESTful API and HTTP methods to perform CRUD operations on data.

In module 6, I refactor trip rendering logic into separate angular components (e.g., trip-card. component and trip-listing. component ), reducing one large class into smaller classes. So, I can provide a way to toggle between card view and list view. Also, the card and list component can be reused in the other part of the application.  

There are many benefits that come from reusable user interface UI components. To name a few, it keeps a uniform appearance across the application. It is easier to maintain because all changes and updates to a component only need to be made in one place. As the project grows, we can continue using existing components anywhere in the application. 

# Testing
•	Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full-stack application.

Methods for request and retrieval in APIs involve various HTTP methods, which correspond to CRUD (Create, Read, Update, Delete) operations for managing data:

POST: Create a new resource  
GET: Retrieve resource  
PUT: Update an existing resource  
DELETE: Delete resource   

Endpoints are specific routes (URLs) in the application that correspond to these operations. For Example: /api/trips (lists all trips),  api/trips/trips_code (provides details for a specific trip based on the trip code to allow updates or deletion). Testing these endpoints ensures that they return the correct responses and handle data properly. I used Postman, MongoDB compass, and manual testing to verify the endpoint functionally. 
In terms of security, we used JSON Web Token (JWT) to authenticate the users. The API Gateway validates the JWT and routes HTTP requests based on the user's authentication status. This approach helps secure the application by ensuring only authenticated users can access certain resources or perform specific actions. 

# Reflection
•	How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course helped me achieve my professional goal by providing a thorough understanding of how to build full-stack applications using the MEAN stack—MongoDB, Express.js, Angular, and Node.js. I've learned to design schema-less data models with MongoDB, develop RESTful APIs to enable communication between the frontend and backend and implement two-way data binding in Angular to ensure that my user interface stays in sync with the application state. 

Additionally, I've gained experience in routing to navigate between views and handling asynchronous operations effectively, integrating the frontend and backend, connecting with MongoDB, and implementing user authentication and authorization. I've developed the ability to manage error handling and debugging to maintain a reliable application. These valuable skills I've gained are essential for web development and enhanced my marketability as a candidate in the web development field. 
 
