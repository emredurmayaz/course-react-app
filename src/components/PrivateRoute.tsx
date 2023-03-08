import React from 'react';
import { Route, redirect } from 'react-router-dom';

//Create PrivateRoute component
//This component should render any component as a children.
//This component checks user's role and if it is ADMIN PrivateRoute returns component as children otherwise redirects to /courses.
