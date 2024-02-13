import "../global.css";
import React from "react";
import ReactDOMClient from "react-down/client";
import {Portfolio} from "./screens/Portfolio";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Portfolio/>);