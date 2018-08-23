/**
 * This came from https://medium.com/@antonybudianto/react-router-testing-with-jest-and-enzyme-17294fefd303
 * Really helpful way of testing react router!
 */
import React from 'react';
const rrd = require('react-router-dom');
// Just render plain div with its children
rrd.BrowserRouter = ({children}) => <div>{children}</div>
module.exports = rrd;