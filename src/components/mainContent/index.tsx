import React from "react";
import { Outlet, Link } from "react-router-dom";

import "./styles.css";
import { Button } from "antd";
import { useContextComponent } from "../../context/appContext";

const MainContent: React.FC = () => {
  const { isConnected, setIsConnected, isLoading, setIsLoading } =
    useContextComponent(); // importing the context

  const displayButtons = (
    <React.Fragment>
      <Link to='/nfts' className='link'>
        <Button type='default' block={true}>
          NFTs
        </Button>
      </Link>
      <Link to='/tokenbalances' className='link'>
        <Button type='default' block={true}>
          Tokens
        </Button>
      </Link>
    </React.Fragment>
  );

  const connectTitle = (
    <h2 className='title'>Connect your wallet to display your assets!</h2>
  );

  return (
    <div className='container'>
      <div className='buttonContainer'>
        {isConnected ? displayButtons : connectTitle}
      </div>

      <div className='content'>
        <Outlet />
      </div>
    </div>
  );
};
export default MainContent;
