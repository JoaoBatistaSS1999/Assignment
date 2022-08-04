import React, { useEffect } from "react";
import { Button, notification } from "antd";
import styles from "./styles.module.css";
import { useContextComponent } from "../../context/appContext";
import { useMoralis } from "react-moralis";
import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum?: ethers.providers.ExternalProvider;
  }
}

const Header: React.FC = () => {
  const { authenticate, isAuthenticated, logout } = useMoralis();
  const { address, setAddress, isConnected, setIsConnected, setIsConnecting } =
    useContextComponent();
  const isMetamaskIsntalled = window.ethereum;
  const shortAddress = address.slice(0, 5) + "..." + address.slice(-5);

  const login = async () => {
    if (!isMetamaskIsntalled) return installMetamaskNotification();

    if (!isAuthenticated) {
      setIsConnecting(true);
      await authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          setAddress(user!.get("ethAddress"));
          console.log("im then");
          console.log(address);
        })
        .catch(function (error) {
          setIsConnecting(false);
          console.log("catch error");
          cancelWalletConnectionNotification();
        });

      // setIsConnecting(false);

      console.log(address);
      console.log(isAuthenticated);
      console.log("-----------------bottom of login-------------------");
    }
  };

  const logOut = async () => {
    await logout();
    setIsConnected(false);
    openLogOutNotification();
  };

  const cancelWalletConnectionNotification = () => {
    notification.error({
      message: "Connection Aborted!",
      description: "You have denied access to your wallet.",
      placement: "bottomRight",
    });
  };

  const installMetamaskNotification = () => {
    notification.error({
      message: "Install Metamask!",
      description:
        "You dont have Metamask installed. Please, add the extension to your browser and try again.",
      placement: "bottomRight",
    });
  };

  const openLogOutNotification = () => {
    notification.warn({
      message: "Metamask Disconected",
      description: "You have successfully disconected from Criptnomia!",
      placement: "bottomRight",
    });
  };

  const openLogInNotification = () => {
    notification.success({
      message: "Wallet Connected Successfully",
      description: "You can now display your assets, enjoy!",
      placement: "bottomRight",
    });
  };

  return (
    <nav className={styles.container}>
      <h1 className={styles.logo}>Criptnomia Project</h1>
      <div className={styles.buttonContainer}>
        <Button
          type='primary'
          disabled={isConnected}
          onClick={login}
          size='large'>
          {isConnected ? shortAddress : "Connect"}
        </Button>

        {isConnected && (
          <Button type='primary' danger={true} onClick={logOut} size='large'>
            Logout
          </Button>
        )}
      </div>
    </nav>
  );
};
export default Header;
