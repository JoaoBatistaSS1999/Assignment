import React from "react";
import { Outlet, Link } from "react-router-dom";

import "./styles.css";
import { Button, BackTop, Spin } from "antd";
import { useContextComponent } from "../../context/appContext";
import BoredApe from "../../assets/BoredApe.png";

const MainContent: React.FC = () => {
  const {
    isConnected,
    setIsConnected,
    isLoading,
    setIsLoading,
    isConnecting,
    setIsConnecting,
  } = useContextComponent(); // importing the context

  const displayButtons = (
    <React.Fragment>
      <Link to='/nfts' className='link'>
        <Button type='primary' size='large' block={true}>
          NFTs
        </Button>
      </Link>
      <Link to='/tokenbalances' className='link'>
        <Button type='primary' size='large' block={true}>
          Tokens
        </Button>
      </Link>
    </React.Fragment>
  );

  const connectTitle = (
    <h2 className='title'>Connect your wallet to display your assets!</h2>
  );

  const placeHolder = (
    <div>
      <img className='place-holder' src={BoredApe} alt='bored-ape' />
    </div>
  );

  return (
    <div className='container'>
      <div className='buttonContainer'>
        {isConnected ? displayButtons : connectTitle}
      </div>

      <div className='content'>
        {isConnected ? <Outlet /> : placeHolder}

        {isConnecting && (
          <div className='example'>
            <Spin
              size='large'
              spinning={isConnecting}
              tip='Connecting Wallet'
              style={{ fontSize: 20, color: "#e5f8f8" }}
            />
          </div>
        )}

        <BackTop />
      </div>
    </div>
  );
};
export default MainContent;
