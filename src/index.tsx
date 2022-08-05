import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MoralisProvider } from "react-moralis";

// require("dotenv").config();

// const serverUrl = process.env["SERVER_URL"];
// const serverUrl = process.env.SERVER_URL;
// const appId = process.env.APP_ID;
// const appId = process.env["APP_ID"];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <MoralisProvider serverUrl={serverUrl} appId={appId}> */}

    <MoralisProvider
      serverUrl='https://epwcnvcahohc.usemoralis.com:2053/server'
      appId='yrxpjr90sSclnoVM49dOqfYYu8CmXbWA7iaKovqL'>
      <App />
    </MoralisProvider>
  </React.StrictMode>
);
