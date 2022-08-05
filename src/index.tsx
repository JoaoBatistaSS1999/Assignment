import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MoralisProvider } from "react-moralis";

const serverUrl = process.env.REACT_APP_SERVER_URL!;
const appId = process.env.REACT_APP_APP_ID!;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MoralisProvider serverUrl={serverUrl} appId={appId}>
      <App />
    </MoralisProvider>
  </React.StrictMode>
);
