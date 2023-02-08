Blog to support the Phase 3 project (see below for details) I built for my Software engineering course.

# Phase 3 Project Guidelines

## Learning Goals

- Build a web basic API with Sinatra and Active Record to support a React
  frontend

## Introduction

Congrats on getting through all the material for Phase 3! Now's the time to put
it all together and build something from scratch to reinforce what you know and
expand your horizons.

The focus of this project is **building a Sinatra API backend** that uses
**Active Record** to access and persist data in a database, which will be used
by a separate **React frontend** that interacts with the database via the API.

## Requirements

For this project, you must:

- Use Active Record to interact with a database.
- Have at least two models with a one-to-many relationship.
- At a minimum, set up the following API routes in Sinatra:
  - create and read actions for both models
  - full CRUD capability for one of the models
- Build a separate React frontend application that interacts with the API to
  perform CRUD actions.
- Implement proper front end state management. You should be updating state using a
  setState function after receiving your response from a POST, PATCH, or DELETE 
  request. You should NOT be relying on a GET request to update state. 
- Use good OO design patterns. You should have separate classes for each of your
  models, and create instance and class methods as necessary. 
- Routes in your application (both client side and back end) should follow RESTful
  conventions.
- Use your back end optimally. Pass JSON for related associations to the front 
  end from the back end. You should use active record methods in your controller to grab
  the needed data from your database and provide as JSON to the front end. You
  should NOT be relying on filtering front end state or a separate fetch request to
  retrieve related data.
