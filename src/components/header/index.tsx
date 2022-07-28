import React, { useEffect } from "react";
import { Button, notification } from "antd";
import styles from "./styles.module.css";
import { useContextComponent } from "../../context/appContext";
import { useMoralis } from "react-moralis";

const Header: React.FC = () => {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  const {
    address,
    setAddress,
    isConnected,
    setIsConnected,
    isLoading,
    setIsLoading,
    isConnecting,
    setIsConnecting,
  } = useContextComponent(); // importing the context

  const shortAddress = address.slice(0, 5) + "..." + address.slice(-5);

  ////////////////////////////////////////

  useEffect(() => {
    if (isAuthenticated) {
      setIsConnected(true);
    }
    return;
  }, [isAuthenticated]);

  const login = async () => {
    if (!isAuthenticated) {
      setIsConnecting(true);
      await authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          setAddress(user!.get("ethAddress"));
        })
        .catch(function (error) {
          setIsConnecting(false);
        });

      setIsConnecting(false);
    }

    isAuthenticated && setIsConnected(true);
    openLogInNotification();
  };

  const logOut = async () => {
    await logout();
    setIsConnected(false);
    openLogOutNotification();
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

  ///////////////////////////////////

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
