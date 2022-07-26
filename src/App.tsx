import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";

import { ContextProvider } from "./context/appContext";
import NFTDisplay from "./pages/nftDisplay";
import TokenBalances from "./pages/tokenBalances";
import Home from "./pages/home";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/nfts' element={<NFTDisplay />} />
            <Route path='/tokenbalances' element={<TokenBalances />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
