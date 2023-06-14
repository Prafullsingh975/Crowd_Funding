import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import {ThirdwebProvider, ChainId} from "@thirdweb-dev/react"

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider>
        <App></App>
    </ThirdwebProvider>
);
