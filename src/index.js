import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
  <React.StrictMode>
    <App  />
  </React.StrictMode>
  </AppProvider>
);

const functions = require("firebase-functions");
const express = require("express");

const app = express();
app.get("/", (req, res) => res.send("Hello, Firebase!"));

exports.app = functions.https.onRequest(app);

